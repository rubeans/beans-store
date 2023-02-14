const menu = () => {
    const tabs = document.querySelector('.tab-contents')
    const div = document.createElement('div')
    div.id = 'menu-content'
    div.classList.add('tab-content')
    div.textContent = 'MENU'
    tabs.appendChild(div)
}

export default menu;