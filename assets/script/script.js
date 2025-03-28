var apertouMenu = true;
var recarregadoElement = true;
var c = function (selector) { return document.querySelector(selector); };
var objetivoElement = c('.objetivo');
var profissionalElement = c('.profissional');
var academicoElement = c('.academico');
var certificacoesElement = c('.certificacoes');
var softskillsElement = c('.softskills');
var btnMenuMobileElement = c(".btn_menuMobile");
var asideMenuMobile = c("aside .menuMobile");
var logoElement = c('.logo');
var headerElement = c('header');
function newlayout2() {
    if (window.innerWidth < 750) {
        objetivoElement.innerHTML =
            "\n            <h2>Objetivo</h2>\n            <div>Em busca de oportunidade como Desenvolvedor de Softwares ou na \u00E1rea de Tecnologia da Informa\u00E7\u00E3o.</div>\n        ";
        profissionalElement.innerHTML =
            "\n            <h2>Hist\u00F3rico Profissional</h2>\n            <div style=\"margin-bottom: 25px\">\n                <div>08/2022 - 07/2023</div>\n                <div>Coordenador Censit\u00E1rio de Sub\u00E1rea<br>IBGE \u2013 S\u00E3o Jo\u00E3o, PE</div>\n            </div>\n            <div style=\"margin-bottom: 25px\">\n                <div>02/2014 - 01/2015</div>\n                <div>Aprendiz de Eletricista Industrial<br>CONEST/RNEST \u2013 Cabo de Santo Agostinho, PE</div>\n            </div>\n        ";
        academicoElement.innerHTML =
            "\n            <h2>Forma\u00E7\u00E3o Acad\u00EAmica</h2>\n            <div style=\"margin-bottom: 25px\">\n                <div><strong>Gradua\u00E7\u00E3o Tecnol\u00F3gica em An\u00E1lise e Desenvolvimento de Sistemas</strong><br>Centro Universit\u00E1rio Est\u00E1cio de Ribeir\u00E3o Preto \u2013 Ribeir\u00E3o Preto, SP</div>\n                <div>Conclu\u00EDdo em Abril/2024</div>\n            </div>\n            <div style=\"margin-bottom: 30px\">\n                            \n                <div><strong>Ensino M\u00E9dio Completo</strong><br>Escola Estadual Madre Iva Bezerra de Ara\u00FAjo \u2013 Cabo de Santo Agostinho, PE</div>\n                <div>Conclu\u00EDdo em <br>Dezembro/2010</div>\n            </div>\n        ";
        certificacoesElement.innerHTML =
            "\n            <h2>Certifica\u00E7\u00F5es</h2>\n            <ul>\n                <li><a href=\"https://alunos.b7web.com.br/media/certificates/certificado_8456645.jpg\" target=\"_blank\">HTML5 e CSS3 | B7WEB<br>92 horas | 2025</a></li>\n                <li><a href=\"https://alunos.b7web.com.br/media/certificates/certificado_3117813.jpg\" target=\"_blank\">JavaScript | B7WEB<br>66 horas | 2025</a></li>\n                <li><a href=\"https://www.dio.me/certificate/F577873D/share\" target=\"_blank\">L\u00F3gica de Programa\u00E7\u00E3o Essencial | DIO<br>4 horas | 2021</a></li>\n                <li><a href=\"https://alunos.b7web.com.br/media/certificates/certificado_3017556.jpg\" target=\"_blank\">Git/Github | B7WEB<br>20 horas | 2025</a></li>\n            </ul>\n        ";
        softskillsElement.innerHTML =
            "\n            <h2>Habilidades e Compet\u00EAncias</h2>\n            <ul>\n                <li>Facilidade para aprendizagem de novas tecnologias.</li>\n                <li>Dom\u00EDnio de versionamento de c\u00F3digo com Git e Github</li>\n                <li>Conhecimento em l\u00F3gica de programa\u00E7\u00E3o.</li>\n                <li>Capacidade para trabalhar em equipe.</li>\n            </ul>\n        ";
        recarregadoElement = false;
    }
    else {
        if (!recarregadoElement) {
            recarregadoElement = true;
            location.reload();
        }
    }
}
function whatsApp2() {
    window.open('https://wa.me/5587991081827', '_blank');
}
;
document.querySelectorAll('.btn_objetivo').forEach(function (e) { return e.addEventListener('click', function () {
    if (objetivoElement) {
        objetivoElement.scrollIntoView({ behavior: 'smooth' });
    }
}); });
document.querySelectorAll('.btn_profissional').forEach(function (e) { return e.addEventListener('click', function () {
    if (profissionalElement) {
        profissionalElement.scrollIntoView({ behavior: 'smooth' });
    }
}); });
document.querySelectorAll('.btn_academico').forEach(function (e) { return e.addEventListener('click', function () {
    if (academicoElement) {
        academicoElement.scrollIntoView({ behavior: 'smooth' });
    }
}); });
document.querySelectorAll('.btn_certificacoes').forEach(function (e) { return e.addEventListener('click', function () {
    if (certificacoesElement) {
        certificacoesElement.scrollIntoView({ behavior: 'smooth' });
    }
}); });
document.querySelectorAll('.btn_softskills').forEach(function (e) { return e.addEventListener('click', function () {
    if (softskillsElement) {
        softskillsElement.scrollIntoView({ behavior: 'smooth' });
    }
}); });
logoElement.addEventListener('click', function () {
    headerElement.scrollIntoView({ behavior: 'smooth' });
});
btnMenuMobileElement.addEventListener('click', function novo(e) {
    if (apertouMenu) {
        btnMenuMobileElement.style = 'rotate: 90deg';
        asideMenuMobile.style = 'right: 0vw';
        setInterval(function () { return apertouMenu = false; }, 100);
    }
    if (apertouMenu === false) {
        btnMenuMobileElement.style = 'rotate: 0deg';
        asideMenuMobile.style = 'right: -100%';
        setInterval(function () { return apertouMenu = true; }, 100);
    }
});
newlayout2();
window.addEventListener('resize', newlayout2);