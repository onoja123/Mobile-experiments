import type { DissolveJob } from '@/types';

export type DissolveCanvasProps = {
  job: DissolveJob;
  onDone: (job: DissolveJob) => void;
};
