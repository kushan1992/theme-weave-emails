
import React from 'react';
import { EmailTheme, EmailTemplate } from '@/types/theme';
import { generateEmailHTML } from '@/utils/htmlGenerator';

interface EmailTemplatePreviewProps {
  theme: EmailTheme;
  template: EmailTemplate;
}

const EmailTemplatePreview: React.FC<EmailTemplatePreviewProps> = ({ theme, template }) => {
  const fullHTML = generateEmailHTML(theme, template);
  
  // Extract just the body content from the full HTML
  const bodyMatch = fullHTML.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const bodyContent = bodyMatch ? bodyMatch[1] : fullHTML;

  return (
    <div className="w-full">
      <div 
        className="email-template-preview"
        dangerouslySetInnerHTML={{ __html: bodyContent }}
      />
    </div>
  );
};

export default EmailTemplatePreview;
