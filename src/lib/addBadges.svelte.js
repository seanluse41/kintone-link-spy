import { mount } from 'svelte';
import Badge from '../components/Badge.svelte';
import UserModal from '../components/UserModal.svelte';
import { updateRepositoryLink } from './requests/updateRepositoryLink.js';

export function addBadges(trackableFields, repositoryRecord, domain, repositoryAppId) {
  trackableFields.forEach(field => {
    if (!field.element) return;
    
    const valueContainer = field.element.querySelector('.control-value-gaia');
    if (!valueContainer) return;
    
    valueContainer.style.position = 'relative';
    
    const badgeContainer = document.createElement('div');
    valueContainer.appendChild(badgeContainer);
    
    let clicks = $state(field.clicks);
    
    const linkTable = repositoryRecord.linkTable.value;
    const row = linkTable.find(r => r.value.linkField.value === field.code);
    const hasUserClicked = row?.value.users.value.some(u => u.code === field.currentUser.code) || false;
    
    let isClicked = $state(hasUserClicked);
    
    const users = row?.value.users.value || [];
    
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
          await updateRepositoryLink(repositoryRecord, field.code, field.currentUser, repositoryAppId);
        }
      });
    }
  });
}