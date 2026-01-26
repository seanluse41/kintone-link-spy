<script>
  import { onMount } from 'svelte';
  import { Dialog, Button } from 'kintone-ui-component';
  
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
    buttons = [],
    onclose
  } = $props();
  
  let dialog;
  
  onMount(() => {
    let footerContent = footer;
    
    // If buttons array is provided, create footer with buttons
    if (buttons.length > 0) {
      const footerDiv = document.createElement('div');
      footerDiv.style.display = 'flex';
      footerDiv.style.gap = '8px';
      
      buttons.forEach(buttonConfig => {
        const button = new Button({
          text: buttonConfig.text,
          type: buttonConfig.type || 'normal'
        });
        
        if (buttonConfig.onclick) {
          button.addEventListener('click', buttonConfig.onclick);
        }
        
        footerDiv.appendChild(button);
      });
      
      footerContent = footerDiv;
    }
    
    dialog = new Dialog({
      title,
      content,
      footer: footerContent,
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