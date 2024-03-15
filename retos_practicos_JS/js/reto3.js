function menu() {
    let seleccion = document.getElementById('opciones').value;
    switch (seleccion) {
        case 'A':
            Swal.fire({
                showConfirmButton: false,
                html: '<iframe width="320" height="240" src="https://lottie.host/embed/73b38bb2-617f-4f40-9bd5-b8875381cccf/7yWANscWcu.json"></iframe><br><br><p>Espera un momento</p>',
                timer: 2000,
            }).then(() => {
                window.location.href = "montana.html";
            });
            return;
            //window.open("montana.html","_self");
        case 'B':
            Swal.fire({
                showConfirmButton: false,
                html: '<iframe width="320" height="240" src="https://lottie.host/embed/73b38bb2-617f-4f40-9bd5-b8875381cccf/7yWANscWcu.json"></iframe><br><br><p>Espera un momento</p>',
                timer: 2000,
            }).then(() => {
                window.location.href = "altura.html";
            });
            return;
            //window.open("altura.html","_self");
        case 'C':
            Swal.fire({
                showConfirmButton: false,
                html: '<iframe width="320" height="240" src="https://lottie.host/embed/73b38bb2-617f-4f40-9bd5-b8875381cccf/7yWANscWcu.json"></iframe><br><br><p>Espera un momento</p>',
                timer: 2000,
            }).then(() => {
                window.location.href = "export.html";
            });
            return;
            //window.open("export.html","_self");
    }
}