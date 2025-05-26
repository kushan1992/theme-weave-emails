
import React from 'react';
import { EmailTheme, EmailTemplate } from '@/types/theme';

interface EmailTemplatePreviewProps {
  theme: EmailTheme;
  template: EmailTemplate;
}

const EmailTemplatePreview: React.FC<EmailTemplatePreviewProps> = ({ theme, template }) => {
  const generateStyles = () => ({
    fontFamily: theme.fonts.body,
    backgroundColor: theme.colors.background,
    color: theme.colors.text,
    borderRadius: theme.borderRadius,
  });

  const headerStyles = {
    backgroundColor: theme.colors.primary,
    color: theme.colors.background,
    padding: theme.spacing.large,
    textAlign: 'center' as const,
  };

  const contentStyles = {
    padding: theme.spacing.large,
  };

  const buttonStyles = {
    backgroundColor: theme.colors.accent,
    color: theme.colors.background,
    padding: `${theme.spacing.medium} ${theme.spacing.large}`,
    borderRadius: theme.borderRadius,
    textDecoration: 'none',
    display: 'inline-block',
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer',
  };

  const renderTemplate = () => {
    switch (template.type) {
      case 'welcome':
        return (
          <div style={generateStyles()} className="max-w-2xl mx-auto shadow-lg">
            <div style={headerStyles}>
              <h1 style={{ 
                fontSize: theme.sizes.headingLarge, 
                margin: 0, 
                fontFamily: theme.fonts.heading 
              }}>
                Welcome to {theme.companyName}!
              </h1>
            </div>
            <div style={contentStyles}>
              <h2 style={{ 
                fontSize: theme.sizes.headingMedium, 
                color: theme.colors.primary,
                fontFamily: theme.fonts.heading,
                marginBottom: theme.spacing.medium
              }}>
                Thanks for joining us
              </h2>
              <p style={{ 
                fontSize: theme.sizes.bodyMedium, 
                lineHeight: '1.6',
                marginBottom: theme.spacing.medium
              }}>
                We're excited to have you on board! Get started by exploring our platform 
                and discovering all the amazing features we have to offer.
              </p>
              <div style={{ textAlign: 'center', margin: `${theme.spacing.large} 0` }}>
                <a href="#" style={buttonStyles}>
                  Get Started
                </a>
              </div>
              <p style={{ 
                fontSize: theme.sizes.bodySmall, 
                color: theme.colors.textSecondary,
                textAlign: 'center'
              }}>
                Need help? Reply to this email or contact our support team.
              </p>
            </div>
          </div>
        );

      case 'newsletter':
        return (
          <div style={generateStyles()} className="max-w-2xl mx-auto shadow-lg">
            <div style={headerStyles}>
              <h1 style={{ 
                fontSize: theme.sizes.headingMedium, 
                margin: 0,
                fontFamily: theme.fonts.heading
              }}>
                {theme.companyName} Newsletter
              </h1>
            </div>
            <div style={contentStyles}>
              <h2 style={{ 
                fontSize: theme.sizes.headingMedium, 
                color: theme.colors.primary,
                fontFamily: theme.fonts.heading,
                marginBottom: theme.spacing.medium
              }}>
                This Week's Highlights
              </h2>
              <div style={{ marginBottom: theme.spacing.large }}>
                <h3 style={{ 
                  fontSize: theme.sizes.headingSmall, 
                  color: theme.colors.text,
                  marginBottom: theme.spacing.small
                }}>
                  Feature Update
                </h3>
                <p style={{ 
                  fontSize: theme.sizes.bodyMedium, 
                  lineHeight: '1.6',
                  marginBottom: theme.spacing.medium
                }}>
                  We've just released some exciting new features that will help you work more efficiently.
                </p>
              </div>
              <div style={{ marginBottom: theme.spacing.large }}>
                <h3 style={{ 
                  fontSize: theme.sizes.headingSmall, 
                  color: theme.colors.text,
                  marginBottom: theme.spacing.small
                }}>
                  Industry News
                </h3>
                <p style={{ 
                  fontSize: theme.sizes.bodyMedium, 
                  lineHeight: '1.6',
                  marginBottom: theme.spacing.medium
                }}>
                  Stay up to date with the latest trends and insights in your industry.
                </p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <a href="#" style={buttonStyles}>
                  Read Full Newsletter
                </a>
              </div>
            </div>
          </div>
        );

      case 'promotional':
        return (
          <div style={generateStyles()} className="max-w-2xl mx-auto shadow-lg">
            <div style={{
              ...headerStyles,
              background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.accent})`
            }}>
              <h1 style={{ 
                fontSize: theme.sizes.headingLarge, 
                margin: 0,
                fontFamily: theme.fonts.heading
              }}>
                Special Offer!
              </h1>
              <p style={{ 
                fontSize: theme.sizes.bodyLarge, 
                margin: `${theme.spacing.small} 0 0 0`,
                opacity: 0.9
              }}>
                Limited time only
              </p>
            </div>
            <div style={contentStyles}>
              <h2 style={{ 
                fontSize: theme.sizes.headingMedium, 
                color: theme.colors.primary,
                fontFamily: theme.fonts.heading,
                textAlign: 'center',
                marginBottom: theme.spacing.medium
              }}>
                Get 50% Off Your Next Purchase
              </h2>
              <p style={{ 
                fontSize: theme.sizes.bodyMedium, 
                lineHeight: '1.6',
                textAlign: 'center',
                marginBottom: theme.spacing.large
              }}>
                Don't miss out on this incredible deal from {theme.companyName}. 
                Use code SAVE50 at checkout to save big on your favorite products.
              </p>
              <div style={{ textAlign: 'center', margin: `${theme.spacing.large} 0` }}>
                <a href="#" style={{
                  ...buttonStyles,
                  fontSize: theme.sizes.bodyLarge,
                  padding: `${theme.spacing.medium} ${theme.spacing.large}`,
                }}>
                  Shop Now - Save 50%
                </a>
              </div>
              <p style={{ 
                fontSize: theme.sizes.bodySmall, 
                color: theme.colors.textSecondary,
                textAlign: 'center'
              }}>
                *Offer expires in 7 days. Terms and conditions apply.
              </p>
            </div>
          </div>
        );

      case 'transactional':
        return (
          <div style={generateStyles()} className="max-w-2xl mx-auto shadow-lg">
            <div style={headerStyles}>
              <h1 style={{ 
                fontSize: theme.sizes.headingMedium, 
                margin: 0,
                fontFamily: theme.fonts.heading
              }}>
                Order Confirmation
              </h1>
            </div>
            <div style={contentStyles}>
              <h2 style={{ 
                fontSize: theme.sizes.headingMedium, 
                color: theme.colors.primary,
                fontFamily: theme.fonts.heading,
                marginBottom: theme.spacing.medium
              }}>
                Thank you for your order!
              </h2>
              <p style={{ 
                fontSize: theme.sizes.bodyMedium, 
                lineHeight: '1.6',
                marginBottom: theme.spacing.medium
              }}>
                Your order has been confirmed and will be shipped within 2-3 business days.
              </p>
              <div style={{ 
                backgroundColor: theme.colors.secondary + '10',
                padding: theme.spacing.medium,
                borderRadius: theme.borderRadius,
                marginBottom: theme.spacing.medium
              }}>
                <h3 style={{ 
                  fontSize: theme.sizes.headingSmall, 
                  margin: `0 0 ${theme.spacing.small} 0`
                }}>
                  Order Details
                </h3>
                <p style={{ fontSize: theme.sizes.bodyMedium, margin: 0 }}>
                  Order #: 12345678<br/>
                  Total: $99.99<br/>
                  Shipping: Standard (2-3 days)
                </p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <a href="#" style={buttonStyles}>
                  Track Your Order
                </a>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Template not found</div>;
    }
  };

  return (
    <div className="w-full">
      {renderTemplate()}
    </div>
  );
};

export default EmailTemplatePreview;
