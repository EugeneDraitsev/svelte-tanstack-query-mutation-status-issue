import { QueryClient } from '@tanstack/svelte-query';
import { browser } from '$app/environment';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      enabled: browser,
      retry: 0,
    },
  },
});
