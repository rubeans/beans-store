const home = () => {
    const tabs = document.querySelector('.tabs')
    const div = document.createElement('div')
    div.id = 'tab1'
    div.classList.add('tab', 'active')
    div.textContent = 'HOME'
    tabs.appendChild(div)
}

export default home;