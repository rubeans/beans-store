const menu = () => {
    const tabs = document.querySelector('.tabs')
    const div = document.createElement('div')
    div.id = 'tab1'
    div.classList.add('tab', 'active')
    div.textContent = 'Menu'
    tabs.appendChild(div)
}

export default menu;