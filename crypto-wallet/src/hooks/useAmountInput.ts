import { useCallback, useState } from 'react';
import type { KeypadKey } from '../components/NumericKeyboard/NumericKeyboard.types';
import { appendAmountKey } from '../helpers/appendAmountKey';
import { deleteAmountKey } from '../helpers/deleteAmountKey';
import { haptics } from '../services/haptics.service';

export function useAmountInput(maxDecimals = 2) {
  const [amount, setAmount] = useState('');

  const handleKey = useCallback(
    (key: KeypadKey) => {
      setAmount((current) =>
        key === 'del' ? deleteAmountKey(current) : appendAmountKey(current, key, maxDecimals),
      );
    },
    [maxDecimals],
  );

  const clear = useCallback(() => {
    haptics.press();
    setAmount('');
  }, []);

  return { amount, setAmount, handleKey, clear };
}
