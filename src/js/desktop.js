import { mount } from 'svelte';
import App from '../App.svelte';

const PLUGIN_ID = kintone.$PLUGIN_ID;

kintone.events.on('app.record.index.show', async () => {
  const spaceElement = kintone.app.getHeaderSpaceElement();
  
  if (!spaceElement) {
    throw new Error('The header element is unavailable on this page');
  }

  mount(App, {
    target: spaceElement,
    props: { pluginId: PLUGIN_ID }
  });
});