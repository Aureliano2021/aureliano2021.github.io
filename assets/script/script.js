function caixaAlta(value){
    document.querySelectorAll(value).forEach(element => {
        let caixaAltagroup = element.textContent
        element.textContent = caixaAltagroup.toUpperCase()
    });
}

caixaAlta('header h1')

caixaAlta('main h2')
