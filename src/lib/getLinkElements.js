export function getLinkElements(fieldLabel) {
  const elements = Array.from(document.querySelectorAll('.control-link-field-gaia'));
  
  if (!fieldLabel) return elements;
  
  return elements.find(el => {
    const labelText = el.querySelector('.control-label-text-gaia')?.textContent;
    return labelText === fieldLabel;
  });
}