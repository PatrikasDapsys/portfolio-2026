import { useCallback, useSyncExternalStore } from 'react';

/**
 * Reactively tracks a CSS media query. Returns `false` before hydration so the
 * initial paint never assumes a viewport that isn't there yet.
 */
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (notify: () => void) => {
      const mql = window.matchMedia(query);
      mql.addEventListener('change', notify);
      return () => mql.removeEventListener('change', notify);
    },
    [query],
  );

  const getSnapshot = useCallback(() => window.matchMedia(query).matches, [query]);

  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}
