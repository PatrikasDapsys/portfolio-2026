import { lazy, type ComponentType } from 'react';

export function lazyNamed<T extends Record<string, ComponentType<object>>>(
  importFn: () => Promise<T>,
  exportName: keyof T,
) {
  return lazy(() => importFn().then((m) => ({ default: m[exportName] })));
}
