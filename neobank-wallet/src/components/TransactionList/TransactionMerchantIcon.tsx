import type { ReactElement } from "react";
import { View } from "react-native";

import { CinescapeIcon, MastercardMark, XboxIcon } from "@/components/icons";
import { TransactionMerchant } from "@/enums";

const badgeByMerchant: Record<
  TransactionMerchant,
  { backgroundClass: string; icon: ReactElement }
> = {
  [TransactionMerchant.Mastercard]: {
    backgroundClass: "bg-sand",
    icon: <MastercardMark width={21} />,
  },
  [TransactionMerchant.Xbox]: {
    backgroundClass: "bg-xbox",
    icon: <XboxIcon size={18} />,
  },
  [TransactionMerchant.Cinescape]: {
    backgroundClass: "bg-card",
    icon: <CinescapeIcon size={15} />,
  },
};

export function TransactionMerchantIcon({ merchant }: { merchant: TransactionMerchant }) {
  const badge = badgeByMerchant[merchant];
  return (
    <View
      className={`h-9 w-9 items-center justify-center rounded-full ${badge.backgroundClass}`}
    >
      {badge.icon}
    </View>
  );
}
