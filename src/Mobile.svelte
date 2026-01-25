<script>
  import { onMount } from 'svelte';
  import Header from './components/Header.svelte';

  let { pluginId } = $props();
  
  let message = $state('');

  onMount(() => {
    const config = kintone.plugin.app.getConfig(pluginId);
    message = config.message;
  });
</script>

<Header heading="Hello kintone plugin!" {message} />