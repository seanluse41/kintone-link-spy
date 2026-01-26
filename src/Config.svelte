<script>
  import Button from './builders/desktop/button.svelte';
  import Text from './builders/desktop/text.svelte';
  import Checkbox from './builders/desktop/checkbox.svelte';
  import Notification from './builders/desktop/notification.svelte';
  import Dialog from './builders/desktop/dialog.svelte';
  import { createRepositoryApp } from './lib/requests/createRepositoryApp.js';
  import { syncLinkFields } from './lib/requests/syncLinkFields.js';

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

  let successNotification;
  let errorNotification;
  let infoNotification;
  let deleteDialog;
  let createDialog;
  let syncDialog;

  let successText = $state('');
  let errorText = $state('');
  let infoText = $state('');

  function showSuccess(message) {
    successText = message;
    successNotification.open();
  }

  function showError(message) {
    errorText = message;
    errorNotification.open();
  }

  function showInfo(message) {
    infoText = message;
    infoNotification.open();
  }

  function confirmCreateRepository() {
    createDialog.open();
  }

  async function handleCreateRepository() {
    createDialog.close();
    
    try {
      const newAppId = await createRepositoryApp();
      config.repositoryAppId = String(newAppId);
      
      // Save the config with the new app ID
      kintone.plugin.app.setConfig({
        repositoryAppId: config.repositoryAppId,
        autoSync: String(config.autoSync),
        showBadges: String(config.showBadges),
        trackClicks: String(config.trackClicks)
      }, () => {
        showSuccess(`Repository app created! App ID: ${newAppId}`);
        setTimeout(() => location.reload(), 2000);
      });
    } catch (error) {
      showError('Failed to create repository app');
    }
  }

  function confirmSyncFields() {
    if (!config.repositoryAppId) {
      showError('Please set Repository App ID first');
      return;
    }
    syncDialog.open();
  }

  async function handleSyncFields() {
    syncDialog.close();
    
    try {
      const result = await syncLinkFields(config.repositoryAppId);
      const message = `Sync complete! ${result.totalFields} fields tracked`;
      showSuccess(message);
    } catch (error) {
      showError('Failed to sync link fields');
    }
  }

  function confirmDelete() {
    deleteDialog.open();
  }

  async function deleteRepositoryApp() {
    deleteDialog.close();
    showInfo('Coming soon');
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    if (!config.repositoryAppId) {
      showError('Repository App ID is required');
      return;
    }

    kintone.plugin.app.setConfig({
      repositoryAppId: config.repositoryAppId,
      autoSync: String(config.autoSync),
      showBadges: String(config.showBadges),
      trackClicks: String(config.trackClicks)
    }, () => {
      showSuccess('Settings saved!');
      setTimeout(() => {
        window.location.href = '/k/admin/app/flow?app=' + kintone.app.getId();
      }, 2000);
    });
  }

  function handleCancel() {
    window.location.href = '/k/admin/app/flow?app=' + kintone.app.getId();
  }

  function handleRepositoryIdChange(e) {
    config.repositoryAppId = e.detail.value;
  }

  function handleCheckboxChange(e) {
    const fieldName = e.target.closest('.checkbox-container')?.dataset.field;
    if (fieldName) {
      config[fieldName] = e.detail.value.length > 0;
    }
  }
</script>

<div class="config-container">
  <h1>Link Spy Configuration</h1>
  
  <form onsubmit={handleSubmit}>
    <div class="section">
      <h2>Repository App</h2>
      
      <Text
        label="Repository App ID"
        value={config.repositoryAppId}
        placeholder="Enter the app ID for storing click data"
        requiredIcon={true}
        onchange={handleRepositoryIdChange}
      />
      
      <div class="button-group">
        <Button
          text="Create Repository App"
          type="normal"
          onclick={confirmCreateRepository}
        />
        
        <Button
          text="Sync Link Fields"
          type="normal"
          onclick={confirmSyncFields}
        />
        
        <Button
          text="Delete Repository App"
          type="normal"
          onclick={confirmDelete}
        />
      </div>
    </div>

    <div class="section">
      <h2>Options</h2>
      
      <div class="checkbox-container" data-field="autoSync">
        <Checkbox
          label="Auto Sync"
          items={[{ label: 'Automatically sync link fields when record is saved', value: 'autoSync' }]}
          value={config.autoSync ? ['autoSync'] : []}
          onchange={handleCheckboxChange}
        />
      </div>
      
      <div class="checkbox-container" data-field="showBadges">
        <Checkbox
          label="Show Badges"
          items={[{ label: 'Display click count badges on links and attachments', value: 'showBadges' }]}
          value={config.showBadges ? ['showBadges'] : []}
          onchange={handleCheckboxChange}
        />
      </div>
      
      <div class="checkbox-container" data-field="trackClicks">
        <Checkbox
          label="Track Clicks"
          items={[{ label: 'Enable click tracking for links and attachments', value: 'trackClicks' }]}
          value={config.trackClicks ? ['trackClicks'] : []}
          onchange={handleCheckboxChange}
        />
      </div>
    </div>

    <div class="form-actions">
      <Button
        text="Save"
        type="submit"
        onclick={handleSubmit}
      />
      
      <Button
        text="Cancel"
        type="normal"
        onclick={handleCancel}
      />
    </div>
  </form>
</div>

<Notification
  bind:this={successNotification}
  text={successText}
  type="success"
  duration={2000}
/>

<Notification
  bind:this={errorNotification}
  text={errorText}
  type="danger"
  duration={2000}
/>

<Notification
  bind:this={infoNotification}
  text={infoText}
  type="info"
  duration={2000}
/>

<Dialog
  bind:this={createDialog}
  title="Create Repository App"
  content="This will create a new app to store link tracking data. Continue?"
  icon="question"
  buttons={[
    { text: 'Cancel', type: 'normal', onclick: () => createDialog.close() },
    { text: 'Create', type: 'submit', onclick: handleCreateRepository }
  ]}
/>

<Dialog
  bind:this={syncDialog}
  title="Sync Link Fields"
  content="This will scan the current app for LINK and FILE fields and sync them to the repository app. Continue?"
  icon="question"
  buttons={[
    { text: 'Cancel', type: 'normal', onclick: () => syncDialog.close() },
    { text: 'Sync', type: 'submit', onclick: handleSyncFields }
  ]}
/>

<Dialog
  bind:this={deleteDialog}
  title="Confirm Delete"
  content="Are you sure you want to delete the repository app?"
  icon="question"
  buttons={[
    { text: 'Cancel', type: 'normal', onclick: () => deleteDialog.close() },
    { text: 'Delete', type: 'submit', onclick: deleteRepositoryApp }
  ]}
/>

<style>
  .config-container {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
  }

  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 18px;
    margin-bottom: 15px;
    margin-top: 0;
  }

  .section {
    margin-bottom: 30px;
    padding: 20px;
    background: #f5f5f5;
    border-radius: 4px;
  }

  .button-group {
    display: flex;
    gap: 10px;
    margin-top: 15px;
  }

  .checkbox-container {
    margin-bottom: 15px;
  }

  .form-actions {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
  }
</style>