<script>
  import { onMount } from 'svelte';
  import { Attachment } from 'kintone-ui-component';
  
  let { 
    label,
    files = [],
    language = 'auto',
    message,
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
    const attachment = new Attachment({
      label,
      files,
      language,
      message,
      error,
      className,
      id,
      visible,
      disabled,
      requiredIcon
    });
    
    container.appendChild(attachment);
    
    if (onchange) {
      attachment.addEventListener('change', onchange);
    }
  });
</script>

<div bind:this={container}></div>