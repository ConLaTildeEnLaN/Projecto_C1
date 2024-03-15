function show(){
    if (document.getElementById('radio1').checked){
        info1();
    }
    if (document.getElementById('radio2').checked){
        info2();
    }
    if (document.getElementById('radio3').checked){
        info3();
    }
var checkboxs = "";
if (document.form1.checkbox1.checked == true && document.form1.checkbox2.checked == true && document.form1.checkbox3.checked == true && document.form1.checkbox4.checked == true) {
    mensaje1 = "¡Gracias por confiar en mi trabajo! (aunque costo un monton)";
} else if (document.form1.checkbox1.checked == false && document.form1.checkbox2.checked == true && document.form1.checkbox3.checked == false && document.form1.checkbox4.checked == true)  {
    mensaje1 = "Este mensaje se muestra cuando presionas solo el checkox 2 y 4";
} else if (document.form1.checkbox1.checked == false && document.form1.checkbox2.checked == false && document.form1.checkbox3.checked == false && document.form1.checkbox4.checked == false) {
    mensaje1 = "Este mensaje se muestra cuando no presionas ningun checkbox";
}else if (document.form1.checkbox1.checked == true && document.form1.checkbox2.checked == false && document.form1.checkbox3.checked == true && document.form1.checkbox4.checked == false) {
    mensaje1 = "Este mensaje se muestra cuando presionas solo el checkox 1 y 3";
}
}

function contenido1(){
    let dato1 = document.querySelector('input[name="r4"][value="dato1"]');
    let conte1 = document.getElementById("content1");
    if (dato1.checked){
        conte1.style.display = "block";
    }
}



document.getElementById("ans0").innerHTML = "¡Gracias por sus respuestas!";
document.getElementById("ans1").innerHTML = mensaje1
document.getElementById("ans2").innerHTML = mensaje1
document.getElementById("ans3").innerHTML = mensaje1
document.getElementById("ans4").innerHTML = mensaje1
