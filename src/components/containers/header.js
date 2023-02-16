const header = () => {
    // Create a new element that will be appended to the content
    const content = document.querySelector('#content')
    const header = document.createElement('header')
    header.classList.add('header')

    // The headerwill be generated here
    header.insertAdjacentHTML('beforeend', `
    <h1>Rubeans</h1>
    <p>The best beans out there!</p>
    `)
    // Append element to the page
    content.appendChild(header)

}

export default header;