export type Palette = {
  background: string;
  sheet: string;
  label: string;
  secondaryLabel: string;
  tint: string;
  onTint: string;
  grabber: string;
  tileBorder: string;
};

export const light: Palette = {
  background: '#F2F2F7',
  sheet: '#FFFFFF',
  label: '#000000',
  secondaryLabel: '#6C6C70',
  tint: '#007AFF',
  onTint: '#FFFFFF',
  grabber: 'rgba(60,60,67,0.30)',
  tileBorder: 'rgba(0,0,0,0.12)',
};

export const dark: Palette = {
  background: '#000000',
  sheet: '#1C1C1E',
  label: '#FFFFFF',
  secondaryLabel: '#98989F',
  tint: '#0A84FF',
  onTint: '#FFFFFF',
  grabber: 'rgba(235,235,245,0.30)',
  tileBorder: 'rgba(255,255,255,0.16)',
};
