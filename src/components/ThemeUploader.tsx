
import React, { useState } from 'react';
import { Upload, FileText, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { EmailTheme } from '@/types/theme';

interface ThemeUploaderProps {
  onThemeUpload: (theme: EmailTheme) => void;
  currentTheme?: EmailTheme;
}

const ThemeUploader: React.FC<ThemeUploaderProps> = ({ onThemeUpload, currentTheme }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleFileUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const themeData = JSON.parse(e.target?.result as string);
        onThemeUpload(themeData);
        setUploadStatus('success');
        setTimeout(() => setUploadStatus('idle'), 2000);
      } catch (error) {
        console.error('Failed to parse theme JSON:', error);
        setUploadStatus('error');
        setTimeout(() => setUploadStatus('idle'), 2000);
      }
    };
    reader.readAsText(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type === 'application/json') {
      handleFileUpload(file);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const downloadSampleTheme = () => {
    const sampleTheme: EmailTheme = {
      id: 'sample-theme',
      name: 'Sample Corporate Theme',
      companyName: 'Your Company',
      colors: {
        primary: '#2563eb',
        secondary: '#64748b',
        accent: '#f59e0b',
        background: '#ffffff',
        text: '#1e293b',
        textSecondary: '#64748b'
      },
      fonts: {
        heading: 'Arial, sans-serif',
        body: 'Arial, sans-serif'
      },
      sizes: {
        headingLarge: '32px',
        headingMedium: '24px',
        headingSmall: '18px',
        bodyLarge: '16px',
        bodyMedium: '14px',
        bodySmall: '12px'
      },
      spacing: {
        small: '8px',
        medium: '16px',
        large: '32px'
      },
      borderRadius: '8px'
    };

    const blob = new Blob([JSON.stringify(sampleTheme, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sample-theme.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="w-5 h-5" />
          Theme Configuration
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            isDragOver 
              ? 'border-blue-500 bg-blue-50' 
              : uploadStatus === 'success'
              ? 'border-green-500 bg-green-50'
              : uploadStatus === 'error'
              ? 'border-red-500 bg-red-50'
              : 'border-gray-300'
          }`}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragOver(true);
          }}
          onDragLeave={() => setIsDragOver(false)}
          onDrop={handleDrop}
        >
          {uploadStatus === 'success' ? (
            <div className="text-green-600">
              <Check className="w-8 h-8 mx-auto mb-2" />
              <p>Theme uploaded successfully!</p>
            </div>
          ) : (
            <>
              <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
              <p className="text-gray-600 mb-2">
                Drag and drop your theme JSON file here, or
              </p>
              <label htmlFor="theme-upload" className="cursor-pointer">
                <Button variant="outline" type="button">
                  Browse Files
                </Button>
                <input
                  id="theme-upload"
                  type="file"
                  accept=".json"
                  className="hidden"
                  onChange={handleFileSelect}
                />
              </label>
            </>
          )}
        </div>

        <div className="flex gap-2">
          <Button variant="secondary" onClick={downloadSampleTheme} className="flex-1">
            Download Sample Theme
          </Button>
        </div>

        {currentTheme && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium mb-2">Current Theme: {currentTheme.name}</h4>
            <p className="text-sm text-gray-600">Company: {currentTheme.companyName}</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-sm text-gray-600">Colors:</span>
              <div className="flex gap-1">
                {Object.values(currentTheme.colors).map((color, index) => (
                  <div
                    key={index}
                    className="w-4 h-4 rounded-full border border-gray-300"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ThemeUploader;
