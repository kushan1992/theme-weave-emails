
import { EmailTheme, EmailTemplate } from '@/types/theme';

export const generateEmailHTML = (theme: EmailTheme, template: EmailTemplate): string => {
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

  const styleToString = (styleObj: any) => {
    return Object.entries(styleObj)
      .map(([key, value]) => `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value}`)
      .join('; ');
  };

  const getTemplateHTML = () => {
    switch (template.type) {
      case 'welcome':
        return `
          <div style="${styleToString(generateStyles())}; max-width: 600px; margin: 0 auto; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <div style="${styleToString(headerStyles)}">
              <h1 style="font-size: ${theme.sizes.headingLarge}; margin: 0; font-family: ${theme.fonts.heading};">
                Welcome to ${theme.companyName}!
              </h1>
            </div>
            <div style="${styleToString(contentStyles)}">
              <h2 style="font-size: ${theme.sizes.headingMedium}; color: ${theme.colors.primary}; font-family: ${theme.fonts.heading}; margin-bottom: ${theme.spacing.medium};">
                Thanks for joining us
              </h2>
              <p style="font-size: ${theme.sizes.bodyMedium}; line-height: 1.6; margin-bottom: ${theme.spacing.medium};">
                We're excited to have you on board! Get started by exploring our platform 
                and discovering all the amazing features we have to offer.
              </p>
              <div style="text-align: center; margin: ${theme.spacing.large} 0;">
                <a href="#" style="${styleToString(buttonStyles)}">
                  Get Started
                </a>
              </div>
              <p style="font-size: ${theme.sizes.bodySmall}; color: ${theme.colors.textSecondary}; text-align: center;">
                Need help? Reply to this email or contact our support team.
              </p>
            </div>
          </div>
        `;

      case 'newsletter':
        return `
          <div style="${styleToString(generateStyles())}; max-width: 600px; margin: 0 auto; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <div style="${styleToString(headerStyles)}">
              <h1 style="font-size: ${theme.sizes.headingMedium}; margin: 0; font-family: ${theme.fonts.heading};">
                ${theme.companyName} Newsletter
              </h1>
            </div>
            <div style="${styleToString(contentStyles)}">
              <h2 style="font-size: ${theme.sizes.headingMedium}; color: ${theme.colors.primary}; font-family: ${theme.fonts.heading}; margin-bottom: ${theme.spacing.medium};">
                This Week's Highlights
              </h2>
              <div style="margin-bottom: ${theme.spacing.large};">
                <h3 style="font-size: ${theme.sizes.headingSmall}; color: ${theme.colors.text}; margin-bottom: ${theme.spacing.small};">
                  Feature Update
                </h3>
                <p style="font-size: ${theme.sizes.bodyMedium}; line-height: 1.6; margin-bottom: ${theme.spacing.medium};">
                  We've just released some exciting new features that will help you work more efficiently.
                </p>
              </div>
              <div style="margin-bottom: ${theme.spacing.large};">
                <h3 style="font-size: ${theme.sizes.headingSmall}; color: ${theme.colors.text}; margin-bottom: ${theme.spacing.small};">
                  Industry News
                </h3>
                <p style="font-size: ${theme.sizes.bodyMedium}; line-height: 1.6; margin-bottom: ${theme.spacing.medium};">
                  Stay up to date with the latest trends and insights in your industry.
                </p>
              </div>
              <div style="text-align: center;">
                <a href="#" style="${styleToString(buttonStyles)}">
                  Read Full Newsletter
                </a>
              </div>
            </div>
          </div>
        `;

      case 'promotional':
        return `
          <div style="${styleToString(generateStyles())}; max-width: 600px; margin: 0 auto; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <div style="background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.accent}); color: ${theme.colors.background}; padding: ${theme.spacing.large}; text-align: center;">
              <h1 style="font-size: ${theme.sizes.headingLarge}; margin: 0; font-family: ${theme.fonts.heading};">
                Special Offer!
              </h1>
              <p style="font-size: ${theme.sizes.bodyLarge}; margin: ${theme.spacing.small} 0 0 0; opacity: 0.9;">
                Limited time only
              </p>
            </div>
            <div style="${styleToString(contentStyles)}">
              <h2 style="font-size: ${theme.sizes.headingMedium}; color: ${theme.colors.primary}; font-family: ${theme.fonts.heading}; text-align: center; margin-bottom: ${theme.spacing.medium};">
                Get 50% Off Your Next Purchase
              </h2>
              <p style="font-size: ${theme.sizes.bodyMedium}; line-height: 1.6; text-align: center; margin-bottom: ${theme.spacing.large};">
                Don't miss out on this incredible deal from ${theme.companyName}. 
                Use code SAVE50 at checkout to save big on your favorite products.
              </p>
              <div style="text-align: center; margin: ${theme.spacing.large} 0;">
                <a href="#" style="${styleToString({...buttonStyles, fontSize: theme.sizes.bodyLarge, padding: `${theme.spacing.medium} ${theme.spacing.large}`})}">
                  Shop Now - Save 50%
                </a>
              </div>
              <p style="font-size: ${theme.sizes.bodySmall}; color: ${theme.colors.textSecondary}; text-align: center;">
                *Offer expires in 7 days. Terms and conditions apply.
              </p>
            </div>
          </div>
        `;

      case 'transactional':
        return `
          <div style="${styleToString(generateStyles())}; max-width: 600px; margin: 0 auto; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <div style="${styleToString(headerStyles)}">
              <h1 style="font-size: ${theme.sizes.headingMedium}; margin: 0; font-family: ${theme.fonts.heading};">
                Order Confirmation
              </h1>
            </div>
            <div style="${styleToString(contentStyles)}">
              <h2 style="font-size: ${theme.sizes.headingMedium}; color: ${theme.colors.primary}; font-family: ${theme.fonts.heading}; margin-bottom: ${theme.spacing.medium};">
                Thank you for your order!
              </h2>
              <p style="font-size: ${theme.sizes.bodyMedium}; line-height: 1.6; margin-bottom: ${theme.spacing.medium};">
                Your order has been confirmed and will be shipped within 2-3 business days.
              </p>
              <div style="background-color: ${theme.colors.secondary}10; padding: ${theme.spacing.medium}; border-radius: ${theme.borderRadius}; margin-bottom: ${theme.spacing.medium};">
                <h3 style="font-size: ${theme.sizes.headingSmall}; margin: 0 0 ${theme.spacing.small} 0;">
                  Order Details
                </h3>
                <p style="font-size: ${theme.sizes.bodyMedium}; margin: 0;">
                  Order #: 12345678<br/>
                  Total: $99.99<br/>
                  Shipping: Standard (2-3 days)
                </p>
              </div>
              <div style="text-align: center;">
                <a href="#" style="${styleToString(buttonStyles)}">
                  Track Your Order
                </a>
              </div>
            </div>
          </div>
        `;

      default:
        return '<div>Template not found</div>';
    }
  };

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${template.name} - ${theme.companyName}</title>
</head>
<body style="margin: 0; padding: 20px; background-color: #f5f5f5; font-family: ${theme.fonts.body};">
    ${getTemplateHTML()}
</body>
</html>
  `.trim();
};

export const downloadAllTemplatesAsHTML = (theme: EmailTheme) => {
  const templates = [
    { id: 'welcome', name: 'Welcome Email', type: 'welcome' as const, description: 'Greet new users and guide them through getting started' },
    { id: 'newsletter', name: 'Newsletter', type: 'newsletter' as const, description: 'Share updates, news, and valuable content with subscribers' },
    { id: 'promotional', name: 'Promotional', type: 'promotional' as const, description: 'Promote special offers, sales, and marketing campaigns' },
    { id: 'transactional', name: 'Order Confirmation', type: 'transactional' as const, description: 'Confirm purchases and provide order details' }
  ];

  templates.forEach(template => {
    const html = generateEmailHTML(theme, template);
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${template.type}-template.html`;
    a.click();
    URL.revokeObjectURL(url);
  });
};
