<script>
  import { onMount } from 'svelte';
  import { MobileMultiChoice } from 'kintone-ui-component';
  
  let { 
    label,
    items = [],
    value = [],
    selectedIndex = [],
    error,
    className,
    id,
    disabled = false,
    requiredIcon = false,
    visible = true,
    onchange
  } = $props();
  
  let container;
  
  onMount(() => {
    const multiChoice = new MobileMultiChoice({
      label,
      items,
      value,
      selectedIndex,
      error,
      className,
      id,
      disabled,
      requiredIcon,
      visible
    });
    
    container.appendChild(multiChoice);
    
    if (onchange) {
      multiChoice.addEventListener('change', onchange);
    }
  });
</script>

<div bind:this={container}></div>