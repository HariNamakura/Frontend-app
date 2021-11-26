
// FUNCION DE FILTRO POR FECHA 
var minDate, maxDate; 
// Funcion custom de filtro que busca en cada columna(Si va a modificar donde va a quedar la fecha modifique el "data[3]")
$.fn.dataTable.ext.search.push(
    function( settings, data, dataIndex ) {
        var min = minDate.val();
        var max = maxDate.val();
        var date = new Date( data[4] );
 
        if (
            ( min === null && max === null ) ||
            ( min === null && date <= max ) ||
            ( min <= date   && max === null ) ||
            ( min <= date   && date <= max )
        ) {
            return true;
        }
        return false;
    }
);
 
$(document).ready(function() {
    // Crea los inputs de fecha maxima y minima
    minDate = new DateTime($('#min'), {
        format: 'YYYY-MM-DD'
    });
    maxDate = new DateTime($('#max'), {
        format: 'YYYY-MM-DD'
    });
 
    // Inicializa datatables(Se hace referencia al id de la tabla)
    var table = $('#TablaDatos').DataTable();
 
    // Muestra la tabla filtrada
    $('#min, #max').on('change', function () {
        table.draw();
    });
});

//FUNCION DE FILTRO FUNCIONARIO SERVICIO
(function(document) {
    "use strict";

    var LightTableFilter = (function(Arr) {

        var _input;
    var _select;

        function _onInputEvent(e) {
            _input = e.target;
            var tables = document.getElementsByClassName(_input.getAttribute("data-table"));
            Arr.forEach.call(tables, function(table) {
                Arr.forEach.call(table.tBodies, function(tbody) {
                    Arr.forEach.call(tbody.rows, _filter);
                });
            });
        }
    
        function _onSelectEvent(e) {
            _select = e.target;
            var tables = document.getElementsByClassName(_select.getAttribute("data-table"));
            Arr.forEach.call(tables, function(table) {
                Arr.forEach.call(table.tBodies, function(tbody) {
                    Arr.forEach.call(tbody.rows, _filterSelect);
                });
            });
        }

        function _filter(row) {
      
            var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();
            row.style.display = text.indexOf(val) === -1 ? "none" : "table-row";

        }
    
        function _filterSelect(row) {
     
            var text_select = row.textContent.toLowerCase(), val_select = _select.options[_select.selectedIndex].value.toLowerCase();
            row.style.display = text_select.indexOf(val_select) === -1 ? "none" : "table-row";

        }

        return {
            init: function() {
                var inputs = document.getElementsByClassName("light-table-filter");
                var selects = document.getElementsByClassName("select-table-filter");
                Arr.forEach.call(inputs, function(input) {
                    input.oninput = _onInputEvent;
                });
                Arr.forEach.call(selects, function(select) {
         select.onchange  = _onSelectEvent;
                });
            }
        };
    })(Array.prototype);

    document.addEventListener("readystatechange", function() {
        if (document.readyState === "complete") {
            LightTableFilter.init();
        }
});
})(document);
