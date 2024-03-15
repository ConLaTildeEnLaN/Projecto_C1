function info1() {
    Swal.fire({
        title: 'Info #1',
        showConfirmButton: false,
        html: '<iframe width="320" height="240" src="https://lottie.host/embed/73b38bb2-617f-4f40-9bd5-b8875381cccf/7yWANscWcu.json"></iframe>',
        timer: 2000,
    })
}



function info2() {
    Swal.fire({
        title: 'Info #2',
        showConfirmButton: false,
        html: '<iframe width="320" height="240" src="https://lottie.host/embed/73b38bb2-617f-4f40-9bd5-b8875381cccf/7yWANscWcu.json"></iframe><br><br><p>Espera un momento</p>',
        timer: 2000,
    })
}



function info3() {
    Swal.fire({
        title: 'Info #3',
        showConfirmButton: false,
        html: '<iframe width="320" height="240" src="https://lottie.host/embed/73b38bb2-617f-4f40-9bd5-b8875381cccf/7yWANscWcu.json"></iframe><br><br><p>Esto es solo una demostracion</p>',
        timer: 2000,
    })
}


function clean() {
    //desmarcar radios
    document.getElementById('radio1').checked = false;
    document.getElementById('radio2').checked = false;
    document.getElementById('radio3').checked = false;
    document.getElementById('radio4').checked = false;
    document.getElementById("checkbox1").checked = false;
    document.getElementById("checkbox2").checked = false;
    document.getElementById("checkbox3").checked = false;
    document.getElementById("checkbox4").checked = false;
}