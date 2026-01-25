<script>
  import { onMount } from 'svelte';
  import { Combobox } from 'kintone-ui-component';
  
  let { 
    label,
    items = [],
    value,
    placeholder,
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
    const combobox = new Combobox({
      label,
      items,
      value,
      placeholder,
      error,
      className,
      id,
      visible,
      disabled,
      requiredIcon
    });
    
    container.appendChild(combobox);
    
    if (onchange) {
      combobox.addEventListener('change', onchange);
    }
  });
</script>

<div bind:this={container}></div>