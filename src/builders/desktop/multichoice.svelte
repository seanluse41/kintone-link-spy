<script>
  import { onMount } from 'svelte';
  import { MultiChoice } from 'kintone-ui-component';
  
  let { 
    label,
    items = [],
    value = [],
    selectedIndex = [],
    error,
    className,
    id,
    visible = true,
    disabled = false,
    requiredIcon = false,
    onchange
  } = $props();
  
  let container;
  
  onMount(() => {
    const multiChoice = new MultiChoice({
      label,
      items,
      value,
      selectedIndex,
      error,
      className,
      id,
      visible,
      disabled,
      requiredIcon
    });
    
    container.appendChild(multiChoice);
    
    if (onchange) {
      multiChoice.addEventListener('change', onchange);
    }
  });
</script>

<div bind:this={container}></div>