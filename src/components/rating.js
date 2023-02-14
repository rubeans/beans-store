const rating = () => {
    const tabs = document.querySelector('.tabs')
    const div = document.createElement('div')
    div.id = 'tab2'
    div.classList.add('tab')
    div.textContent = 'Rating'
    tabs.appendChild(div)
}

export default rating;