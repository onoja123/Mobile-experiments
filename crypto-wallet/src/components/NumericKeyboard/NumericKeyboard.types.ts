export type KeypadKey = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '.' | 'del';

export interface NumericKeyboardProps {
  onKey: (key: KeypadKey) => void;
  onClearAll?: () => void;
}
