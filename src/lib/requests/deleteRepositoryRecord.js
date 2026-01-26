export async function deleteRepositoryRecord(recordId) {
  const REPOSITORY_APP_ID = 74;
  try {
    await kintone.api(
      kintone.api.url('/k/v1/records', true),
      'DELETE',
      {
        app: REPOSITORY_APP_ID,
        ids: [recordId]
      }
    );
    return true;
  } catch (error) {
    console.error('Error deleting repository record:', error);
    return false;
  }
}