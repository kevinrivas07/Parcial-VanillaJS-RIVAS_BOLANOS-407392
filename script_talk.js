(function() {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
    script.onload = function() {
        emailjs.init('fgmeW1X4Z4FQgGRk-');  // Asegúrate de que esta sea tu clave pública
        setupForm();
    };
    document.head.appendChild(script);
})();

function setupForm() {
    const form = document.getElementById('contact-form');
    const statusMessage = document.getElementById('status-message');

    if (!form) {
        console.error('Formulario con id="contact-form" no encontrado.');
        return;
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const message = document.getElementById('message').value;

        // Verifica que el mensaje no esté vacío
        if (!message.trim()) {
            statusMessage.textContent = 'Por favor, ingresa un mensaje.';
            return;
        }

        const templateParams = {
            message: message, 
        };

        const submitButton = form.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        submitButton.textContent = 'Enviando...';

        emailjs.send('service_ta31qps', 'template_gxsuzvw', templateParams)
            .then(function(response) {
                statusMessage.textContent = 'Mensaje enviado correctamente.';
                form.reset();
            }, function(error) {
                statusMessage.textContent = 'Error al enviar el mensaje.';
                console.error('Error:', error);
            })
            .finally(function() {
                submitButton.disabled = false;
                submitButton.textContent = 'Enviar';
            });
    });
}
