// import beans from '../../img/beans.jpg'

const pageLoader = () => {
    const content = document.querySelector('#content')
    const tabContainer = document.createElement('div')
    const tabs = document.createElement('div')
    tabContainer.classList.add('tab-container')
    tabs.classList.add('tabs')
    content.appendChild(tabContainer)
    content.appendChild(tabs)
    // 
    const home = document.createElement('button')
    home.classList.add('tab-buttons')
    home.dataset.tab = 'tab1'
    home.textContent = 'Home'
    const menu = document.createElement('button')
    menu.classList.add('tab-buttons')
    menu.dataset.tab = 'tab2'
    menu.textContent = 'Menu'
    const contact = document.createElement('button')
    contact.classList.add('tab-buttons')
    contact.dataset.tab = 'tab3'
    contact.textContent = 'Contact'
    // 
    tabContainer.appendChild(home)
    tabContainer.appendChild(menu)
    tabContainer.appendChild(contact)
}

export default pageLoader;