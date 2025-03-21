function caixaAlta(value){
    document.querySelectorAll(value).forEach(element => {
        let caixaAltagroup = element.textContent
        element.textContent = caixaAltagroup.toUpperCase()
    });
}

caixaAlta('header h1')

caixaAlta('main h2')

document.querySelector('.btn_objetivo').addEventListener('click', () => {
    document.querySelector('.objetivo').scrollIntoView({behavior: 'smooth'})
})

document.querySelector('.btn_profissional').addEventListener('click', () => {
    document.querySelector('.profissional').scrollIntoView({behavior: 'smooth'})
})

document.querySelector('.btn_academico').addEventListener('click', () => {
    document.querySelector('.academico').scrollIntoView({behavior: 'smooth'})
})

document.querySelector('.btn_certificacoes').addEventListener('click', () => {
    document.querySelector('.certificacoes').scrollIntoView({behavior: 'smooth'})
})

document.querySelector('.btn_softskills').addEventListener('click', () => {
    document.querySelector('.softskills').scrollIntoView({behavior: 'smooth'})
})

document.querySelector('.logo').addEventListener('click', () => {
    document.querySelector('header').scrollIntoView({behavior: 'smooth'})
})