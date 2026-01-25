<script>
  import { onMount } from 'svelte';
  import { Dropdown } from 'kintone-ui-component';
  
  let { 
    label,
    items = [],
    value,
    selectedIndex = -1,
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
    const dropdown = new Dropdown({
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
    
    container.appendChild(dropdown);
    
    if (onchange) {
      dropdown.addEventListener('change', onchange);
    }
  });
</script>

<div bind:this={container}></div>