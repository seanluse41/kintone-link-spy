// updateAppViewers.js
export async function updateAppViewers(repositoryRecord, currentUser) {
  if (!repositoryRecord) return false;
  
  try {
    const currentViewers = repositoryRecord.appViewers.value || [];
    
    // Check if user already viewed the app
    const hasViewed = currentViewers.some(u => u.code === currentUser.code);
    
    if (hasViewed) {
      return false;
    }

    // Add user to appViewers
    const updatedViewers = [...currentViewers, { code: currentUser.code, name: currentUser.name }];

    const REPOSITORY_APP_ID = 74;
    
    await kintone.api(kintone.api.url('/k/v1/record', true), 'PUT', {
      app: REPOSITORY_APP_ID,
      id: repositoryRecord.$id.value,
      record: {
        appViewers: {
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