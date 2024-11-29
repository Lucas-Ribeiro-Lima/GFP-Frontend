// app-router-context-provider-mock.tsx
import { vi } from 'vitest';
import { useMemo } from 'react';

import { AppRouterContext, AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export type AppRouterContextProviderMockProps = {
  children: React.ReactNode;
  router?: Partial<AppRouterInstance>;
};

export const AppRouterContextProviderMock = ({
  router,
  children,
}: AppRouterContextProviderMockProps): React.ReactNode => {
  const mockedRouter: AppRouterInstance = useMemo(() => {
    return {
      back: vi.fn(),
      forward: vi.fn(),
      push: vi.fn(),
      replace: vi.fn(),
      refresh: vi.fn(),
      prefetch: vi.fn(),
      ...router,
    }
  }, [])
  
  return (
    <AppRouterContext.Provider value={mockedRouter}>
      {children}
    </AppRouterContext.Provider>
  );
};