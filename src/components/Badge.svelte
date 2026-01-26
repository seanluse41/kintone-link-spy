<script>
  let { count = 0, onclick = () => {} } = $props();
  
  function handleClick(e) {
    e.stopPropagation();
    onclick(e);
  }
</script>

<button class="badge" onclick={handleClick} type="button">{count}</button>

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
    cursor: pointer;
    transition: background 0.2s ease;
    border: none;
    padding: 2px 6px;
  }

  .badge:hover {
    background: #2980b9;
  }
</style>