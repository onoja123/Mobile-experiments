import { Text } from 'react-native';

type FieldLabelProps = {
  children: string;
  className?: string;
};

export function FieldLabel({ children, className = '' }: FieldLabelProps) {
  return (
    <Text className={`mb-2 font-jakarta-medium text-[13px] text-ink ${className}`}>
      {children}
    </Text>
  );
}
