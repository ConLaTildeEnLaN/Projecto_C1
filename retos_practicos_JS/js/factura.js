"use strict";
var num = 1;

function incluir() {
    var cliente = document.getElementById("cliente").value;
    var articulo = document.getElementById("articulo").value;
    var Precio = document.getElementById("Precio").value;
    var Cantidad = document.getElementById("Cantidad").value;
    var subtotal = 0;
    var iva = 0;
    var servicio = 0;
    var total = 0;

    if (cliente == "" || articulo == "" || Precio == "" || Cantidad == "") {
        Swal.fire({
            confirmButtonText: "Intenta de nuevo",
            confirmButtonColor: "#0063be",
            html: '<iframe width="320" height="240" src="https://lottie.host/embed/bf90ec24-bf68-41be-88e6-df5949ac4a17/UCUmHNHjLA.json"></iframe><br><p>' + 'Campos vacios. Intentar de nuevo por favor.' + " </p>",
        })
    } else {
        if (Cantidad > 0) {
            subtotal = Precio * Cantidad;
        }
        if (subtotal > 0){
            iva = subtotal * 0.13;
        }
        if (subtotal > 0){
            servicio = subtotal * 0.05;
        }
        if (subtotal > 0){
            total = servicio + iva + subtotal;
        }
        var datosTabla = "<td>" + num + "</td><td>" + cliente + "</td><td>" + articulo + "</td><td>" + Cantidad + "</td><td>" + "₡" + Precio + "</td><td>" + "₡" + subtotal + "<td>" + "₡"+ iva + "</td><td>" + "₡" + servicio + "</td><td>" + "₡" + total + "</td><td>";
        var agregar = document.createElement("tr");
        agregar.innerHTML = datosTabla;
        document.getElementById('tabla').appendChild(agregar);
        num++;
    };
    document.getElementById("cliente").value = "";
    document.getElementById("Precio").value = "";
    document.getElementById("articulo").value = "";
    document.getElementById("Cantidad").value = "";
    document.getElementById("Subtotal").value = "";
};



function Numeros(string){
    var out = '';
    var filtro = '1234567890';
    for (var i=0; i<string.length; i++)
       if (filtro.indexOf(string.charAt(i)) != -1) 
         out += string.charAt(i);
    return out;
} 


function limpiar() {
    num = 1;
    location.reload();
    document.getElementById("cliente").value = "";
    document.getElementById("Precio").value = "";
    document.getElementById("articulo").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("tabla").innerHTML = "";
}