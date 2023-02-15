const pageLoader = () => {
    // Containers
    const content = document.querySelector('#content')
    const tabButtons = document.createElement('div')
    const tabs = document.createElement('div')
    tabButtons.classList.add('tab-buttons')
    tabs.classList.add('tab-contents')
    content.appendChild(tabButtons)
    content.appendChild(tabs)
    // Add buttons
    const home = document.createElement('button')
    home.id = 'home'
    home.classList.add('tab-button', 'active')
    home.textContent = 'Home'
    const menu = document.createElement('button')
    menu.id = 'menu'
    menu.classList.add('tab-button')
    menu.textContent = 'Menu'
    const contact = document.createElement('button')
    contact.id = 'contact'
    contact.classList.add('tab-button')
    contact.textContent = 'Contact'
    // Put buttons inside tab-buttons container
    tabButtons.appendChild(home)
    tabButtons.appendChild(menu)
    tabButtons.appendChild(contact)
}

export default pageLoader;