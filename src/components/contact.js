const contact = () => {
    const tabs = document.querySelector('.tabs')
    const div = document.createElement('div')
    div.id = 'tab3'
    div.classList.add('tab')
    div.textContent = 'Contact'
    tabs.appendChild(div)
}

export default contact;