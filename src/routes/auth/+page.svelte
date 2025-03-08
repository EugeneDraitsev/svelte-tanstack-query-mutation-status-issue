<script lang="ts">
  import { goto } from '$app/navigation';
</script>

<h1>Welcome to AuthPage</h1>

<button on:click={() => goto('/')}> Log Out </button>
