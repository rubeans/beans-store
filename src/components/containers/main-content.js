const mainContent = () => {
    // Declare existing html element
    const content = document.querySelector('#content')

    // Create a new element that will be appended to the content
    const mainContainer = document.createElement('main')
    mainContainer.classList.add('main-content')

    // Create buttons to redirected to each content of the page
    const tabButtons = document.createElement('div')
    tabButtons.classList.add('tab-buttons')
    tabButtons.insertAdjacentHTML('beforeend', `
        <button id="home" class="tab-button active">Home</button>
        <button id="menu" class="tab-button">Menu</button>
        <button id="contact" class="tab-button">Contact Us</button>
    `)

    // The main content will be generated here
    const tabs = document.createElement('div')
    tabs.classList.add('tab-contents')
    tabs.insertAdjacentHTML('beforeend', ` 
        <div id="home-content" class="tab-content">
            <h1>Home</h1>
        </div>
        <div id="menu-content" class="tab-content">
            <h1>Menu</h1>
        </div>
        <div id="contact-content" class="tab-content">
            <h1>Contact</h1>
        </div>
    `)

    // Append elements to the page
    content.appendChild(mainContainer)
    mainContainer.appendChild(tabButtons)
    mainContainer.appendChild(tabs)
}

export default mainContent;