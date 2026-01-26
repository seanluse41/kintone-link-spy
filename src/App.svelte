<script>
  import { onMount } from 'svelte';
  import { setupI18n } from './i18n.js';
  import Header from './components/Header.svelte';
  import { getLinkElements } from './lib/getLinkElements.js';
  import { getFileElements } from './lib/getFileElements.js';
  import { parseTable } from './lib/parseTable.js';

  let { pluginId } = $props();
  
  let heading = $state('');
  let message = $state('');
  let isAdmin = $state(false);

  onMount(async () => {
    const i18n = await setupI18n();
    const config = kintone.plugin.app.getConfig(pluginId);
    const permissions = await kintone.app.getPermissions();
    isAdmin = permissions.editApp;
    heading = i18n.t('helloKintone');
    message = config.message;

    const record = kintone.app.record.get();
    const formFields = await kintone.app.getFormFields();

    const trackableFields = parseTable(record, formFields, getLinkElements, getFileElements);

    console.log('Trackable fields:', trackableFields);
  });
</script>

{#if isAdmin}
  <Header {heading} {message} />
{/if}