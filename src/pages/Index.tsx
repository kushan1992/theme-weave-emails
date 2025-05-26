import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import ThemeUploader from '@/components/ThemeUploader';
import TemplateSelector from '@/components/TemplateSelector';
import EmailTemplatePreview from '@/components/EmailTemplatePreview';
import { EmailTheme, EmailTemplate } from '@/types/theme';
import { Palette, Mail, Eye, Download } from 'lucide-react';
import { downloadAllTemplatesAsHTML } from '@/utils/htmlGenerator';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [currentTheme, setCurrentTheme] = useState<EmailTheme | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<EmailTemplate | null>(null);

  // Default theme for initial preview
  const defaultTheme: EmailTheme = {
    id: 'default',
    name: 'Default Theme',
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

  const activeTheme = currentTheme || defaultTheme;

  const handleDownloadAllTemplates = () => {
    if (activeTheme) {
      downloadAllTemplatesAsHTML(activeTheme);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Email Template Builder</h1>
                <p className="text-gray-600">Create beautiful, branded email templates with JSON themes</p>
              </div>
            </div>
            
            {/* Download Button */}
            <Button 
              onClick={handleDownloadAllTemplates}
              className="flex items-center gap-2"
              disabled={!activeTheme}
            >
              <Download className="w-4 h-4" />
              Download All Templates
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Panel - Theme & Template Selection */}
          <div className="lg:col-span-1 space-y-6">
            {/* Theme Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-5 h-5" />
                  Theme Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ThemeUploader 
                  onThemeUpload={setCurrentTheme}
                  currentTheme={currentTheme}
                />
              </CardContent>
            </Card>

            <Separator />

            {/* Template Selection */}
            <TemplateSelector 
              selectedTemplate={selectedTemplate}
              onTemplateSelect={setSelectedTemplate}
            />
          </div>

          {/* Right Panel - Preview */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    Template Preview
                    {selectedTemplate && (
                      <span className="text-sm font-normal text-gray-500">
                        - {selectedTemplate.name}
                      </span>
                    )}
                  </CardTitle>
                  {selectedTemplate && (
                    <Button 
                      onClick={handleDownloadAllTemplates}
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Download HTML
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                {selectedTemplate ? (
                  <div className="space-y-4">
                    <div className="bg-gray-100 p-6 rounded-lg">
                      <EmailTemplatePreview 
                        theme={activeTheme}
                        template={selectedTemplate}
                      />
                    </div>
                    <div className="text-sm text-gray-600 bg-blue-50 p-4 rounded-lg">
                      <p className="font-medium mb-1">💡 Pro Tip:</p>
                      <p>
                        Upload a custom JSON theme to see how it transforms this template. 
                        Each theme automatically updates colors, fonts, spacing, and branding 
                        across all template types. Use the download button to export all templates as HTML files.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 text-gray-500">
                    <Mail className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <h3 className="text-lg font-medium mb-2">Select a Template</h3>
                    <p>Choose an email template from the left panel to see the live preview</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features Overview */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Palette className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">JSON-Based Theming</h3>
              <p className="text-sm text-gray-600">
                Define your brand colors, fonts, and spacing in a simple JSON format
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Multiple Templates</h3>
              <p className="text-sm text-gray-600">
                Choose from welcome, newsletter, promotional, and transactional templates
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Eye className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Live Preview</h3>
              <p className="text-sm text-gray-600">
                See your themed templates update in real-time as you make changes
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
