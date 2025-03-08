<script lang="ts">
  import { customerQuery, signIn } from '$lib/customer';
</script>

<h1>Welcome to SvelteKit</h1>

<pre>
  <strong>Customer Query</strong>
  <strong>Status:</strong> {$customerQuery.status}
  <strong>Data:</strong> {JSON.stringify($customerQuery.data)}
  <strong>Error:</strong> {$customerQuery.error?.message}
</pre>

<pre>
  <strong>SignIn Mutation</strong>
  <strong>Status:</strong> {$signIn.status}
  <strong>Data:</strong> {JSON.stringify($signIn.data)}
  <strong>Error:</strong> {$signIn.error?.message}
</pre>

<pre>
{#if $customerQuery.isLoading}
    <p>Loading...</p>
  {:else if $customerQuery.isError}
    <p>Error: {$customerQuery.error.message}</p>
  {:else if $customerQuery.isSuccess}
    <p>Customer: {JSON.stringify($customerQuery.data)}</p>
  {/if}
</pre>

{#if $customerQuery.isSuccess}
  <button on:click={() => $signIn.mutateAsync()}>Sign In</button>
{/if}
