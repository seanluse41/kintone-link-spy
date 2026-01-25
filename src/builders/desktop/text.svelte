<script>
  import { onMount } from 'svelte';
  import { Text } from 'kintone-ui-component';
  
  let { 
    label,
    value,
    placeholder,
    prefix,
    suffix,
    textAlign = 'left',
    error,
    className,
    id,
    visible = true,
    disabled = false,
    requiredIcon = false,
    onchange,
    onfocus,
    oninput
  } = $props();
  
  let container;
  
  onMount(() => {
    const text = new Text({
      label,
      value,
      placeholder,
      prefix,
      suffix,
      textAlign,
      error,
      className,
      id,
      visible,
      disabled,
      requiredIcon
    });
    
    container.appendChild(text);
    
    if (onchange) {
      text.addEventListener('change', onchange);
    }
    
    if (onfocus) {
      text.addEventListener('focus', onfocus);
    }
    
    if (oninput) {
      text.addEventListener('input', oninput);
    }
  });
</script>

<div bind:this={container}></div>