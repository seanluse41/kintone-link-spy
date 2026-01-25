<script>
  let { pluginId } = $props();
  
  let message = $state('');

  const config = kintone.plugin.app.getConfig(pluginId);
  if (config.message) {
    message = config.message;
  }

  function handleSubmit(e) {
    e.preventDefault();
    kintone.plugin.app.setConfig({ message }, () => {
      alert('The plug-in settings have been saved. Please update the app!');
      window.location.href = '../../flow?app=' + kintone.app.getId();
    });
  }

  function handleCancel() {
    window.location.href = '../../' + kintone.app.getId() + '/plugin/';
  }
</script>

<h2 class="settings-heading">Settings for LinkSpy</h2>
<p class="kintoneplugin-desc">This message is displayed on the app page after the app has been updated.</p>

<form class="js-submit-settings" onsubmit={handleSubmit}>
  <p class="kintoneplugin-row">
    <label for="message">
      Message:
      <input 
        type="text" 
        class="kintoneplugin-input-text"
        bind:value={message}
      />
    </label>
  </p>
  <p class="kintoneplugin-row">
    <button type="button" class="kintoneplugin-button-dialog-cancel" onclick={handleCancel}>
      Cancel
    </button>
    <button class="kintoneplugin-button-dialog-ok">Save</button>
  </p>
</form>