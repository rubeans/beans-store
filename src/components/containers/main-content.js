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
                    <h1 class="heading">Hours</h1>
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
                    <h1 class="heading">Location</h1>
                    <div class="location-content light-font">
                        <p>Rio De Janeiro - Brazil</p>
                    </div>
                </div>
                <div class="about">
                    <p class="light-font">Ru<span class='beans-txt'>Beans</span> is a fictional bean's focus restaurant made by <a href="https://github.com/rubeans" target="_blank">Rubens Guilherme</a>. This project was made along with The Odin Project using a tool called Webpack.</p>
                </div>
            </div>
        </div>

        <div id="menu-content" class="tab-content">
            <div class="container-content">
                <div class="dish">
                    <div class="img-container">
                        <img class="food-img" src="https://img.freepik.com/fotos-gratis/sortido-close-up-com-deliciosa-comida-brasileira_23-2148739180.jpg?w=900&t=st=1676947750~exp=1676948350~hmac=f54c2bbb0c67517bc47f768296e814a51023070eaaf188184572d18fee1034ca" />
                    </div>
                    <div class="dish-info">
                        <h1 class="dish-name heading">Feijoda</h1>
                        <p class="dish-price">$20</p>
                    </div>
                </div>
                <div class="dish">
                    <div class="img-container">
                        <img class="food-img" src="https://www.academiaassai.com.br/sites/default/files/feijao_tropeiro.jpg" />
                    </div>
                    <div class="dish-info">
                        <h1 class="dish-name heading">Feijão Tropeiro</h1>
                        <p class="dish-price">$11</p>
                    </div>
                </div>
                <div class="dish">
                    <div class="img-container">
                        <img class="food-img" src="https://www.receitas-sem-fronteiras.com/uploads/media/tutu_de_feij-o-2.jpg?1389805959" />
                    </div>
                    <div class="dish-info">
                        <h1 class="dish-name heading">Tutu de Feijão</h1>
                        <p class="dish-price">$14</p>
                    </div>
                </div>
                <div class="dish">
                    <div class="img-container">
                        <img class="food-img" src="https://media.istockphoto.com/id/521871683/pt/foto/mistura-de-salada-de-feij%C3%A3o.jpg?s=612x612&w=0&k=20&c=hyjJCfnPzDC0RoJoIQyjRNXx9U9Sg8xoNDfoTu3P1cM=" />
                    </div>
                    <div class="dish-info">
                        <h1 class="dish-name heading">Bean Salad</h1>
                        <p class="dish-price">$9</p>
                    </div>
                </div>
            </div>
        </div>

        <div id="contact-content" class="tab-content">
            <div class="container-content">
                <form class="form">
                    <label class="label">Full Name<input type="text" class="input" required></label>
                    <label class="label">E-Mail<input type="email" class="input required"></label>
                    <label class="label">Message<input type="text" class="input" required></label>
                    <button type="submit" class="msg-btn">Send</button>
                </form>
            </div>
        </div>
    `)

    // Append elements to the page
    content.appendChild(mainContainer)
    mainContainer.appendChild(tabButtons)
    mainContainer.appendChild(tabs)
}

export default mainContent;