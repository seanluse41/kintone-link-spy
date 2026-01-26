export function parseTable(record, formFields, getLinkElements, getFileElements) {
  const trackableFields = [];

  Object.entries(record.record).forEach(([code, field]) => {
    if (field.type === 'LINK' || field.type === 'FILE') {
      const fieldLabel = formFields[code]?.label;
      const element = field.type === 'LINK' 
        ? getLinkElements(fieldLabel)
        : getFileElements(fieldLabel);
      
      trackableFields.push({ code, type: field.type, element, value: field.value });
    } else if (field.type === 'SUBTABLE') {
      const tableLabel = formFields[code]?.label;
      const subtableRows = Array.from(document.querySelectorAll('.subtable-row-gaia'));
      const tableContainer = subtableRows.find(row => {
        const label = row.querySelector('.subtable-row-label-text-gaia')?.textContent;
        return label === tableLabel;
      });
      
      if (tableContainer) {
        const table = tableContainer.querySelector('table');
        
        field.value.forEach(row => {
          Object.entries(row.value).forEach(([tableFieldCode, tableField]) => {
            if (tableField.type === 'LINK' || tableField.type === 'FILE') {
              const fieldLabel = formFields[code]?.fields?.[tableFieldCode]?.label;
              
              const headers = Array.from(table.querySelectorAll('.subtable-label-inner-gaia'));
              const colIndex = headers.findIndex(h => h.textContent === fieldLabel);
              
              if (colIndex >= 0) {
                const cells = table.querySelectorAll(`tbody tr td:nth-child(${colIndex + 1})`);
                const element = cells[0]?.querySelector('.control-link-field-gaia, .control-file-field-gaia');
                
                trackableFields.push({ 
                  code: tableFieldCode, 
                  type: tableField.type, 
                  element, 
                  value: tableField.value, 
                  inTable: code 
                });
              } else {
                trackableFields.push({ 
                  code: tableFieldCode, 
                  type: tableField.type, 
                  value: tableField.value, 
                  inTable: code 
                });
              }
            }
          });
        });
      }
    }
  });

  return trackableFields;
}