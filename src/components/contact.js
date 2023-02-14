const contact = () => {
    const tabs = document.querySelector('.tab-contents')
    const div = document.createElement('div')
    div.id = 'contact-content'
    div.classList.add('tab-content')
    div.textContent = 'CONTACT'
    tabs.appendChild(div)
}

export default contact;