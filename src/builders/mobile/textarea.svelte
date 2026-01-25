<script>
  import { onMount } from 'svelte';
  import { MobileTextArea } from 'kintone-ui-component';
  
  let { 
    label,
    value,
    placeholder,
    error,
    className,
    id,
    disabled = false,
    requiredIcon = false,
    visible = true,
    onchange,
    onfocus,
    oninput
  } = $props();
  
  let container;
  
  onMount(() => {
    const textArea = new MobileTextArea({
      label,
      value,
      placeholder,
      error,
      className,
      id,
      disabled,
      requiredIcon,
      visible
    });
    
    container.appendChild(textArea);
    
    if (onchange) {
      textArea.addEventListener('change', onchange);
    }
    
    if (onfocus) {
      textArea.addEventListener('focus', onfocus);
    }
    
    if (oninput) {
      textArea.addEventListener('input', oninput);
    }
  });
</script>

<div bind:this={container}></div>