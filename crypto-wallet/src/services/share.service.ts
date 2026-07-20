import { Share } from 'react-native';

export function shareText(message: string) {
  Share.share({ message }).catch(() => {});
}
