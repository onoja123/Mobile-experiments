export type IconName =
  | 'backward.fill'
  | 'play.fill'
  | 'pause.fill'
  | 'forward.fill'
  | 'chevron.right';

export type IconProps = {
  name: IconName;
  size: number;
  color: string;
};
