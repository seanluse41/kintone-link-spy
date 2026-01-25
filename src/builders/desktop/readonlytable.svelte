<script>
  import { onMount } from 'svelte';
  import { ReadOnlyTable } from 'kintone-ui-component';
  
  let { 
    label,
    columns = [],
    data = [],
    rowsPerPage = 5,
    pagination = true,
    className,
    id,
    visible = true
  } = $props();
  
  let container;
  
  onMount(() => {
    const readOnlyTable = new ReadOnlyTable({
      label,
      columns,
      data,
      rowsPerPage,
      pagination,
      className,
      id,
      visible
    });
    
    container.appendChild(readOnlyTable);
  });
</script>

<div bind:this={container}></div>