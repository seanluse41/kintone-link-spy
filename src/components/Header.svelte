<script>
  import Button from "../builders/desktop/button.svelte";
  import Dialog from "../builders/desktop/dialog.svelte";
  import { deleteRepositoryRecord } from "../lib/requests/deleteRepositoryRecord.js";

  let { recordId } = $props();
  
  let dialog;
  const REPOSITORY_APP_ID = 74;

  function viewStats() {
    const url = `https://sean.cybozu.com/k/${REPOSITORY_APP_ID}/show#record=${recordId}`;
    window.open(url, '_blank');
  }

  function confirmDelete() {
    dialog.open();
  }

  async function handleDelete() {
    dialog.close();
    const success = await deleteRepositoryRecord(recordId);
    if (success) {
      alert('Stats deleted successfully');
      location.reload();
    } else {
      alert('Failed to delete stats');
    }
  }
</script>

<div class="header">
  <Button
    text="View This App's Stats"
    type="normal"
    onclick={viewStats}
  />

  <Button
    text="Remove this App's Stats"
    type="normal"
    onclick={confirmDelete}
  />
</div>

<Dialog
  bind:this={dialog}
  title="Confirm Delete"
  content="Are you sure you want to delete this app's statistics?"
  icon="question"
  buttons={[
    { text: 'Cancel', type: 'normal', onclick: () => dialog.close() },
    { text: 'Delete', type: 'submit', onclick: handleDelete }
  ]}
/>

<style>
  .header {
    display: flex;
    gap: 3%;
  }
</style>