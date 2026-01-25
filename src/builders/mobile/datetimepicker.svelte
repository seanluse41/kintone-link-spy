<script>
  import { onMount } from 'svelte';
  import { MobileDateTimePicker } from 'kintone-ui-component';
  
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
    const dateTimePicker = new MobileDateTimePicker({
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
    
    container.appendChild(dateTimePicker);
    
    if (onchange) {
      dateTimePicker.addEventListener('change', onchange);
    }
  });
</script>

<div bind:this={container}></div>