<script lang="ts">
  import { QueryClientProvider } from '@tanstack/svelte-query';
  import { SvelteQueryDevtools } from '@tanstack/svelte-query-devtools';

  import { queryClient } from '$lib';
</script>

<QueryClientProvider client={queryClient}>
  <slot />
  <SvelteQueryDevtools initialIsOpen />
</QueryClientProvider>
