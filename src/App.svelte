<script>
  import { onMount } from 'svelte';
  import { setupI18n } from './i18n.js';
  import Header from './components/Header.svelte';

  let { pluginId } = $props();
  
  let heading = $state('');
  let message = $state('');
  let isAdmin = $state(false);

  onMount(async () => {
    const i18n = await setupI18n();
    const config = kintone.plugin.app.getConfig(pluginId);
    const permissions = await kintone.app.getPermissions();
    isAdmin = permissions.editApp;
    heading = i18n.t('helloKintone');
    message = config.message;

    const record = kintone.app.record.get();
    const formFields = await kintone.app.getFormFields();
    const trackableFields = [];

    const linkElements = Array.from(document.querySelectorAll('.control-link-field-gaia'));
    const fileElements = Array.from(document.querySelectorAll('.control-file-field-gaia'));
    const allElements = [...linkElements, ...fileElements];

    // Process record fields
    Object.entries(record.record).forEach(([code, field]) => {
      if (field.type === 'LINK' || field.type === 'FILE') {
        const fieldLabel = formFields[code]?.label;
        const element = allElements.find(el => {
          const labelText = el.querySelector('.control-label-text-gaia')?.textContent;
          return labelText === fieldLabel;
        });
        
        trackableFields.push({ code, type: field.type, element, value: field.value });
      } else if (field.type === 'SUBTABLE') {
        // Find table by matching the table label
        const tableLabel = formFields[code]?.label;
        const subtableRows = Array.from(document.querySelectorAll('.subtable-row-gaia'));
        const tableContainer = subtableRows.find(row => {
          const label = row.querySelector('.subtable-row-label-text-gaia')?.textContent;
          return label === tableLabel;
        });
        
        if (tableContainer) {
          const table = tableContainer.querySelector('table');
          
          field.value.forEach(row => {
            Object.entries(row.value).forEach(([tableFieldCode, tableField]) => {
              if (tableField.type === 'LINK' || tableField.type === 'FILE') {
                const fieldLabel = formFields[code]?.fields?.[tableFieldCode]?.label;
                
                // Find column index by matching header label
                const headers = Array.from(table.querySelectorAll('.subtable-label-inner-gaia'));
                const colIndex = headers.findIndex(h => h.textContent === fieldLabel);
                
                if (colIndex >= 0) {
                  // Find the element in tbody for this column
                  const cells = table.querySelectorAll(`tbody tr td:nth-child(${colIndex + 1})`);
                  const element = cells[0]?.querySelector('.control-link-field-gaia, .control-file-field-gaia');
                  
                  trackableFields.push({ code: tableFieldCode, type: tableField.type, element, value: tableField.value, inTable: code });
                } else {
                  trackableFields.push({ code: tableFieldCode, type: tableField.type, value: tableField.value, inTable: code });
                }
              }
            });
          });
        }
      }
    });

    console.log('Trackable fields:', trackableFields);
  });
</script>

{#if isAdmin}
  <Header {heading} {message} />
{/if}