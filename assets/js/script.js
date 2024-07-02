// Espera até que o DOM esteja completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Variáveis globais
    var email = "giovaneinesdev@gmail.com";
    var subject = "Interesse em contratação";
    var body = "Alguém clicou em 'Hire Me' e está interessado em contratar você.";

    // Função para enviar e-mail
    function sendEmail() {
        var url = "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(email) + "&su=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
        window.open(url, '_blank');
    }

    // Função para carregar a fonte Poppins via JavaScript
    function loadPoppinsFont() {
        const fontLink = document.createElement('link');
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';
        fontLink.rel = 'stylesheet';
        document.head.appendChild(fontLink);

        // Após carregar a fonte, chama a função para aplicar os estilos
        fontLink.onload = function() {
            applyStyles();
        };
    }

    // Função para aplicar estilos após carregar a fonte
    function applyStyles() {
        const root = document.documentElement;

        // Define as variáveis de cores
        root.style.setProperty('--bg-color', '#000000');
        root.style.setProperty('--second-bg-color', '#161616');
        root.style.setProperty('--text-color', '#fff');
        root.style.setProperty('--main-color', '#f8d300');

        // Aplica a fonte Poppins
        document.body.style.fontFamily = 'Poppins, sans-serif';
    }

    // Carrega a fonte e aplica os estilos ao carregar a página
    loadPoppinsFont();

    // Event listener para o botão 'hireMeBtn'
    var hireMeBtn = document.getElementById("hireMeBtn");
    if (hireMeBtn) {
        hireMeBtn.addEventListener("click", function() {
            sendEmail();
        });
    } else {
        console.error("Elemento hireMeBtn não encontrado.");
    }

    // Outras funcionalidades e eventos
    // Exemplo: manipulação de formulários, animações, etc.
});
