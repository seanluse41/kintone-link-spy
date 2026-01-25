<script>
  import { onMount } from 'svelte';
  import { Dialog } from 'kintone-ui-component';
  
  let { 
    title,
    content,
    footer,
    header,
    icon,
    className,
    id,
    container = typeof document !== 'undefined' ? document.body : undefined,
    footerVisible = true,
    onclose
  } = $props();
  
  let dialog;
  
  onMount(() => {
    dialog = new Dialog({
      title,
      content,
      footer,
      header,
      icon,
      className,
      id,
      container,
      footerVisible
    });
    
    if (onclose) {
      dialog.addEventListener('close', onclose);
    }
  });
  
  export function open() {
    dialog?.open();
  }
  
  export function close() {
    dialog?.close();
  }
</script>