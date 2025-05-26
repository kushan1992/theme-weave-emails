
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EmailTemplate } from '@/types/theme';
import { Mail, Heart, Megaphone, Receipt } from 'lucide-react';

interface TemplateSelectorProps {
  selectedTemplate: EmailTemplate | null;
  onTemplateSelect: (template: EmailTemplate) => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({ 
  selectedTemplate, 
  onTemplateSelect 
}) => {
  const templates: EmailTemplate[] = [
    {
      id: 'welcome',
      name: 'Welcome Email',
      type: 'welcome',
      description: 'Greet new users and guide them through getting started'
    },
    {
      id: 'newsletter',
      name: 'Newsletter',
      type: 'newsletter',
      description: 'Share updates, news, and valuable content with subscribers'
    },
    {
      id: 'promotional',
      name: 'Promotional',
      type: 'promotional',
      description: 'Promote special offers, sales, and marketing campaigns'
    },
    {
      id: 'transactional',
      name: 'Order Confirmation',
      type: 'transactional',
      description: 'Confirm purchases and provide order details'
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'welcome':
        return <Heart className="w-5 h-5" />;
      case 'newsletter':
        return <Mail className="w-5 h-5" />;
      case 'promotional':
        return <Megaphone className="w-5 h-5" />;
      case 'transactional':
        return <Receipt className="w-5 h-5" />;
      default:
        return <Mail className="w-5 h-5" />;
    }
  };

  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'welcome':
        return 'bg-green-100 text-green-800';
      case 'newsletter':
        return 'bg-blue-100 text-blue-800';
      case 'promotional':
        return 'bg-purple-100 text-purple-800';
      case 'transactional':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Select Email Template</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {templates.map((template) => (
          <Card
            key={template.id}
            className={`cursor-pointer transition-all hover:shadow-md ${
              selectedTemplate?.id === template.id 
                ? 'ring-2 ring-blue-500 border-blue-500' 
                : 'hover:border-gray-400'
            }`}
            onClick={() => onTemplateSelect(template)}
          >
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center justify-between text-base">
                <div className="flex items-center gap-2">
                  {getIcon(template.type)}
                  {template.name}
                </div>
                <Badge className={getBadgeColor(template.type)}>
                  {template.type}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">{template.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;
