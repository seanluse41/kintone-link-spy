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
    notification?.open();
  }
  
  export function close() {
    notification?.close();
  }
</script>