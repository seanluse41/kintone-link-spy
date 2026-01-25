import { mount } from 'svelte';
import Mobile from '../Mobile.svelte';

const PLUGIN_ID = kintone.$PLUGIN_ID;

kintone.events.on('mobile.app.record.index.show', () => {
  const spaceElement = kintone.mobile.app.getHeaderSpaceElement();
  
  if (!spaceElement) {
    throw new Error('The header element is unavailable on this page');
  }

  mount(Mobile, {
    target: spaceElement,
    props: { pluginId: PLUGIN_ID }
  });
});