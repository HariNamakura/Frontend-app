$(document).ready(function() {
    listaServicios();
});
function armaListaServicios(items) {
    var lista = ` <option selected="true" disabled value="">Selecciona un Servicio</option>`;
    for (var i = 0; i < items.length; i++) {
        lista += `<option value="${items[i].id}">${items[i].name}</option>`;
    }
    $("#servicio").html(lista);
}

function listaServicios() {
    $.ajax({
        url: "http://localhost:8081/api/Servicio/all",
        type: 'GET',
        dataType: 'json',

        success: function(respuesta) {
            armaListaServicios(respuesta);
        },

        error: function(xhr, status) {
            $("#mensajes").html("Ocurrio un problema al ejecutar la petición..." + status);
        },

        complete: function(xhr, status) {
            $("#mensajes").html("Obteniendo listado de servicios...");
            $("#mensajes").hide(1000);
        }
    });
}