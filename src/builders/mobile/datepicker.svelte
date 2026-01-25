<script>
  import { onMount } from 'svelte';
  import { MobileDatePicker } from 'kintone-ui-component';
  
  let { 
    label,
    value,
    language = 'auto',
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
    const datePicker = new MobileDatePicker({
      label,
      value,
      language,
      error,
      className,
      id,
      disabled,
      requiredIcon,
      visible
    });
    
    container.appendChild(datePicker);
    
    if (onchange) {
      datePicker.addEventListener('change', onchange);
    }
  });
</script>

<div bind:this={container}></div>