import Svg, { Circle, Path } from "react-native-svg";

import { colors } from "@/theme";

const MARK_ASPECT_RATIO = 15 / 24;

export function MastercardMark({ width = 22 }: { width?: number }) {
  const height = width * MARK_ASPECT_RATIO;
  return (
    <Svg width={width} height={height} viewBox="0 0 24 15">
      <Circle cx={8.8} cy={7.5} r={6.6} fill={colors.mastercardRed} />
      <Circle cx={15.2} cy={7.5} r={6.6} fill={colors.mastercardAmber} />
      <Path d="M12 2.05a6.6 6.6 0 0 1 0 10.9 6.6 6.6 0 0 1 0-10.9Z" fill={colors.mastercardOverlap} />
    </Svg>
  );
}
