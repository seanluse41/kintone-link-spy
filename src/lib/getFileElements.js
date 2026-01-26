export function getFileElements(fieldLabel) {
  const elements = Array.from(document.querySelectorAll('.control-file-field-gaia'));
  
  if (!fieldLabel) return elements;
  
  return elements.find(el => {
    const labelText = el.querySelector('.control-label-text-gaia')?.textContent;
    return labelText === fieldLabel;
  });
}