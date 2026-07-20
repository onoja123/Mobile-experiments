export interface ServiceShortcut {
  title: string;
  subtitle: string;
  emoji: string;
  hasPromoBadge: boolean;
}

export interface ServiceShortcutCardProps {
  shortcut: ServiceShortcut;
}
