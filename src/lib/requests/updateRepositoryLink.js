export async function updateRepositoryLink(repositoryRecord, fieldCode, currentUser, repositoryAppId) {
  try {
    const linkTable = repositoryRecord.linkTable.value;
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
    const userAlreadyClicked = currentUsers.some(u => u.code === currentUser.code);
    
    if (userAlreadyClicked) {
      return false;
    }

    row.value.clicks.value = String(currentClicks + 1);
    row.value.users.value = [...currentUsers, { code: currentUser.code, name: currentUser.name }];
    
    await kintone.api(kintone.api.url('/k/v1/record', true), 'PUT', {
      app: repositoryAppId,
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