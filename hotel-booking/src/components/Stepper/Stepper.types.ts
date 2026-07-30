export type StepperProps = {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
};

export type StepButtonProps = {
  icon: 'minus' | 'plus';
  onPress: () => void;
};
