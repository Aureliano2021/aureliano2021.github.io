let apertou = true
let recarregado = true;

function newlayout(){
    if(window.innerWidth < 750){
        document.querySelector('.objetivo').innerHTML = 
        `
            <h2>Objetivo</h2>
            <div>Em busca de oportunidade como Desenvolvedor de Softwares ou na área de Tecnologia da Informação.</div>
        `
    
        document.querySelector('.profissional').innerHTML = 
        `
            <h2>Histórico Profissional</h2>
                    <div style="margin-bottom: 25px">
                        <div>08/2022 - 07/2023</div>
                        <div>Coordenador Censitário de Subárea<br>
                            IBGE – São João, PE</div>
                    </div>
                    <div style="margin-bottom: 25px">
                        <div>02/2014 - 01/2015</div>
                        <div>Aprendiz de Eletricista Industrial<br>
                            CONEST/RNEST – Cabo de Santo Agostinho, PE</div>
                    </div>
        `
        document.querySelector('.academico').innerHTML = 
        `
            <h2>Formação Acadêmica</h2>
                    <div style="margin-bottom: 25px">
                        
                        <div><strong>Graduação Tecnológica em Análise e Desenvolvimento de Sistemas</strong><br>
                        Centro Universitário Estácio de Ribeirão Preto – Ribeirão Preto, SP</div>
                        <div>Concluído em Abril/2024</div>
                    </div>
                    <div style="margin-bottom: 30px">
                        
                        <div><strong>Ensino Médio Completo</strong><br>Escola Estadual Madre Iva Bezerra de Araújo – Cabo de Santo Agostinho, PE</div>
                        <div>Concluído em <br>Dezembro/2010</div>
                    </div>
        `
    
        document.querySelector('.certificacoes').innerHTML = 
        `
            <h2>Certificações</h2>
                    <ul>
                        <li><a href="https://alunos.b7web.com.br/media/certificates/certificado_8456645.jpg" target="_blank">HTML5 e CSS3 | B7WEB<br>92 horas | 2025</a></li>
                        <li><a href="https://alunos.b7web.com.br/media/certificates/certificado_3117813.jpg" target="_blank">JavaScript | B7WEB<br>66 horas | 2025</a></li>
                        <li><a href="https://www.dio.me/certificate/F577873D/share" target="_blank">Lógica de Programação Essencial | DIO<br>4 horas | 2021</a></li>
                        <li><a href="https://alunos.b7web.com.br/media/certificates/certificado_3017556.jpg" target="_blank">Git/Github | B7WEB<br>20 horas | 2025</a></li>
                    </ul>
        `
        document.querySelector('.softskills').innerHTML = 
        `
            <h2>Habilidades e Competências</h2>
                    <ul>
                        <li>Facilidade para aprendizagem de novas tecnologias.</li>
                        <li>Domínio de versionamento de código com Git e Github</li>
                        <li>Conhecimento em lógica de programação.</li>
                        <li>Capacidade para trabalhar em equipe.</li>
                    </ul>
        `
        recarregado = false
    } else{
        if (!recarregado) {
            recarregado = true;
            location.reload(); 
        }
    }
}

function whatsApp(){
    window.open('https://wa.me/5587991081827','_blank')
}

document.querySelectorAll('.btn_objetivo').forEach((e) => e.addEventListener('click', () => {
    document.querySelector('.objetivo').scrollIntoView({behavior: 'smooth'})
    })
)

document.querySelectorAll('.btn_profissional').forEach((e) => e.addEventListener('click', () => {
    document.querySelector('.profissional').scrollIntoView({behavior: 'smooth'})
    })
)

document.querySelectorAll('.btn_academico').forEach((e) => e.addEventListener('click', () => {
    document.querySelector('.academico').scrollIntoView({behavior: 'smooth'})
    })
)

document.querySelectorAll('.btn_certificacoes').forEach((e) => e.addEventListener('click', () => {
    document.querySelector('.certificacoes').scrollIntoView({behavior: 'smooth'})
    })
)

document.querySelectorAll('.btn_softskills').forEach((e) => e.addEventListener('click', () => {
    document.querySelector('.softskills').scrollIntoView({behavior: 'smooth'})
    })
)

document.querySelector('.logo').addEventListener('click', () => {
    document.querySelector('header').scrollIntoView({behavior: 'smooth'})
})

document.querySelector(".btn_menuMobile").addEventListener('click',function novo(e){
    if(apertou){
    
        document.querySelector(".btn_menuMobile").style = 'rotate: 90deg'
        
        document.querySelector("aside .menuMobile").style = 'right: 0vw'

        setInterval(() => apertou = false, 100)
    }

    if(apertou === false){
    
        document.querySelector(".btn_menuMobile").style = 'rotate: 0deg'

        document.querySelector("aside .menuMobile").style = 'right: -100%'
        
        setInterval(() =>apertou = true, 100)
    }
})

newlayout()

window.addEventListener('resize', newlayout)