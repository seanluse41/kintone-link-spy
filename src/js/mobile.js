import { mount } from 'svelte';
import Mobile from '../Mobile.svelte';
import { createRepositoryRecord } from '../lib/requests/syncLinkFields.js';

const PLUGIN_ID = kintone.$PLUGIN_ID;

// Show mobile view
kintone.events.on('mobile.app.record.index.show', () => {
  const headerSpace = kintone.mobile.app.getHeaderSpaceElement();
  if (!headerSpace) {
    throw new Error('The header element is unavailable on this page');
  }

  mount(Mobile, {
    target: headerSpace,
    props: {
      pluginId: PLUGIN_ID
    }
  });
});

// Auto-create repository record on new record creation (mobile)
kintone.events.on('mobile.app.record.create.submit.success', async (event) => {
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