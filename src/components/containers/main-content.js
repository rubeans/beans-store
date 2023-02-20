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
                <div class="hours">
                    <h2 class="heading">Hours</h2>
                    <div class="hours-content light-font">
                    <ul class="hours-list">
                        <li class="hour-list">Sunday: 11:30 AM - 11:30 AM</li>
                        <li class="hour-list">Monday: 11:30 AM - 10:00 PM</li>
                        <li class="hour-list">Tuesday: 11:30 AM - 10:00 PM</li>
                        <li class="hour-list">Wednesday: 11:30 AM - 10:00 PM</li>
                        <li class="hour-list">Thursday: 11:30 AM - 10:00 PM</li>
                        <li class="hour-list">Friday: 11:30 AM - 10:00 PM</li>
                        <li class="hour-list">Saturday: 11:30 AM - 11:30 AM</li>
                    </ul>
                    </div>
                </div>
                <div class="location">
                    <h2 class="heading">Location</h2>
                    <div class="location-content light-font">
                        <p>Duque de Caxias, Rio De Janeiro - Brazil</p>
                    </div>
                </div>
                <div class="about">
                    <h2 class="heading">Ru<span class='beans-txt'>Beans</span> is a fictional bean's focus restaurant made by <a href="https://github.com/rubeans" target="_blank">Rubens Guilherme</a>. This project was made along with The Odin Project using a tool called Webpack.</h2>
                </div>
            </div>
        </div>

        <div id="menu-content" class="tab-content">
            <div class="container-content">
                <div class="dishes-grid">
                    <div class="dish">
                        <div class="img-container">
                            <img class="food-img" src="https://img.freepik.com/fotos-premium/feijoada-uma-comida-tipica-brasileira_434193-226.jpg?w=2000"/>
                        </div>
                        <div class="dish-content">
                            <div class="price">
                                <p class="dish-price light-font">$20</p>
                            </div>
                            <div class="dish-description">
                                <h1 class="dish-name">Feijoda</h1>
                                <p class="dish-p light-font">It consists of a bean stew, usually with meat, and almost always accompanied by rice.</p>
                            </div>
                        </div>
                    </div>
                    <div class="dish">
                        <div class="img-container">
                            <img class="food-img" src="https://img.freepik.com/fotos-premium/feijoada-uma-comida-tipica-brasileira_434193-226.jpg?w=2000"/>
                        </div>
                        <div class="dish-content">
                            <div class="price">
                                <p class="dish-price light-font">$20</p>
                            </div>
                            <div class="dish-content">
                                <h1 class="dish-name">Feijoda</h1>
                                <p class="dish-description light-font">It consists of a bean stew, usually with meat, and almost always accompanied by rice.</p>
                            </div>
                        </div>
                    </div>
                    <div class="dish">
                        <div class="img-container">
                            <img class="food-img" src="https://img.freepik.com/fotos-premium/feijoada-uma-comida-tipica-brasileira_434193-226.jpg?w=2000"/>
                        </div>
                        <div class="dish-content">
                            <div class="price">
                                <p class="dish-price light-font">$20</p>
                            </div>
                            <div class="dish-content">
                                <h1 class="dish-name">Feijoda</h1>
                                <p class="dish-description light-font">It consists of a bean stew, usually with meat, and almost always accompanied by rice.</p>
                            </div>
                        </div>
                    </div>
                </div>
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