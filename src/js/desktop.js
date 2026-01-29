import { mount } from 'svelte';
import App from '../App.svelte';
import { createRepositoryRecord } from '../lib/requests/syncLinkFields.js';

const PLUGIN_ID = kintone.$PLUGIN_ID;

// Show stats on detail page
kintone.events.on('app.record.detail.show', async () => {
  const headerSpace = kintone.app.record.getHeaderMenuSpaceElement();
  if (!headerSpace) {
    throw new Error('The header element is unavailable on this page');
  }

  mount(App, {
    target: headerSpace,
    props: {
      pluginId: PLUGIN_ID
    }
  });
});

// Auto-create repository record on new record creation
kintone.events.on('app.record.create.submit.success', async (event) => {
  const config = kintone.plugin.app.getConfig(PLUGIN_ID);
  
  if (!config.repositoryAppId) {
    console.warn('No repository app configured');
    return event;
  }

  const currentAppId = kintone.app.getId();
  const newRecordId = event.recordId;

  try {
    await createRepositoryRecord(currentAppId, newRecordId, config.repositoryAppId);
    console.log(`Repository record created for app ${currentAppId}, record ${newRecordId}`);
  } catch (error) {
    console.error('Error creating repository record:', error);
  }

  return event;
});