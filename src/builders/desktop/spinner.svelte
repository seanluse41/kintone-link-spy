<script>
  import { onMount } from 'svelte';
  import { Spinner } from 'kintone-ui-component';
  
  let { 
    text,
    className,
    id,
    container = typeof document !== 'undefined' ? document.body : undefined
  } = $props();
  
  let spinner;
  
  onMount(() => {
    spinner = new Spinner({
      text,
      className,
      id,
      container
    });
  });
  
  export function open() {
    spinner?.open();
  }
  
  export function close() {
    spinner?.close();
  }
</script>