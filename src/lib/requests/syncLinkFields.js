// Creates tracking repo record on new record save

export async function createRepositoryRecord(currentAppId, currentRecordId, repositoryAppId) {
  try {
    // Get form fields and find all LINK/FILE fields
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
    
    // Create repository record with all fields initialized to 0
    const linkTableValue = linkAndFileFields.map(fieldCode => ({
      value: {
        linkField: { value: fieldCode },
        clicks: { value: '0' },
        users: { value: [] }
      }
    }));
    
    const response = await kintone.api(
      kintone.api.url('/k/v1/record', true),
      'POST',
      {
        app: repositoryAppId,
        record: {
          appID: { value: String(currentAppId) },
          trackingRecord: { value: String(currentRecordId) },
          linkTable: { value: linkTableValue }
        }
      }
    );
    
    return {
      success: true,
      recordId: response.id,
      totalFields: linkAndFileFields.length
    };
  } catch (error) {
    console.error('Error creating repository record:', error);
    throw error;
  }
}