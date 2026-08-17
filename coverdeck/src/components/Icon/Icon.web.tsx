import Svg, { Path } from 'react-native-svg';

import type { IconName, IconProps } from './Icon.types';

// SF Symbols have no web renderer, so each glyph used in the app is redrawn
// here on a 24pt grid to keep the web demo visually identical.
function glyph(name: IconName, color: string) {
  switch (name) {
    case 'play.fill':
      return <Path d="M6.4 3.8l13.2 8.2-13.2 8.2V3.8z" fill={color} />;
    case 'pause.fill':
      return (
        <Path
          d="M6.4 3.8h3.9v16.4H6.4zM13.7 3.8h3.9v16.4h-3.9z"
          fill={color}
        />
      );
    case 'backward.fill':
      return (
        <Path
          d="M11.6 12l9-6.4v12.8L11.6 12zM2 12l9-6.4v12.8L2 12z"
          fill={color}
        />
      );
    case 'forward.fill':
      return (
        <Path
          d="M12.4 12l-9-6.4v12.8l9-6.4zM22 12l-9-6.4v12.8L22 12z"
          fill={color}
        />
      );
    case 'chevron.right':
      return (
        <Path
          d="M9 4.6l7.4 7.4L9 19.4"
          stroke={color}
          strokeWidth={2.4}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      );
  }
}

export default function Icon({ name, size, color }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      {glyph(name, color)}
    </Svg>
  );
}
