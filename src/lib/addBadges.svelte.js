// addBadges.svelte.js
import { mount } from 'svelte';
import Badge from '../components/Badge.svelte';
import UserModal from '../components/UserModal.svelte';
import { updateRepositoryLink } from './requests/updateRepositoryLink.js';

export function addBadges(trackableFields, repositoryRecord, domain) {
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
    
    const users = row?.value.users.value || [];
    
    // Mount modal
    const modalContainer = document.createElement('div');
    document.body.appendChild(modalContainer);
    
    const modalComponent = mount(UserModal, {
      target: modalContainer,
      props: {
        users,
        domain
      }
    });
    
    mount(Badge, {
      target: badgeContainer,
      props: { 
        get count() {
          return clicks;
        },
        onclick: () => {
          modalComponent.open();
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
          await updateRepositoryLink(repositoryRecord, field.code, field.currentUser);
        }
      });
    }
  });
}