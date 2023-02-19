const header = () => {
    // Create a new element that will be appended to the content
    const content = document.querySelector('#content')
    const header = document.createElement('header')
    header.classList.add('header')

    // The header will be generated here
    header.insertAdjacentHTML('beforeend', `
    <h1 class="header-h1">Ru<span class='beans-txt'>Beans</span></h1>
    <p class="header-p light-font">The best beans out there!</p>
    `)

    // Append element to the page
    content.appendChild(header)
}

export default header;