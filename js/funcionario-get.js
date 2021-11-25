$(document).ready(function() {
    listaFuncionarios();
});
function armaListaFuncionarios(items) {
    var lista = ` <option selected="true" disabled value="">Selecciona un Funcionario</option>`;
    for (var i = 0; i < items.length; i++) {
        lista += `<option value="${items[i].id}">${items[i].name}</option>`;
    }
    $("#funcionario").html(lista);
}

function listaFuncionarios() {
    $.ajax({
        url: "http://localhost:8081/api/Funcionario/all",
        type: 'GET',
        dataType: 'json',

        success: function(respuesta) {
            armaListaFuncionarios(respuesta);
        },

        error: function(xhr, status) {
            $("#mensajes").html("Ocurrio un problema al ejecutar la petición..." + status);
        },

        complete: function(xhr, status) {
            $("#mensajes").html("Obteniendo listado de Funcionarios...");
            $("#mensajes").hide(1000);
        }
    });
}