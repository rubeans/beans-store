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
            <div class="container-content">
                <div class="about">
                    <h2 class="about-heading">RuBeans is a fictional bean's focus restaurant made by Rubens Guilherme for study purpose. This project was made along with The Odin Project using a tool called Webpack.</h2>
                </div>
                <div class="hours">
                    <h2 class="heading">Hours</h2>
                    <div class="hours-content light-font">
                    <ul class="hours-list">
                        <li class="hour-list">Monday: 11:30 AM - 10:00 PM</li>
                        <li class="hour-list">Tuesday: 11:30 AM - 10:00 PM</li>
                        <li class="hour-list">Wednesday: 11:30 AM - 10:00 PM</li>
                        <li class="hour-list">Thursday: 11:30 AM - 10:00 PM</li>
                        <li class="hour-list">Friday: 11:30 AM - 10:00 PM</li>
                        <li class="hour-list">Saturday: 11:30 AM - 12:00 AM</li>
                        <li class="hour-list">Sunday: 11:30 AM - 12:00 AM</li>
                    </ul>
                    </div>
                </div>
                <div class="location">
                    <h2 class="heading">Location</h2>
                    <div class="location-content light-font">
                        <p>Duque de Caxias, Rio De Janeiro - Brazil</p>
                    </div>
                </div>
            </div>
        </div>

        <div id="menu-content" class="tab-content">
            <div class="container-content">
                <h1>Menu</h1>
            </div>
        </div>

        <div id="contact-content" class="tab-content">
            <div class="container-content">
                <h1>Contact</h1>
            </div>
        </div>
    `)

    // Append elements to the page
    content.appendChild(mainContainer)
    mainContainer.appendChild(tabButtons)
    mainContainer.appendChild(tabs)
}

export default mainContent;