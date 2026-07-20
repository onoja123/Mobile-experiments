import { createContext, ReactNode, RefObject, useCallback, useRef, useState } from 'react';
import { View } from 'react-native';
import { makeImageFromView, SkImage } from '@shopify/react-native-skia';

import { DissolveCanvas } from '@/components/DissolveCanvas';
import type {
  DissolveContextValue,
  DissolveJob,
  DissolveOptions,
  MaterializeOptions,
} from '@/types';

export const DissolveContext = createContext<DissolveContextValue | null>(null);

export function DissolveProvider({ children }: { children: ReactNode }) {
  const [jobs, setJobs] = useState<DissolveJob[]>([]);
  const nextKey = useRef(0);

  const dissolve = useCallback(
    async (ref: RefObject<View | null>, options?: DissolveOptions) => {
      const node = ref.current;
      if (!node) return null;

      const image = await makeImageFromView(ref as RefObject<View>);
      if (!image) return null;

      node.measureInWindow((x, y, width, height) => {
        options?.onCaptured?.();
        setJobs((current) => [
          ...current,
          { key: nextKey.current++, image, x, y, width, height, onDone: options?.onDone },
        ]);
      });

      return image;
    },
    [],
  );

  const materialize = useCallback(
    (ref: RefObject<View | null>, image: SkImage, options?: MaterializeOptions) => {
      const node = ref.current;
      if (!node) {
        options?.onDone?.();
        return;
      }

      node.measureInWindow((x, y, width, height) => {
        setJobs((current) => [
          ...current,
          {
            key: nextKey.current++,
            image,
            x,
            y,
            width,
            height,
            reverse: true,
            onDone: options?.onDone,
          },
        ]);
      });
    },
    [],
  );

  const finishJob = useCallback((job: DissolveJob) => {
    job.onDone?.();
    setJobs((current) => current.filter((j) => j.key !== job.key));
  }, []);

  return (
    <DissolveContext.Provider value={{ dissolve, materialize }}>
      <View className="flex-1">
        {children}
        {jobs.map((job) => (
          <DissolveCanvas key={job.key} job={job} onDone={finishJob} />
        ))}
      </View>
    </DissolveContext.Provider>
  );
}
