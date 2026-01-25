<script>
  import { onMount } from 'svelte';
  import { RadioButton } from 'kintone-ui-component';
  
  let { 
    label,
    items = [],
    value,
    selectedIndex = -1,
    itemLayout = 'horizontal',
    error,
    className,
    id,
    visible = true,
    disabled = false,
    borderVisible = true,
    requiredIcon = false,
    onchange
  } = $props();
  
  let container;
  
  onMount(() => {
    const radioButton = new RadioButton({
      label,
      items,
      value,
      selectedIndex,
      itemLayout,
      error,
      className,
      id,
      visible,
      disabled,
      borderVisible,
      requiredIcon
    });
    
    container.appendChild(radioButton);
    
    if (onchange) {
      radioButton.addEventListener('change', onchange);
    }
  });
</script>

<div bind:this={container}></div>