import { useEffect, useRef, useState } from "react";

interface Options {
  enabled: boolean;
  charDelay: number;
  startDelay?: number;
  onDone?: () => void;
}

export function useTypewriter(text: string, options: Options): string {
  const { enabled, charDelay, startDelay = 0, onDone } = options;
  const [count, setCount] = useState(enabled ? 0 : text.length);
  const countRef = useRef(count);
  const doneRef = useRef(!enabled);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    if (!enabled || doneRef.current) return;

    let interval: ReturnType<typeof setInterval> | undefined;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        if (countRef.current >= text.length) {
          if (interval) clearInterval(interval);
          return;
        }
        countRef.current += 1;
        setCount(countRef.current);
      }, charDelay);
    }, startDelay);

    return () => {
      clearTimeout(start);
      if (interval) clearInterval(interval);
    };
  }, [enabled, text, charDelay, startDelay]);

  useEffect(() => {
    if (!doneRef.current && count >= text.length) {
      doneRef.current = true;
      onDoneRef.current?.();
    }
  }, [count, text]);

  return text.slice(0, count);
}
