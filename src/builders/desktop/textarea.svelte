<script>
  import { onMount } from 'svelte';
  import { TextArea } from 'kintone-ui-component';
  
  let { 
    label,
    value,
    placeholder,
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
    const textarea = new TextArea({
      label,
      value,
      placeholder,
      error,
      className,
      id,
      visible,
      disabled,
      requiredIcon
    });
    
    container.appendChild(textarea);
    
    if (onchange) {
      textarea.addEventListener('change', onchange);
    }
    
    if (onfocus) {
      textarea.addEventListener('focus', onfocus);
    }
    
    if (oninput) {
      textarea.addEventListener('input', oninput);
    }
  });
</script>

<div bind:this={container}></div>