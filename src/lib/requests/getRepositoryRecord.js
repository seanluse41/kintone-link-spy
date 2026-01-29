export async function getRepositoryRecord(currentAppId, currentRecordId, repositoryAppId) {
  try {
    const resp = await kintone.api(
      kintone.api.url('/k/v1/records', true),
      'GET',
      {
        app: repositoryAppId,
        query: `appID = "${currentAppId}" and trackingRecord = "${currentRecordId}"`
      }
    );
    
    if (resp.records && resp.records.length > 0) {
      return resp.records[0];
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching repository record:', error);
    return null;
  }
}