import React, { ReactNode, useState } from "react";
import { Pressable, PressableProps, StyleProp, ViewStyle } from "react-native";

interface Props extends Omit<PressableProps, "style" | "children"> {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  pressedOpacity?: number;
}

export function PressableFade({
  children,
  style,
  pressedOpacity = 0.55,
  ...rest
}: Props) {
  const [pressed, setPressed] = useState(false);

  return (
    <Pressable
      {...rest}
      style={[style, { opacity: pressed ? pressedOpacity : 1 }]}
      onPressIn={(event) => {
        setPressed(true);
        rest.onPressIn?.(event);
      }}
      onPressOut={(event) => {
        setPressed(false);
        rest.onPressOut?.(event);
      }}
    >
      {children}
    </Pressable>
  );
}
