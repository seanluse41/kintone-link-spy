export function getClickData(repositoryRecord) {
  const clickData = new Map();
  
  if (!repositoryRecord?.linkTable?.value) {
    return clickData;
  }
  
  for (const row of repositoryRecord.linkTable.value) {
    const linkField = row.value.linkField?.value;
    const clicks = parseInt(row.value.clicks?.value) || 0;
    
    if (linkField) {
      clickData.set(linkField, clicks);
    }
  }
  
  return clickData;
}