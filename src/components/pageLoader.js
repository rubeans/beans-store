// import beans from '../../img/beans.jpg'

const pageLoader = () => {
    const content = document.querySelector('#content')
    const tabContainer = document.createElement('div')
    const tabs = document.createElement('div')
    tabContainer.classList.add('tab-buttons')
    tabs.classList.add('tab-contents')
    content.appendChild(tabContainer)
    content.appendChild(tabs)
    // 
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
    // 
    tabContainer.appendChild(home)
    tabContainer.appendChild(menu)
    tabContainer.appendChild(contact)
}

export default pageLoader;