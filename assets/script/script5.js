"use strict";
let apertou = true;
let recarregado = true;
let c = (element) => { return document.querySelector(element); };
let objetivoElement = c('.objetivo');
let profissionalElement = c('.profissional');
let academicoElement = c('.academico');
let certificacoesElement = c('.certificacoes');
let softskillsElement = c('.softskills');
let logElement = c('.logo');
let headerElement = c('header');
let btnMenuMobileEl = c('.btn_menuMobile');
let menuMobileEl = c('aside .menuMobile');
function newlayout() {
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
                        <div>Coordenador Censitário de Subárea<br>
                            IBGE – São João, PE
                        </div>
                    </div>
                    <div style="margin-bottom: 25px">
                        <div>02/2014 - 01/2015</div>
                        <div>Aprendiz de Eletricista Industrial<br>
                            CONEST/RNEST – Cabo de Santo Agostinho, PE</div>
                    </div>
        `;
        academicoElement.innerHTML =
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
        `;
        certificacoesElement.innerHTML =
            `
            <h2>Certificações</h2>
                    <ul>
                        <li><a href="https://alunos.b7web.com.br/media/certificates/certificado_8456645.jpg" target="_blank">HTML5 e CSS3 | B7WEB<br>92 horas | 2025</a></li>
                        <li><a href="https://alunos.b7web.com.br/media/certificates/certificado_3117813.jpg" target="_blank">JavaScript | B7WEB<br>66 horas | 2025</a></li>
                        <li><a href="https://www.dio.me/certificate/F577873D/share" target="_blank">Lógica de Programação Essencial | DIO<br>4 horas | 2021</a></li>
                        <li><a href="https://alunos.b7web.com.br/media/certificates/certificado_3017556.jpg" target="_blank">Git/Github | B7WEB<br>20 horas | 2025</a></li>
                        <li><a href="https://alunos.b7web.com.br/media/certificates/certificado_4529779.jpg" target="_blank">TypeScript | B7WEB<br>20 horas | 2025</a></li>
                        <li><a href="https://alunos.b7web.com.br/media/certificates/certificado_4674208.jpg" target="_blank">TailwindCSS | B7WEB<br>20 horas | 2025</a></li>
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
        `;
        recarregado = false;
    }
    else {
        if (!recarregado) {
            recarregado = true;
            location.reload();
        }
    }
}
function whatsApp() {
    const mensagem = "Olá, vi seu currículo e gostaria de discutir uma possível oportunidade de emprego.";
    const url = `https://wa.me/5587991081827?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}
document.querySelectorAll('.btn_objetivo').forEach((e) => e.addEventListener('click', () => {
    objetivoElement.scrollIntoView({ behavior: 'smooth' });
}));
document.querySelectorAll('.btn_profissional').forEach((e) => e.addEventListener('click', () => {
    profissionalElement.scrollIntoView({ behavior: 'smooth' });
}));
document.querySelectorAll('.btn_academico').forEach((e) => e.addEventListener('click', () => {
    academicoElement.scrollIntoView({ behavior: 'smooth' });
}));
document.querySelectorAll('.btn_certificacoes').forEach((e) => e.addEventListener('click', () => {
    certificacoesElement.scrollIntoView({ behavior: 'smooth' });
}));
document.querySelectorAll('.btn_softskills').forEach((e) => e.addEventListener('click', () => {
    softskillsElement.scrollIntoView({ behavior: 'smooth' });
}));
logElement.addEventListener('click', () => {
    headerElement.scrollIntoView({ behavior: 'smooth' });
});
btnMenuMobileEl.addEventListener('click', function novo() {
    if (apertou) {
        btnMenuMobileEl.style = 'rotate: 90deg';
        menuMobileEl.style = 'right: 0vw';
        setInterval(() => apertou = false, 100);
    }
    if (apertou === false) {
        btnMenuMobileEl.style = 'rotate: 0deg';
        menuMobileEl.style = 'right: -100%';
        setInterval(() => apertou = true, 100);
    }
});
newlayout();
window.addEventListener('resize', newlayout);
