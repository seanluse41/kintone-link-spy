<script>
  import { onMount } from 'svelte';
  import { setupI18n } from './i18n.js';
  import Header from './components/Header.svelte';

  let { pluginId } = $props();
  
  let heading = $state('');
  let message = $state('');

  onMount(async () => {
    const i18n = await setupI18n();
    const config = kintone.plugin.app.getConfig(pluginId);
    
    heading = i18n.t('helloKintone');
    message = config.message;
  });
</script>

<Header {heading} {message} />