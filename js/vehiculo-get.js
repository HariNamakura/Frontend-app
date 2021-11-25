$(document).ready(function() {
    listaVehiculos();
});
function armaListaVehiculos(items) {
    var lista = ` <option selected="true" disabled value="">Selecciona un Vehiculo</option>`;
    for (var i = 0; i < items.length; i++) {
        lista += `<option value="${items[i].id}">${items[i].type}</option>`;
    }
    $("#vehiculo").html(lista);
}

function listaVehiculos() {
    $.ajax({
        url: "http://localhost:8081/api/Vehiculo/all",
        type: 'GET',
        dataType: 'json',

        success: function(respuesta) {
            armaListaVehiculos(respuesta);
        },

        error: function(xhr, status) {
            $("#mensajes").html("Ocurrio un problema al ejecutar la petición..." + status);
        },

        complete: function(xhr, status) {
            $("#mensajes").html("Obteniendo listado de Vehiculos...");
            $("#mensajes").hide(1000);
        }
    });
}