import { useCallback, useEffect, useRef, useState } from 'react';
import { copyToClipboard } from '../services/clipboard.service';
import { haptics } from '../services/haptics.service';

const RESET_MS = 1100;

export function useCopyFeedback(text: string) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  const copy = useCallback(() => {
    copyToClipboard(text);
    haptics.success();
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), RESET_MS);
  }, [text]);

  return { copied, copy };
}
