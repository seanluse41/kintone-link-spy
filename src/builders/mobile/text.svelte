<script>
  import { onMount } from 'svelte';
  import { MobileText } from 'kintone-ui-component';
  
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
    disabled = false,
    requiredIcon = false,
    visible = true,
    onchange,
    onfocus,
    oninput
  } = $props();
  
  let container;
  
  onMount(() => {
    const text = new MobileText({
      label,
      value,
      placeholder,
      prefix,
      suffix,
      textAlign,
      error,
      className,
      id,
      disabled,
      requiredIcon,
      visible
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