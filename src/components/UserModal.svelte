<script>
  import Dialog from "../builders/desktop/dialog.svelte";
  
  let { users = [], domain = '' } = $props();
  
  let dialog;
  
  function createUserListContent() {
    const container = document.createElement('div');
    container.style.maxHeight = '400px';
    container.style.overflowY = 'auto';
    
    if (users.length === 0) {
      const message = document.createElement('p');
      message.textContent = 'No users have clicked this link yet';
      message.style.color = '#666';
      message.style.padding = '20px';
      message.style.textAlign = 'center';
      container.appendChild(message);
      return container;
    }
    
    const list = document.createElement('ul');
    list.style.listStyle = 'none';
    list.style.padding = '0';
    list.style.margin = '0';
    
    users.forEach((user, index) => {
      const li = document.createElement('li');
      li.style.padding = '12px';
      li.style.borderBottom = index < users.length - 1 ? '1px solid #f0f0f0' : 'none';
      
      const link = document.createElement('a');
      link.href = `https://${domain}/k/#/people/user/${user.code}`;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = `${user.name} (${user.code})`;
      link.style.color = '#3498db';
      link.style.textDecoration = 'none';
      link.style.fontSize = '14px';
      
      link.addEventListener('mouseenter', () => {
        link.style.textDecoration = 'underline';
      });
      
      link.addEventListener('mouseleave', () => {
        link.style.textDecoration = 'none';
      });
      
      li.appendChild(link);
      list.appendChild(li);
    });
    
    container.appendChild(list);
    return container;
  }
  
  export function open() {
    dialog?.open();
  }
  
  export function close() {
    dialog?.close();
  }
</script>

<Dialog
  bind:this={dialog}
  title="Users who clicked this link"
  content={createUserListContent()}
  footerVisible={false}
/>