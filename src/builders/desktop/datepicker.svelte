<script>
  import { onMount } from 'svelte';
  import { DatePicker } from 'kintone-ui-component';
  
  let { 
    label,
    value,
    language = 'auto',
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
    const datePicker = new DatePicker({
      label,
      value,
      language,
      error,
      className,
      id,
      visible,
      disabled,
      requiredIcon
    });
    
    container.appendChild(datePicker);
    
    if (onchange) {
      datePicker.addEventListener('change', onchange);
    }
  });
</script>

<div bind:this={container}></div>