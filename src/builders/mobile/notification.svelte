<script>
  import { onMount } from 'svelte';
  import { MobileNotification } from 'kintone-ui-component';
  
  let { 
    text,
    content,
    className,
    id,
    duration = -1,
    container = document.body,
    onclose
  } = $props();
  
  let notification;
  
  onMount(() => {
    notification = new MobileNotification({
      text,
      content,
      className,
      id,
      duration,
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