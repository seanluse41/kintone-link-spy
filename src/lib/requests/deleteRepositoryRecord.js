export async function deleteRepositoryRecord(recordId, repositoryAppId) {
  try {
    await kintone.api(
      kintone.api.url('/k/v1/records', true),
      'DELETE',
      {
        app: repositoryAppId,
        ids: [recordId]
      }
    );
    return true;
  } catch (error) {
    console.error('Error deleting repository record:', error);
    return false;
  }
}