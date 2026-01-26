<script>
  import { onMount } from 'svelte';
  import { setupI18n } from './i18n.js';
  import Header from './components/Header.svelte';
  import { parseRecord } from './lib/parseRecord.js';
  import { addBadges } from './lib/addBadges.svelte.js';
  import { getRepositoryRecord } from './lib/requests/getRepositoryRecord.js';
  import { updateAppViewers } from './lib/requests/updateAppViewers.js';
  import { getClickData } from './lib/getClickData.js';

  let { pluginId } = $props();
  
  let heading = $state('');
  let message = $state('');
  let isAdmin = $state(false);
  let recordId = $state(null);

  onMount(async () => {
    const i18n = await setupI18n();
    const config = kintone.plugin.app.getConfig(pluginId);
    const permissions = await kintone.app.getPermissions();
    isAdmin = permissions.editApp;
    heading = i18n.t('helloKintone');
    message = config.message;

    const currentUser = kintone.getLoginUser();
    const currentAppId = kintone.app.getId();
    const domainInfo = await kintone.getDomain();
    const domain = `${domainInfo.subdomain}.${domainInfo.baseDomain}`;
    console.log(domain)
    const repositoryRecord = await getRepositoryRecord(currentAppId);
    
    if (repositoryRecord) {
      recordId = repositoryRecord.$id.value;
      
      // Update appViewers if user hasn't viewed the app before
      await updateAppViewers(repositoryRecord, currentUser);
      
      const clickData = getClickData(repositoryRecord);
      const record = kintone.app.record.get();
      const formFields = await kintone.app.getFormFields();
      const trackableFields = parseRecord(record, formFields);
      
      trackableFields.forEach(field => {
        field.clicks = clickData.get(field.code);
        field.currentUser = currentUser;
      });
      
      addBadges(trackableFields, repositoryRecord, domain);
    }
  });
</script>

{#if isAdmin && recordId}
  <Header {heading} {message} {recordId} />
{/if}