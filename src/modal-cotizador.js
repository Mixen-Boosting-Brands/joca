var modalCotizador = document.getElementById('modal-cotizador');

modalCotizador.addEventListener('show.bs.modal', function (event) {
    // Button that triggered the modal
    var button = event.relatedTarget;
    // Extract info from data-bs-* attributes
    var recipient = button.getAttribute('data-bs-producto');
    // If necessary, you could initiate an AJAX request here
    // and then do the updating in a callback.
    //
    // Update the modal's content.
    var modalSelect = modalCotizador.querySelector('.modal-title');
    var modalBodyInput = modalCotizador.querySelector('.modal-body input');

    modalTitle.textContent = 'New message to ' + recipient;
    modalBodyInput.value = recipient;
});