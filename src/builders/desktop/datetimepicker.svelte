<script>
  import { onMount } from 'svelte';
  import { DateTimePicker } from 'kintone-ui-component';
  
  let { 
    label,
    value,
    language = 'auto',
    max,
    min,
    timeStep = 30,
    hour12 = false,
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
    const dateTimePicker = new DateTimePicker({
      label,
      value,
      language,
      max,
      min,
      timeStep,
      hour12,
      error,
      className,
      id,
      visible,
      disabled,
      requiredIcon
    });
    
    container.appendChild(dateTimePicker);
    
    if (onchange) {
      dateTimePicker.addEventListener('change', onchange);
    }
  });
</script>

<div bind:this={container}></div>