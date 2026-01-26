import { mount } from 'svelte';
import Badge from '../components/Badge.svelte';

export function addBadges(trackableFields) {
  trackableFields.forEach(field => {
    if (!field.element) return;
    
    const valueContainer = field.element.querySelector('.control-value-gaia');
    if (!valueContainer) return;
    
    valueContainer.style.position = 'relative';
    
    const badgeContainer = document.createElement('div');
    valueContainer.appendChild(badgeContainer);
    
    mount(Badge, {
      target: badgeContainer,
      props: { count: 0 }
    });
    
    // Add click listener
    const clickableElement = field.type === 'LINK' 
      ? valueContainer.querySelector('a')
      : valueContainer;
    
    if (clickableElement) {
      clickableElement.addEventListener('click', () => {
        console.log('Clicked:', field.code, field.type, field.value);
      });
    }
  });
}