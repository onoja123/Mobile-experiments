import * as Clipboard from 'expo-clipboard';

export function copyToClipboard(text: string) {
  Clipboard.setStringAsync(text).catch(() => {});
}
