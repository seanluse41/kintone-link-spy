<script>
  import { onMount } from 'svelte';
  import { UserOrgGroupSelect } from 'kintone-ui-component';
  
  let { 
    label,
    items = [],
    value = [],
    icon,
    placeholder,
    error,
    className,
    id,
    visible = true,
    disabled = false,
    requiredIcon = false,
    onchange,
    onclickpickericon
  } = $props();
  
  let container;
  
  onMount(() => {
    const userOrgGroupSelect = new UserOrgGroupSelect({
      label,
      items,
      value,
      icon,
      placeholder,
      error,
      className,
      id,
      visible,
      disabled,
      requiredIcon
    });
    
    container.appendChild(userOrgGroupSelect);
    
    if (onchange) {
      userOrgGroupSelect.addEventListener('change', onchange);
    }
    
    if (onclickpickericon) {
      userOrgGroupSelect.addEventListener('click-picker-icon', onclickpickericon);
    }
  });
</script>

<div bind:this={container}></div>