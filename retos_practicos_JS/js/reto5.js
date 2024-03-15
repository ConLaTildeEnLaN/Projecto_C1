window.onload = function (){
    document.getElementById("modelo").onchange = function(e){
        a = e.target.value;
        if (a == "911 Carrera"){
            var imagen = "imagenes/911.webp";
        } else if (a == "911 Carrera Cabriolet"){
            var imagen = "imagenes/911CarreraCabriolet.webp";
        } else if (a == "911 Targa 4"){
            var imagen = "imagenes/911Targa4.webp";
        }else if (a == "911 Turbo"){
            var imagen = "imagenes/911Turbo.webp";
        }else if (a == "911 GT3"){
            var imagen = "imagenes/911GT3.webp";
        }else if (a == "911 Dakar"){
            var imagen = "imagenes/911Dakar.webp";
        }else if (a == "911 GT3 RS"){
            var imagen = "imagenes/911GT3RS.webp";
        }
        document.getElementById("imagen").src = imagen;
    }
    document.getElementById("version").onchange = function(es){
        n = es.target.value;
    }
}

function calcular(){
    var montoCouta = 0;
    switch (a) {
        case "911 Carrera":
            if (n == "911 Carrera") montoCouta = 116050;
            break;
            case "911 Carrera Cabriolet":
                if (n == "911 Carrera Cabriolet") montoCouta = 128850;
                break;
                case "911 Targa 4":
                    if (n == "911 Targa 4") montoCouta = 136150;
                    break;
                    case "911 Turbo":
                        if (n == "911 Turbo") montoCouta = 199850;
                        break;
                        case "911 GT3":
                            if (n == "911 GT3") montoCouta = 185850;
                            break;
                            case "911 Dakar":
                                if (n == "911 Dakar") montoCouta = 223650;
                                break;
                                case "911 GT3 RS":
                                if (n == "911 GT3 RS") montoCouta = 244650;
                                break;
        default:
            break;
    }

    swal.fire({
        html: "<br><br> <strong>Cuota mensual: </strong></p>" +
        "$" +
        montoCouta,
    });
}