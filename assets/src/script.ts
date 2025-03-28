let apertouMenu = true;
let recarregadoElement = true;
const c = (selector: string) => document.querySelector(selector);
const objetivoElement = c('.objetivo') as HTMLDivElement
const profissionalElement = c('.profissional') as HTMLDivElement
const academicoElement = c('.academico') as HTMLDivElement
const certificacoesElement = c('.certificacoes') as HTMLDivElement
const softskillsElement = c('.softskills') as HTMLDivElement
const btnMenuMobileElement = c(".btn_menuMobile") as HTMLDivElement
const asideMenuMobile = c("aside .menuMobile") as HTMLDivElement
const logoElement = c('.logo') as HTMLImageElement
const headerElement = c('header') as HTMLDivElement

function newlayout2(): void {
    if (window.innerWidth < 750) {
        objetivoElement.innerHTML =
            `
            <h2>Objetivo</h2>
            <div>Em busca de oportunidade como Desenvolvedor de Softwares ou na área de Tecnologia da Informação.</div>
        `;
        profissionalElement.innerHTML =
        `
            <h2>Histórico Profissional</h2>
            <div style="margin-bottom: 25px">
                <div>08/2022 - 07/2023</div>
                <div>Coordenador Censitário de Subárea<br>IBGE – São João, PE</div>
            </div>
            <div style="margin-bottom: 25px">
                <div>02/2014 - 01/2015</div>
                <div>Aprendiz de Eletricista Industrial<br>CONEST/RNEST – Cabo de Santo Agostinho, PE</div>
            </div>
        `;
        academicoElement.innerHTML =
        `
            <h2>Formação Acadêmica</h2>
            <div style="margin-bottom: 25px">
                <div><strong>Graduação Tecnológica em Análise e Desenvolvimento de Sistemas</strong><br>Centro Universitário Estácio de Ribeirão Preto – Ribeirão Preto, SP</div>
                <div>Concluído em Abril/2024</div>
            </div>
            <div style="margin-bottom: 30px">
                            
                <div><strong>Ensino Médio Completo</strong><br>Escola Estadual Madre Iva Bezerra de Araújo – Cabo de Santo Agostinho, PE</div>
                <div>Concluído em <br>Dezembro/2010</div>
            </div>
        `;
        certificacoesElement.innerHTML =
        `
            <h2>Certificações</h2>
            <ul>
                <li><a href="https://alunos.b7web.com.br/media/certificates/certificado_8456645.jpg" target="_blank">HTML5 e CSS3 | B7WEB<br>92 horas | 2025</a></li>
                <li><a href="https://alunos.b7web.com.br/media/certificates/certificado_3117813.jpg" target="_blank">JavaScript | B7WEB<br>66 horas | 2025</a></li>
                <li><a href="https://www.dio.me/certificate/F577873D/share" target="_blank">Lógica de Programação Essencial | DIO<br>4 horas | 2021</a></li>
                <li><a href="https://alunos.b7web.com.br/media/certificates/certificado_3017556.jpg" target="_blank">Git/Github | B7WEB<br>20 horas | 2025</a></li>
            </ul>
        `;
        softskillsElement.innerHTML =
        `
            <h2>Habilidades e Competências</h2>
            <ul>
                <li>Facilidade para aprendizagem de novas tecnologias.</li>
                <li>Domínio de versionamento de código com Git e Github</li>
                <li>Conhecimento em lógica de programação.</li>
                <li>Capacidade para trabalhar em equipe.</li>
            </ul>
        `
        recarregadoElement = false
    } else {
        if (!recarregadoElement) {
            recarregadoElement = true;
            location.reload();
        }
    }
}

function whatsApp2():void {
    window.open('https://wa.me/5587991081827','_blank');
};

document.querySelectorAll('.btn_objetivo').forEach((e) => e.addEventListener('click', () => {
    if (objetivoElement) {
        objetivoElement.scrollIntoView({ behavior: 'smooth' });
    }
})
)

document.querySelectorAll('.btn_profissional').forEach((e) => e.addEventListener('click', () => {
    if (profissionalElement) {
        profissionalElement.scrollIntoView({ behavior: 'smooth' });
    }
})
)

document.querySelectorAll('.btn_academico').forEach((e) => e.addEventListener('click', () => {
    if (academicoElement) {
        academicoElement.scrollIntoView({ behavior: 'smooth' })
    }
})
)

document.querySelectorAll('.btn_certificacoes').forEach((e) => e.addEventListener('click', () => {
    if (certificacoesElement) {
        certificacoesElement.scrollIntoView({ behavior: 'smooth' })
    }
})
)

document.querySelectorAll('.btn_softskills').forEach((e) => e.addEventListener('click', () => {
    if (softskillsElement) {
        softskillsElement.scrollIntoView({ behavior: 'smooth' })
    }
})
)

logoElement.addEventListener('click', () => {
    headerElement.scrollIntoView({ behavior: 'smooth' })
})

btnMenuMobileElement.addEventListener('click', function novo(e) {
    if (apertouMenu) {

        btnMenuMobileElement.style = 'rotate: 90deg'

        asideMenuMobile.style = 'right: 0vw'

        setInterval(() => apertouMenu = false, 100)
    }

    if (apertouMenu === false) {

        btnMenuMobileElement.style = 'rotate: 0deg'

        asideMenuMobile.style = 'right: -100%'

        setInterval(() => apertouMenu = true, 100)
    }
})

newlayout2()

window.addEventListener('resize', newlayout2)