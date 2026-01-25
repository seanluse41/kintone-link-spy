<script>
  import { onMount } from 'svelte';
  import { MobileCheckbox } from 'kintone-ui-component';
  
  let { 
    label,
    items = [],
    value = [],
    selectedIndex = [],
    error,
    className,
    id,
    borderVisible = true,
    disabled = false,
    requiredIcon = false,
    visible = true,
    onchange
  } = $props();
  
  let container;
  
  onMount(() => {
    const checkbox = new MobileCheckbox({
      label,
      items,
      value,
      selectedIndex,
      error,
      className,
      id,
      borderVisible,
      disabled,
      requiredIcon,
      visible
    });
    
    container.appendChild(checkbox);
    
    if (onchange) {
      checkbox.addEventListener('change', onchange);
    }
  });
</script>

<div bind:this={container}></div>