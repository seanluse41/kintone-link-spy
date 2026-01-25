import { mount } from 'svelte';
import Config from '../Config.svelte';

const PLUGIN_ID = kintone.$PLUGIN_ID;

const formElement = document.querySelector('.settings');

if (!formElement) {
  throw new Error('Required elements do not exist.');
}

mount(Config, {
  target: formElement,
  props: { pluginId: PLUGIN_ID }
});