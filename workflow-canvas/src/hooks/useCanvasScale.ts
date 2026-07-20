import { useWindowDimensions } from "react-native";

import { CANVAS_BASE_WIDTH } from "@/constants/canvas";

export function useCanvasScale() {
  const { width } = useWindowDimensions();
  return width / CANVAS_BASE_WIDTH;
}
