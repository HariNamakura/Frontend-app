$(document).ready(function() {
    estadoInicial();
});


function buscarPrecio(){
    idServicio = $("#servicio").val(),
    idVehiculo = $("#vehiculo").val()
    
    $.ajax({
        url: "http://localhost:8081/api/Servicio/" + idServicio,
        type: 'GET',
        contentType: "application/JSON",
        dataType: 'json',
        
        success: function(respuesta) {
            if (idVehiculo == 1) {
                $("#price").val(respuesta.price);
            } else if (idVehiculo == 2) {
                $("#price").val(respuesta.price + ((respuesta.price * 10)/100));
            }
            $("#labelPrice").show();
            $("#price").show();
            $("#Registrar").show();
        },

        error: function(xhr, status) {
            $("#mensajes").html("Ocurrio un problema al ejecutar la petición..." + status);
        },

        complete: function(xhr, status) {
            $("#mensajes").html("Obteniendo Servicio...");
            $("#mensajes").hide(1000);
        }
    });
}


function registrar() {
       
    let datos = {
        funcionario: { "id": $("#funcionario").val() },
        servicio: { "id": $("#servicio").val() },
        vehiculo: { "id": $("#vehiculo").val() },
        fecha: $("#fecha").val(),
        totalPrice: $("#price").val()
    }


    let datosPeticion = JSON.stringify(datos);

  
        $.ajax({
            url: "http://localhost:8081/api/Produccion/save",
            data: datosPeticion,
            type: 'POST',

            contentType: "application/JSON",
            success: function(respuesta) {
                console.log(respuesta);
                $("#mensajes").show(1000);
                $("#mensajes").html("Registro ingresado...");
                $("#mensajes").hide(1000);

            },

            error: function(xhr, status) {
                $("#mensajes").show(1000);
                $("#mensajes").html("Error peticion POST..." + status);
            }
        });
}

function estadoInicial() {
    $("#labelPrice").hide();
    $("#price").hide();
    $("#Registrar").hide();
}

