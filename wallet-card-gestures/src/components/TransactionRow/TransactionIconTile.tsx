import React from "react";
import { Text, View } from "react-native";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

import { TRANSACTION_ICON_SIZE } from "@/constants/layout";
import { TransactionIconType } from "@/enums";
import { radius, typography } from "@/theme";

import type { TransactionIconTileProps } from "./TransactionRow.types";

export default function TransactionIconTile({ icon }: TransactionIconTileProps) {
  return (
    <View
      className="items-center justify-center"
      style={{
        width: TRANSACTION_ICON_SIZE,
        height: TRANSACTION_ICON_SIZE,
        borderRadius: radius.transactionIcon,
        backgroundColor: icon.bg,
      }}
    >
      {icon.type === TransactionIconType.FontAwesome ? (
        <FontAwesome5 name={icon.name as any} size={19} color={icon.color} />
      ) : icon.type === TransactionIconType.Ionicon ? (
        <Ionicons name={icon.name as any} size={21} color={icon.color} />
      ) : (
        <Text style={[typography.letterIcon, { color: icon.color }]}>
          {icon.letter}
        </Text>
      )}
    </View>
  );
}
