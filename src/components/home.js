// import beans from '../../img/beans.jpg'

const home = () => {
    const content = document.querySelector('#content')
    const tabContainer = document.createElement('div')
    const tabs = document.createElement('div')
    tabContainer.classList.add('tab-container')
    tabs.classList.add('tabs')
    content.appendChild(tabContainer)
    content.appendChild(tabs)
    // 
    const menu = document.createElement('button')
    menu.classList.add('tab-buttons')
    menu.dataset.tab = 'tab1'
    menu.textContent = 'Menu'
    const rate = document.createElement('button')
    rate.classList.add('tab-buttons')
    rate.dataset.tab = 'tab2'
    rate.textContent = 'Avaliações'
    const contact = document.createElement('button')
    contact.classList.add('tab-buttons')
    contact.dataset.tab = 'tab3'
    contact.textContent = 'Contato'
    // 
    tabContainer.appendChild(menu)
    tabContainer.appendChild(rate)
    tabContainer.appendChild(contact)
}

export default home;