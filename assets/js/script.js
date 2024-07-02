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
