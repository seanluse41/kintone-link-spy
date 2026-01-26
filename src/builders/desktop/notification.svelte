<script>
  import { onMount } from 'svelte';
  import { Notification } from 'kintone-ui-component';
  
  let { 
    text,
    content,
    type = 'danger',
    duration = -1,
    className,
    id,
    container = typeof document !== 'undefined' ? document.body : undefined,
    onclose
  } = $props();
  
  let notification;
  
  onMount(() => {
    notification = new Notification({
      text,
      content,
      type,
      duration,
      className,
      id,
      container
    });
    
    if (onclose) {
      notification.addEventListener('close', onclose);
    }
  });
  
  export function open() {
    // Update text before opening
    if (notification && text !== undefined) {
      notification.text = text;
    }
    notification?.open();
  }
  
  export function close() {
    notification?.close();
  }
  
  export function setText(newText) {
    if (notification) {
      notification.text = newText;
    }
  }
</script>