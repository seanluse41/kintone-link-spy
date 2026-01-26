<script>
  let { pluginId } = $props();
  
  let config = $state({
    repositoryAppId: '',
    autoSync: false,
    showBadges: true,
    trackClicks: true
  });

  const savedConfig = kintone.plugin.app.getConfig(pluginId);
  if (savedConfig.repositoryAppId) {
    config.repositoryAppId = savedConfig.repositoryAppId;
    config.autoSync = savedConfig.autoSync === 'true';
    config.showBadges = savedConfig.showBadges !== 'false';
    config.trackClicks = savedConfig.trackClicks !== 'false';
  }

  async function createRepositoryApp() {
    alert('Coming soon');
  }

  async function syncLinkFields() {
    alert('Coming soon');
  }

  async function deleteRepositoryApp() {
    if (!confirm('Delete repository app?')) return;
    alert('Coming soon');
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    if (!config.repositoryAppId) {
      alert('Repository App ID is required');
      return;
    }

    kintone.plugin.app.setConfig({
      repositoryAppId: config.repositoryAppId,
      autoSync: String(config.autoSync),
      showBadges: String(config.showBadges),
      trackClicks: String(config.trackClicks)
    }, () => {
      alert('Settings saved!');
      window.location.href = '../../flow?app=' + kintone.app.getId();
    });
  }

  function handleCancel() {
    window.location.href = '../../' + kintone.app.getId() + '/plugin/';
  }
</script>

<h2 class="settings-heading">Link-Spy Settings</h2>
<p class="kintoneplugin-desc">Configure link tracking for this app</p>

<form class="js-submit-settings" onsubmit={handleSubmit}>
  <p class="kintoneplugin-row">
    <label class="kintoneplugin-label" for="repo-app-id">
      <span>Repository App ID</span>
      <span class="kintoneplugin-require">*</span>
    </label>
    <input 
      id="repo-app-id" 
      type="text" 
      class="kintoneplugin-input-text"
      bind:value={config.repositoryAppId}
    />
  </p>

  <p class="kintoneplugin-row">
    <button type="button" class="kintoneplugin-button-normal" onclick={createRepositoryApp}>
      Create Repository App
    </button>
    <button type="button" class="kintoneplugin-button-normal" onclick={syncLinkFields}>
      Sync Link Fields
    </button>
    <button type="button" class="kintoneplugin-button-normal" onclick={deleteRepositoryApp}>
      Delete Repository App
    </button>
  </p>

  <p class="kintoneplugin-row">
    <label>
      <input type="checkbox" bind:checked={config.autoSync} />
      Auto-sync fields
    </label>
  </p>

  <p class="kintoneplugin-row">
    <label>
      <input type="checkbox" bind:checked={config.showBadges} />
      Show badges
    </label>
  </p>

  <p class="kintoneplugin-row">
    <label>
      <input type="checkbox" bind:checked={config.trackClicks} />
      Track clicks
    </label>
  </p>

  <p class="kintoneplugin-row">
    <button type="button" class="kintoneplugin-button-dialog-cancel" onclick={handleCancel}>
      Cancel
    </button>
    <button class="kintoneplugin-button-dialog-ok">Save</button>
  </p>
</form>