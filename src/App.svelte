<script>
  import { onMount } from 'svelte';
  import { setupI18n } from './i18n.js';
  import Header from './components/Header.svelte';
  import { parseRecord } from './lib/parseRecord.js';
  import { addBadges } from './lib/addBadges.svelte.js';
  import { getRepositoryRecord } from './lib/requests/getRepositoryRecord.js';
  import { updateRecordViewers } from './lib/requests/updateRecordViewers.js';
  import { getClickData } from './lib/getClickData.js';

  let { pluginId } = $props();
  
  let heading = $state('');
  let message = $state('');
  let isAdmin = $state(false);
  let repoRecordId = $state(null);
  let repositoryAppId = $state(null);
  let domain = $state('');

  onMount(async () => {
    const i18n = await setupI18n();
    const config = kintone.plugin.app.getConfig(pluginId);
    repositoryAppId = config.repositoryAppId;
    
    if (!repositoryAppId) {
      console.warn('No repository app configured');
      return;
    }
    
    const permissions = await kintone.app.getPermissions();
    isAdmin = permissions.editApp;
    heading = i18n.t('helloKintone');
    message = config.message;

    const currentUser = kintone.getLoginUser();
    const currentAppId = kintone.app.getId();
    const currentRecordId = kintone.app.record.getId();
    
    const domainInfo = await kintone.getDomain();
    domain = `${domainInfo.subdomain}.${domainInfo.baseDomain}`;
    
    const repositoryRecord = await getRepositoryRecord(currentAppId, currentRecordId, repositoryAppId);
    
    if (!repositoryRecord) {
      return;
    }
    
    repoRecordId = repositoryRecord.$id.value;
    
    await updateRecordViewers(repositoryRecord, currentUser, repositoryAppId);
    
    const clickData = getClickData(repositoryRecord);
    const record = kintone.app.record.get();
    const formFields = await kintone.app.getFormFields();
    const trackableFields = parseRecord(record, formFields);
    
    trackableFields.forEach(field => {
      field.clicks = clickData.get(field.code);
      field.currentUser = currentUser;
    });
    
    addBadges(trackableFields, repositoryRecord, domain, repositoryAppId);
  });
</script>

{#if isAdmin && repoRecordId}
  <Header recordId={repoRecordId} {repositoryAppId} {domain} />
{/if}