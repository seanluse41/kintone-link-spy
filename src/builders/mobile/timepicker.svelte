<script>
  import { onMount } from 'svelte';
  import { MobileTimePicker } from 'kintone-ui-component';
  
  let { 
    label,
    value,
    language = 'auto',
    hour12 = false,
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
    const timePicker = new MobileTimePicker({
      label,
      value,
      language,
      hour12,
      error,
      className,
      id,
      disabled,
      requiredIcon,
      visible
    });
    
    container.appendChild(timePicker);
    
    if (onchange) {
      timePicker.addEventListener('change', onchange);
    }
  });
</script>

<div bind:this={container}></div>