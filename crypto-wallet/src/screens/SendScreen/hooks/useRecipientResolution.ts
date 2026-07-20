import { useCallback, useEffect, useRef, useState } from 'react';
import { PASTED_RECIPIENT } from '@/data/recipients';
import type { Recipient } from '@/interfaces/recipient.interface';
import { haptics } from '@/services/haptics.service';

const RESOLVE_MS = 900;

export function useRecipientResolution() {
  const [recipient, setRecipient] = useState<Recipient | null>(null);
  const [resolving, setResolving] = useState(false);
  const resolveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (resolveTimer.current) clearTimeout(resolveTimer.current);
    },
    [],
  );

  const resolvePasted = useCallback(() => {
    if (resolveTimer.current) clearTimeout(resolveTimer.current);
    setResolving(true);
    resolveTimer.current = setTimeout(() => {
      setRecipient(PASTED_RECIPIENT);
      setResolving(false);
      haptics.success();
    }, RESOLVE_MS);
  }, []);

  const selectRecipient = useCallback((next: Recipient) => {
    if (resolveTimer.current) clearTimeout(resolveTimer.current);
    setResolving(false);
    setRecipient(next);
  }, []);

  const clearRecipient = useCallback(() => {
    if (resolveTimer.current) clearTimeout(resolveTimer.current);
    setResolving(false);
    setRecipient(null);
  }, []);

  return { recipient, resolving, resolvePasted, selectRecipient, clearRecipient };
}
