<script>
  import { onMount } from 'svelte';
  import { Tooltip } from 'kintone-ui-component';
  
  let { 
    title,
    container,
    placement = 'top',
    describeChild = false,
    className,
    id
  } = $props();
  
  let tooltipContainer;
  
  onMount(() => {
    const tooltip = new Tooltip({
      title,
      container,
      placement,
      describeChild,
      className,
      id
    });
    
    tooltipContainer.appendChild(tooltip);
  });
</script>

<div bind:this={tooltipContainer}></div>