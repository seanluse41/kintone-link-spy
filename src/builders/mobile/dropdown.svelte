<script>
  import { onMount } from 'svelte';
  import { MobileDropdown } from 'kintone-ui-component';
  
  let { 
    label,
    items = [],
    value,
    selectedIndex = -1,
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
    const dropdown = new MobileDropdown({
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
    
    container.appendChild(dropdown);
    
    if (onchange) {
      dropdown.addEventListener('change', onchange);
    }
  });
</script>

<div bind:this={container}></div>