export async function updateRecordViewers(repositoryRecord, currentUser, repositoryAppId) {
  if (!repositoryRecord) return false;
  
  try {
    const currentViewers = repositoryRecord.recordViewers.value || [];
    const hasViewed = currentViewers.some(u => u.code === currentUser.code);
    
    if (hasViewed) {
      return false;
    }

    const updatedViewers = [...currentViewers, { code: currentUser.code, name: currentUser.name }];
    
    await kintone.api(kintone.api.url('/k/v1/record', true), 'PUT', {
      app: repositoryAppId,
      id: repositoryRecord.$id.value,
      record: {
        recordViewers: {
          value: updatedViewers
        }
      }
    });

    return true;
  } catch (error) {
    console.error('Error updating app viewers:', error);
    return false;
  }
}