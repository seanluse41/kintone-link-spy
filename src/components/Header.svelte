<script>
  import Button from "../builders/desktop/button.svelte";
</script>

<div class="header">
<Button
  text="View This App's Stats"
  type="normal"
  onclick={() => alert("Button clicked!")}
/>

<Button
  text="Remove this App's Stats"
  type="normal"
  onclick={() => alert("Button 2 clicked!")}
/>
</div>

<style>
  .header {
    display: flex;
    gap: 3%;
  }
</style>