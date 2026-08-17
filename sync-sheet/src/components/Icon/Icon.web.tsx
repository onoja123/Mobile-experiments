import Svg, { Circle, Path, Rect } from 'react-native-svg';

import type { IconName, IconProps } from './Icon.types';

// SF Symbols have no web renderer, so each glyph used in the app is redrawn
// here on a 24pt grid to keep the web demo visually identical.
function glyph(name: IconName, color: string) {
  const stroke = { stroke: color, strokeWidth: 1.7, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

  switch (name) {
    case 'bolt.fill':
      return <Path d="M13.6 2L4.8 13.9h5.4L9.9 22l9-12.4h-5.6L13.6 2z" fill={color} />;
    case 'square.and.arrow.up':
      return (
        <>
          <Path d="M12 3.2v11" {...stroke} />
          <Path d="M8.6 6.6L12 3.2l3.4 3.4" {...stroke} fill="none" />
          <Path d="M7.5 10H5.2v10.8h13.6V10H16.5" {...stroke} fill="none" />
        </>
      );
    case 'applewatch':
      return (
        <>
          <Rect x="7.2" y="6" width="9.6" height="12" rx="3.2" {...stroke} fill="none" />
          <Path d="M9.4 6V3.4h5.2V6" {...stroke} fill="none" />
          <Path d="M9.4 18v2.6h5.2V18" {...stroke} fill="none" />
        </>
      );
    case 'flame':
      return (
        <Path
          d="M12 2.4c.6 3-1.2 4.4-2.8 6.3C7.7 10.5 6.3 12.4 6.3 15a5.7 5.7 0 0011.4 0c0-2.4-1.1-4.2-2.4-5.8-.5.9-1.1 1.5-1.9 1.9.5-3-1.4-6.2-1.4-8.7z"
          {...stroke}
          fill="none"
        />
      );
    case 'flame.fill':
      return (
        <Path
          d="M12 2.4c.6 3-1.2 4.4-2.8 6.3C7.7 10.5 6.3 12.4 6.3 15a5.7 5.7 0 0011.4 0c0-2.4-1.1-4.2-2.4-5.8-.5.9-1.1 1.5-1.9 1.9.5-3-1.4-6.2-1.4-8.7z"
          fill={color}
        />
      );
    case 'figure.walk':
      return (
        <>
          <Circle cx="13.4" cy="4" r="1.9" fill={color} />
          <Path d="M13.9 7.2l-2.6 3.6 2.4 2.2 1.1 7" {...stroke} fill="none" />
          <Path d="M11.3 10.8L8.6 13.6 7.4 20" {...stroke} fill="none" />
          <Path d="M13.9 7.6l3.1 1.9" {...stroke} fill="none" />
        </>
      );
    case 'heart.fill':
      return (
        <Path
          d="M12 21.1l-1.4-1.3C5.5 15.2 2.2 12.2 2.2 8.6 2.2 5.6 4.5 3.3 7.5 3.3c1.7 0 3.3.8 4.5 2.1 1.2-1.3 2.8-2.1 4.5-2.1 3 0 5.3 2.3 5.3 5.3 0 3.6-3.3 6.6-8.4 11.2L12 21.1z"
          fill={color}
        />
      );
    case 'bed.double.fill':
      return (
        <>
          <Path d="M2.6 6.4v11.2" {...stroke} strokeWidth={2} />
          <Path
            d="M2.6 12.6h18.8v5H2.6zM6.4 8.4h3.2a1.6 1.6 0 011.6 1.6v1.4H4.8V10a1.6 1.6 0 011.6-1.6zM14.4 8.4h3.2a1.6 1.6 0 011.6 1.6v1.4h-6.4V10a1.6 1.6 0 011.6-1.6z"
            fill={color}
          />
          <Path d="M21.4 12.6c0-1.9-1.3-3-3.2-3" {...stroke} fill="none" />
        </>
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
