


  // JavaScript para alternar el modo oscuro
  const cambio = document.getElementById('cambio-oscuro');
  const body = document.body;

  cambio.addEventListener('click', () => {
      body.classList.toggle('dark-mode'); // Alternar la clase 'dark-mode'
      // Cambiar el texto del botón
      toggleButton.textContent = body.classList.contains('dark-mode') ? ' Modo claro' : ' Modo Oscuro';
  });



  //javascript muestra parrafo

  document.getElementById('toggle-btn').addEventListener('click', function() {
    var description = document.getElementById('description-text');
    if (description.style.display === 'none') {
        description.style.display = 'block';
    } else {
        description.style.display = 'none';
    }
});



// swetalert
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar el botón de envío
    const button = document.querySelector('.swal-submit');
  
    button.addEventListener('click', function(event) {
      event.preventDefault(); // Evitar el envío del formulario
  
      // Obtener los valores de los campos
      const nombre = document.getElementById('nombre').value;
      const email = document.getElementById('email').value;
      const mensaje = document.getElementById('mensaje').value;
  
      // Verificar si los campos están completos
      if (nombre && email && mensaje) {
        // Mostrar la alerta de SweetAlert
        Swal.fire({
          title: "Formulario enviado",
          text: "¡Gracias por tu mensaje!",
          icon: "success",
          confirmButtonText: "OK"
        })
      } else {
        // Mostrar una alerta si faltan campos
        Swal.fire({
          title: "Error",
          text: "Por favor, completa todos los campos.",
          icon: "error",
          confirmButtonText: "OK"
        });
      }
    });
  });
