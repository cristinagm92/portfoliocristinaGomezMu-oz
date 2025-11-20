document.addEventListener("DOMContentLoaded", () => {
  // Formulario (por si aún lo tienes en alguna parte)
  const form = document.getElementById("formulario-contacto");
  const mensaje = document.getElementById("mensaje-exito");

  if (form && mensaje) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      mensaje.style.display = "block";
      form.reset();
      setTimeout(() => {
        mensaje.style.display = "none";
      }, 5000);
    });
  }

  // Iconos de contacto
  const emailIcon = document.getElementById("email-icon");
  const telefonoIcon = document.getElementById("telefono-icon");
if (emailIcon) {
  emailIcon.addEventListener("click", () => {
    document.getElementById("email-dato").innerHTML =
      '<a href="mailto:christty_92@hotmail.com">christty_92@hotmail.com</a>';
  });
}


if (telefonoIcon) {
  telefonoIcon.addEventListener("click", () => {
    document.getElementById("telefono-dato").innerHTML = 
      '<a href="tel:662357450">662357450</a>';
  });
}

});