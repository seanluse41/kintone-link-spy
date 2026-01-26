// addBadges.svelte.js
import { mount } from 'svelte';
import Badge from '../components/Badge.svelte';
import { updateRepositoryLink } from './requests/updateRepositoryLink.js';

export function addBadges(trackableFields, repositoryRecord) {
  trackableFields.forEach(field => {
    if (!field.element) return;
    
    const valueContainer = field.element.querySelector('.control-value-gaia');
    if (!valueContainer) return;
    
    valueContainer.style.position = 'relative';
    
    const badgeContainer = document.createElement('div');
    valueContainer.appendChild(badgeContainer);
    
    let clicks = $state(field.clicks);
    
    // Check if user has already clicked this link using currentUser from field
    const linkTable = repositoryRecord.linkTable.value;
    const row = linkTable.find(r => r.value.linkField.value === field.code);
    const hasUserClicked = row?.value.users.value.some(u => u.code === field.currentUser.code) || false;
    
    let isClicked = $state(hasUserClicked);
    
    mount(Badge, {
      target: badgeContainer,
      props: { 
        get count() {
          return clicks;
        }
      }
    });
    
    const clickableElement = field.type === 'LINK' 
      ? valueContainer.querySelector('a')
      : valueContainer;
    
    if (clickableElement) {
      clickableElement.addEventListener('click', async () => {
        if (!isClicked) {
          clicks++;
          isClicked = true;
          console.log('Clicked:', field.code, 'Count:', clicks);
          await updateRepositoryLink(repositoryRecord, field.code, field.currentUser);
        }
      });
    }
  });
}