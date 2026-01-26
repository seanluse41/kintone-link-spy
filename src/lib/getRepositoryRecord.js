export async function getRepositoryRecord(currentAppId) {
  const REPOSITORY_APP_ID = 74;
  
  try {
    const resp = await kintone.api(
      kintone.api.url('/k/v1/records', true),
      'GET',
      {
        app: REPOSITORY_APP_ID,
        query: `appID = "${currentAppId}"`
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