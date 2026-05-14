import { lazy, type ComponentType, type LazyExoticComponent } from 'react';

export function lazyNamed<
  TModule extends Record<string, ComponentType<any>>,
  TName extends keyof TModule,
>(importFn: () => Promise<TModule>, exportName: TName): LazyExoticComponent<TModule[TName]> {
  return lazy(() => importFn().then((m) => ({ default: m[exportName] })));
}
