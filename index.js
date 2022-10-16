const menu = document.querySelector('ul')
const icon = document.querySelector('.icon')
const demoPage = document.querySelector('.demo-page')
const mainPage = document.querySelector('main')
const logo = document.querySelector('.logo')


logo.addEventListener('click', () => {
    if (window.innerWidth < 768) {
        switchCrossForBar(icon.classList)
    }
    demoPage.style.display = 'none';
    mainPage.style.display = 'flex';

})

if (window.innerWidth < 768) {
    menu.addEventListener('click', () => {
        switchCrossForBar(icon.classList)
        demoPage.style.display = 'flex';
        mainPage.style.display = 'none';
    })
} else {
    menu.addEventListener('click', () => {
    demoPage.style.display = 'flex';
    mainPage.style.display = 'none';
    })
}

icon.addEventListener('click', ()=> {
    if (icon.classList.contains('fa-bars')) {
        switchBarForCross(icon.classList)
    } else {
        switchCrossForBar(icon.classList)
    }   
})
function switchBarForCross(el) {
    el.remove('fa-bars')
    el.remove('fa-2x')
    el.add('fa-times')
    el.add('fa-sm')
    menu.style.display = 'flex'   
}
function switchCrossForBar(el) {
    el.remove('fa-times')
    el.remove('fa-sm')
    el.add('fa-bars')
    el.add('fa-2x')
    menu.style.display = 'none'
}
  
 

