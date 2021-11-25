$(document).ready(function() {
    listar();
});

function listar() {
    $.ajax({
        url: "http://localhost:8081/api/Produccion/all",
        type: 'GET',
        dataType: 'json',
        success: function(respuesta) {
            console.log(respuesta);
            listarRespuesta(respuesta);
        },

        error: function(xhr, status) {
            $("#mensajes").html("Ocurrio un problema al ejecutar la petición..." + status);
        },

        complete: function(xhr, status) {
            $("#mensajes").html("Obteniendo listado de Produccion");
            $("#mensajes").hide(1000);
        }
    });
}

function listarRespuesta(items) {
    var tabla =`<table id="TablaDatos" class="order-table" style="width:100%">
                <thead>
                <tr>
                <th>Vehiculo</th>
                <th>Funcionario</th>
                <th>Servicio</th>
                <th>Fecha</th>
                <th>PrecioTotal</th>
                </tr>
                </thead>`;

    for (var i = 0; i < items.length; i++) {
        tabla += `
                <tr>
                <td>${items[i].vehiculo.type}</td>
                <td>${items[i].funcionario.name}</td>
                <td>${items[i].servicio.name}</td>
                <td>${items[i].fecha}</td>
                <td>${items[i].totalPrice}</td>
                </tr>
                `;
    }
    tabla += `</table>`;
    $("#TablaDatos").html(tabla);
}

