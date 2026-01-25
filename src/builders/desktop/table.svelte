<script>
  import { onMount } from 'svelte';
  import { Table } from 'kintone-ui-component';
  
  let { 
    label,
    columns = [],
    data = [],
    actionButton = true,
    actionButtonPosition = 'right',
    headerVisible = true,
    className,
    id,
    visible = true,
    onchange
  } = $props();
  
  let container;
  
  onMount(() => {
    const table = new Table({
      label,
      columns,
      data,
      actionButton,
      actionButtonPosition,
      headerVisible,
      className,
      id,
      visible
    });
    
    container.appendChild(table);
    
    if (onchange) {
      table.addEventListener('change', onchange);
    }
  });
</script>

<div bind:this={container}></div>