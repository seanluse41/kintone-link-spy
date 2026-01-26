<script>
  import { onMount } from 'svelte';
  import { setupI18n } from './i18n.js';
  import Header from './components/Header.svelte';
  import { parseRecord } from './lib/parseRecord.js';
  import { addBadges } from './lib/addBadges.svelte.js';
  import { getRepositoryRecord } from './lib/getRepositoryRecord.js';
  import { getClickData } from './lib/getClickData.js';

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

    const currentAppId = kintone.app.getId();
    const repositoryRecord = await getRepositoryRecord(currentAppId);
    const clickData = getClickData(repositoryRecord);
    const record = kintone.app.record.get();
    const formFields = await kintone.app.getFormFields();
    const trackableFields = parseRecord(record, formFields);
    
    trackableFields.forEach(field => {
      field.clicks = clickData.get(field.code);
    });
    
    addBadges(trackableFields);
  });
</script>

{#if isAdmin}
  <Header {heading} {message} />
{/if}