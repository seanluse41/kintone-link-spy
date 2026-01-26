// updateRepositoryLink.js
export async function updateRepositoryLink(repositoryRecord, fieldCode, currentUser) {
  
  try {
    const linkTable = repositoryRecord.linkTable.value;

    // Find matching subtable row
    const rowIndex = linkTable.findIndex(
      row => row.value.linkField.value === fieldCode
    );
    if (rowIndex === -1) {
      console.error(`Field ${fieldCode} not found in subtable`);
      return false;
    }

    const row = linkTable[rowIndex];
    
    const currentClicks = parseInt(row.value.clicks.value) || 0;
    const currentUsers = row.value.users.value || [];

    // Check if user already clicked
    const userAlreadyClicked = currentUsers.some(u => u.code === currentUser.code);
    
    if (userAlreadyClicked) {
      return false;
    }

    // Update the row - increment clicks and add user
    row.value.clicks.value = String(currentClicks + 1);
    row.value.users.value = [...currentUsers, { code: currentUser.code, name: currentUser.name }];

    const REPOSITORY_APP_ID = 74;
    
    const result = await kintone.api(kintone.api.url('/k/v1/record', true), 'PUT', {
      app: REPOSITORY_APP_ID,
      id: repositoryRecord.$id.value,
      record: {
        linkTable: {
          value: linkTable
        }
      }
    });

    return true;
  } catch (error) {
    console.error('Error updating repository link:', error);
    return false;
  }
}