import beans from '../../img/beans.jpg'

const home = () => {
    const h1 = document.createElement('h1')
    h1.textContent = "RuBeans"
    const img = document.createElement('img')
    img.style.width = '50vw'
    img.style.height = '70vh'
    img.src = beans
    const p = document.createElement('p')
    p.textContent = 'The best beans out there!'
    const content = document.querySelector('#content')
    content.appendChild(h1)
    content.appendChild(img)
    content.appendChild(p)
    content.style.textAlign = 'center'
    return content;
}

export default home;