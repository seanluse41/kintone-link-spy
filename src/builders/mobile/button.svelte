<script>
  import { onMount } from 'svelte';
  import { MobileButton } from 'kintone-ui-component';
  
  let { 
    text,
    type = 'normal',
    content,
    className,
    id,
    disabled = false,
    visible = true,
    onclick 
  } = $props();
  
  let container;
  
  onMount(() => {
    const button = new MobileButton({
      text,
      type,
      content,
      className,
      id,
      disabled,
      visible
    });
    
    container.appendChild(button);
    
    if (onclick) {
      button.addEventListener('click', onclick);
    }
  });
</script>

<div bind:this={container}></div>