import { createMutation, createQuery } from '@tanstack/svelte-query';
import { queryClient } from '$lib/query-client';
import { goto } from '$app/navigation';

export const customerQuery = createQuery(
  {
    queryKey: ['customer'],
    queryFn: async () => {
      // wait for 1 second
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return { name: 'John Doe' };
    },
  },
  queryClient,
);

export const signIn = createMutation(
  {
    mutationFn: async () => {
      // wait for 1 second
      await new Promise((resolve) => setTimeout(resolve, 1000));
    },
    onSuccess: async () => {
      await goto('/auth');
      await queryClient.invalidateQueries({ queryKey: ['customer'] });
    },
  },
  queryClient,
);
