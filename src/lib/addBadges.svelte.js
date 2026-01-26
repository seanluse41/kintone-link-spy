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
    
    let clicks = $state(field.clicks);
    let isClicked = $state(false);
    
    mount(Badge, {
      target: badgeContainer,
      props: { 
        get count() {
          return clicks;
        }
      }
    });
    
    // Add click listener
    const clickableElement = field.type === 'LINK' 
      ? valueContainer.querySelector('a')
      : valueContainer;
    
    if (clickableElement) {
      clickableElement.addEventListener('click', () => {
        if (!isClicked) {
          clicks++;
          isClicked = true;
          console.log('Clicked:', field.code, 'Count:', clicks);
        }
      });
    }
  });
}