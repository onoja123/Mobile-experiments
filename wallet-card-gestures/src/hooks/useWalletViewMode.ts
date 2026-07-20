import { useState } from "react";

import { WalletViewMode } from "@/enums";

export function useWalletViewMode(initialActiveIndex: number) {
  const [mode, setMode] = useState(WalletViewMode.Stack);
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

  const selectCard = (index: number) => {
    if (mode === WalletViewMode.Stack) {
      setMode(index === activeIndex ? WalletViewMode.Detail : WalletViewMode.List);
    } else if (mode === WalletViewMode.List) {
      setActiveIndex(index);
      setMode(WalletViewMode.Detail);
    } else {
      setMode(WalletViewMode.Stack);
    }
  };

  const showList = () => setMode(WalletViewMode.List);

  return { mode, activeIndex, selectCard, showList };
}
