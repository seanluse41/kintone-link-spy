<script>
  import { onMount } from 'svelte';
  import { FieldGroup } from 'kintone-ui-component';
  
  let { 
    label,
    content,
    className,
    id,
    visible = true,
    disabled = false,
    expanded = false,
    onchange
  } = $props();
  
  let container;
  
  onMount(() => {
    const fieldGroup = new FieldGroup({
      label,
      content,
      className,
      id,
      visible,
      disabled,
      expanded
    });
    
    container.appendChild(fieldGroup);
    
    if (onchange) {
      fieldGroup.addEventListener('change', onchange);
    }
  });
</script>

<div bind:this={container}></div>