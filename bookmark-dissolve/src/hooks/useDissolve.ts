import { useContext } from 'react';

import { DissolveContext } from '@/providers/DissolveProvider';

export function useDissolve() {
  const context = useContext(DissolveContext);
  if (!context) throw new Error('useDissolve must be used within a DissolveProvider');
  return context;
}
