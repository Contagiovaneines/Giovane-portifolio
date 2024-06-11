document.getElementById("hireMeBtn").addEventListener("click", function() {
    // Seu endereço de e-mail do Gmail
    var email = "giovaneinesdev@gmail.com";

    // Assunto e corpo do e-mail
    var subject = "Interesse em contratação";
    var body = "Alguém clicou em 'Hire Me' e está interessado em contratar você.";

    // Montar a URL do Gmail API para enviar o e-mail
    var url = "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(email) + "&su=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    // Abrir a URL em uma nova aba
    window.open(url, '_blank');

    // Se você quiser enviar o e-mail usando o Gmail API, precisará de um processo de autorização e autenticação.
    // Isso é mais complexo e exigirá mais código, incluindo uma chave de API e autenticação OAuth 2.0.

    // Exemplo:
    /*
    fetch('https://www.googleapis.com/gmail/v1/users/me/messages/send', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'raw': 'YOUR_ENCODED_EMAIL_MESSAGE'
        })
    }).then(response => {
        if (!response.ok) {
            throw new Error('Erro ao enviar e-mail');
        }
        console.log('E-mail enviado com sucesso!');
    }).catch(error => {
        console.error('Erro:', error);
    });
    */
});
