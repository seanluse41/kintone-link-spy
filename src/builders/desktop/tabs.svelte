<script>
  import { onMount } from 'svelte';
  import { Tabs } from 'kintone-ui-component';
  
  let { 
    items = [],
    value,
    borderVisible = true,
    scrollButtons = false,
    className,
    id,
    visible = true,
    onchange
  } = $props();
  
  let container;
  
  onMount(() => {
    const tabs = new Tabs({
      items,
      value,
      borderVisible,
      scrollButtons,
      className,
      id,
      visible
    });
    
    container.appendChild(tabs);
    
    if (onchange) {
      tabs.addEventListener('change', onchange);
    }
  });
</script>

<div bind:this={container}></div>