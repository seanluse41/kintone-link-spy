<script>
  import { onMount } from 'svelte';
  import { MobileRadioButton } from 'kintone-ui-component';
  
  let { 
    label,
    items = [],
    value,
    selectedIndex = -1,
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
    const radioButton = new MobileRadioButton({
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
    
    container.appendChild(radioButton);
    
    if (onchange) {
      radioButton.addEventListener('change', onchange);
    }
  });
</script>

<div bind:this={container}></div>