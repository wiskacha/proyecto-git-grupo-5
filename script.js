document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".encabezado");

    if (header) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        });
    }


    const formulario = document.getElementById("formulario");
    const respuesta = document.getElementById("respuesta");

    if (formulario) {
        formulario.addEventListener("submit", function (event) {
            event.preventDefault(); 

            const nombre = document.getElementById("nombre").value.trim();
            const correo = document.getElementById("correo").value.trim();
            const mensaje = document.getElementById("mensaje").value.trim();

            if (nombre === "" || correo === "" || mensaje === "") {
                respuesta.style.color = "#d9534f";
                respuesta.textContent = "Por favor, completa todos los campos.";
                return;
            }

            respuesta.style.color = "#2e7d5b";
            respuesta.style.fontWeight = "bold";
            respuesta.style.marginTop = "15px";
            respuesta.textContent = `¡Gracias, ${nombre}! Tu mensaje ha sido enviado correctamente. Responderemos lo antes posible a ${correo}.`;

            formulario.reset();

            setTimeout(() => {
                respuesta.textContent = "";
            }, 6000);
        });
    }

});