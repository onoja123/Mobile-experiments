import { useCallback, useEffect, useRef, useState } from 'react';
import {
  Easing,
  runOnJS,
  useFrameCallback,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import type { Gain } from '@/interfaces/wallet.interface';
import { iosEase, iosEaseOut } from '@/theme';
import { gainFrom } from '../helpers/gainFrom';
import { nextBalance } from '../helpers/nextBalance';
import { toDigitString } from '../helpers/toDigitString';
import type { WalletRefreshController } from '@/interfaces/walletRefreshController.interface';

const MORPH_DELAY_MS = 180;
const FETCH_MS = 2000;
const SETTLE_STAGGER_MS = 340;

export function useWalletRefresh(
  initialBalance: number,
  initialGain: Gain,
): WalletRefreshController {
  const spinner = useSharedValue(0);
  const morph = useSharedValue(0);
  const cycling = useSharedValue(0);
  const settle = useSharedValue(1);
  const shift = useSharedValue(0);
  const time = useSharedValue(0);
  const digits = useSharedValue(toDigitString(initialBalance));

  const [balance, setBalance] = useState(initialBalance);
  const [gain, setGain] = useState<Gain>(initialGain);
  const [refreshing, setRefreshing] = useState(false);
  const busy = useRef(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clock = useFrameCallback((frame) => {
    time.value = frame.timeSinceFirstFrame;
  }, false);

  const setClockActive = clock.setActive;
  useEffect(() => {
    setClockActive(refreshing);
  }, [refreshing, setClockActive]);

  useEffect(
    () => () => {
      timers.current.forEach(clearTimeout);
    },
    [],
  );

  const finish = useCallback(() => {
    busy.current = false;
    setRefreshing(false);
  }, []);

  const refresh = useCallback(() => {
    if (busy.current) return;
    busy.current = true;
    setRefreshing(true);

    settle.value = 0;
    spinner.value = withTiming(1, { duration: 280, easing: iosEaseOut });
    shift.value = withTiming(1, { duration: 420, easing: iosEase });
    cycling.value = withDelay(MORPH_DELAY_MS, withTiming(1, { duration: 1 }));
    morph.value = withDelay(
      MORPH_DELAY_MS,
      withTiming(1, { duration: 450, easing: iosEase }),
    );

    timers.current.push(
      setTimeout(() => {
        const next = nextBalance(balance);
        const nextGain = gainFrom(balance, next);
        digits.value = toDigitString(next);
        setBalance(next);
        setGain(nextGain);

        settle.value = withTiming(1, {
          duration: SETTLE_STAGGER_MS,
          easing: Easing.linear,
        });
        morph.value = withDelay(
          140,
          withTiming(0, { duration: 520, easing: iosEase }, (finished) => {
            if (finished) {
              cycling.value = 0;
              runOnJS(finish)();
            }
          }),
        );
        spinner.value = withDelay(
          220,
          withTiming(0, { duration: 320, easing: iosEase }),
        );
        shift.value = withDelay(
          220,
          withTiming(0, { duration: 460, easing: iosEase }),
        );
      }, FETCH_MS),
    );
  }, [balance, cycling, digits, finish, morph, settle, shift, spinner]);

  return { spinner, morph, cycling, settle, shift, time, digits, balance, gain, refreshing, refresh };
}
