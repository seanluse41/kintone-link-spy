import { getRepositoryRecord } from './getRepositoryRecord.js';

export async function syncLinkFields(repositoryAppId) {
  try {
    const currentAppId = kintone.app.getId();
    
    // Step 1: Get form fields and find all LINK/FILE fields
    const formFieldsResponse = await kintone.api(
      kintone.api.url('/k/v1/app/form/fields', true),
      'GET',
      { app: currentAppId }
    );
    
    const formFields = formFieldsResponse.properties;
    const linkAndFileFields = [];
    
    // Find LINK and FILE fields (including in subtables)
    for (const [fieldCode, field] of Object.entries(formFields)) {
      if (field.type === 'LINK' || field.type === 'FILE') {
        linkAndFileFields.push(fieldCode);
      } else if (field.type === 'SUBTABLE') {
        for (const [subFieldCode, subField] of Object.entries(field.fields)) {
          if (subField.type === 'LINK' || subField.type === 'FILE') {
            linkAndFileFields.push(subFieldCode);
          }
        }
      }
    }
    
    // Step 2: Check if repository record exists
    const repositoryRecord = await getRepositoryRecord(currentAppId, repositoryAppId);
    
    if (!repositoryRecord) {
      // Step 3a: Create new record with all fields
      const linkTableValue = linkAndFileFields.map(fieldCode => ({
        value: {
          linkField: { value: fieldCode },
          clicks: { value: '0' },
          users: { value: [] }
        }
      }));
      
      await kintone.api(
        kintone.api.url('/k/v1/record', true),
        'POST',
        {
          app: repositoryAppId,
          record: {
            appID: { value: String(currentAppId) },
            linkTable: { value: linkTableValue }
          }
        }
      );
      
      return {
        success: true,
        isNew: true,
        totalFields: linkAndFileFields.length
      };
    }
    
    // Step 3b: Update existing record - sync the subtable
    const existingLinkTable = repositoryRecord.linkTable.value || [];
    const existingFieldCodes = new Set(
      existingLinkTable.map(row => row.value.linkField.value)
    );
    
    // Keep existing rows that are still valid fields
    const updatedLinkTable = existingLinkTable.filter(row => 
      linkAndFileFields.includes(row.value.linkField.value)
    );
    
    // Add new fields that don't exist yet
    for (const fieldCode of linkAndFileFields) {
      if (!existingFieldCodes.has(fieldCode)) {
        updatedLinkTable.push({
          value: {
            linkField: { value: fieldCode },
            clicks: { value: '0' },
            users: { value: [] }
          }
        });
      }
    }
    
    // Update the repository record
    await kintone.api(
      kintone.api.url('/k/v1/record', true),
      'PUT',
      {
        app: repositoryAppId,
        id: repositoryRecord.$id.value,
        record: {
          linkTable: { value: updatedLinkTable }
        }
      }
    );
    
    const added = linkAndFileFields.filter(f => !existingFieldCodes.has(f)).length;
    const removed = existingLinkTable.length - updatedLinkTable.length;
    
    return {
      success: true,
      isNew: false,
      addedCount: added,
      removedCount: removed,
      totalFields: linkAndFileFields.length
    };
  } catch (error) {
    console.error('Error syncing link fields:', error);
    throw error;
  }
}