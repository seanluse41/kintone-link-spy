<script>
  let { count = 0 } = $props();
</script>

<span class="badge">{count}</span>

<style>
  .badge {
    position: absolute;
    bottom: 2px;
    right: 2px;
    background: #3498db;
    color: white;
    font-size: 10px;
    border-radius: 10px;
    min-width: 16px;
    text-align: center;
    font-weight: 500;
  }
</style>