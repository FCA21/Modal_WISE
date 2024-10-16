document.addEventListener("DOMContentLoaded", function() {
    const openModalBtn = document.getElementById("openModalBtn");
    const closeModalBtn = document.getElementById("closeModal");
    const cancelBtn = document.getElementById("cancelBtn");
    const acceptBtn = document.getElementById("acceptBtn");
    const modal = document.getElementById("modal");
    const blurBackground = document.getElementById("blur-background");

    // Función que abre modal y muestra el fondo borroso
    function openModal() {
        modal.style.display = "block";
        blurBackground.style.display = "block";
    }

    // Función para cerrar el modal y ocultar el fondo borroso
    function closeModal() {
        modal.style.display = "none";
        blurBackground.style.display = "none";
    }

    // Mostramos el modal al hacer clic en el botón guardar
    openModalBtn.addEventListener("click", openModal);

    // cerramos el modal al hacer clic en la "X" o en el botón de cancelar
    closeModalBtn.addEventListener("click", closeModal);
    cancelBtn.addEventListener("click", closeModal);

    // cerramos modal si se hace clic fuera del modal
    window.addEventListener("click", function(event) {
        if (event.target === blurBackground) {
            closeModal();
        }
    });

    // Acción sin funcionalidad para el botón aceptar (solo clickeable)
    acceptBtn.addEventListener("click", function() {
        console.log("Botón de aceptar clickeado");
    });
});
