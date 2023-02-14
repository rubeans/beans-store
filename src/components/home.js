const home = () => {
    const tabs = document.querySelector('.tab-contents')
    const div = document.createElement('div')
    div.id = 'home-content'
    div.classList.add('tab-content', 'active')
    div.textContent = 'HOME'
    tabs.appendChild(div)
}

export default home;