
export interface EmailTheme {
  id: string;
  name: string;
  companyName: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    textSecondary: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
  sizes: {
    headingLarge: string;
    headingMedium: string;
    headingSmall: string;
    bodyLarge: string;
    bodyMedium: string;
    bodySmall: string;
  };
  spacing: {
    small: string;
    medium: string;
    large: string;
  };
  borderRadius: string;
}

export interface EmailTemplate {
  id: string;
  name: string;
  type: 'welcome' | 'newsletter' | 'promotional' | 'transactional';
  description: string;
}
