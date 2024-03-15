const estudiantes = [];

function agregarEstudiante(){
    const nombre = document.getElementById('nombre').value,
    apellidoEstudiante = document.getElementById('apellidos').value,
    nota1 = parseFloat(document.getElementById('nota1').value),
    nota2 = parseFloat(document.getElementById('nota2').value),
    nota3 = parseFloat(document.getElementById('nota3').value);
    if (nombre === '' || apellidoEstudiante === '' || isNaN(nota1) || isNaN(nota2) || isNaN(nota3)){
        swal.fire({
            text: ptext,
            confirmButtonText: "Intenta de nuevo",
            confirmButtonColor: "#0063be",
            html: '<iframe width="320" height="240" src="https://lottie.host/embed/bf90ec24-bf68-41be-88e6-df5949ac4a17/UCUmHNHjLA.json"></iframe><br><p>' + ptext + " </p>",
        });
    } else {
        const promedio = (nota1 + nota2 + nota3) / 3;
        estudiantes.push({nombre, apellidoEstudiante, promedio});
        const selectEstudiantes = document.getElementById('seleccionarEstudiante');
        const option = document.createElement('option');
        option.value = nombre + ' ' + apellidoEstudiante;
        option.text = nombre + ' ' + apellidoEstudiante;
        selectEstudiantes.appendChild(option);

        limpiarDatos();

        Swal.fire({
            title: "Estudiante agregado con exito",
            showConfirmButton: false,
            timer: 3000,
            html: '<iframe width="320" height="240" src="https://lottie.host/embed/73b38bb2-617f-4f40-9bd5-b8875381cccf/7yWANscWcu.json"></iframe><br><br><p>Espera un momento</p>',
        });
    }
}

function calcularPromedioSeleccionado(){
    const nombreSeleccionado = document.getElementById('seleccionarEstudiante').value;
    const resultado = document.getElementById('resultado');
    let estudianteSeleccionado = null;
    for (let i = 0; i < estudiantes.length; i++){
        const estudiante = estudiantes[i];
        const nombreCompleto = estudiante.nombre + ' ' + estudiante.apellidoEstudiante;
        if (nombreCompleto === nombreSeleccionado){
            estudianteSeleccionado = estudiante;
            break;
        }
    }

    if (estudianteSeleccionado){
        const promedioEstudiante = estudianteSeleccionado.promedio;
        resultado.textContent = 'El promedio de: ' + nombreSeleccionado + ' es de: ' + promedioEstudiante;
    } else{
        resultado.textContent = '';
    }
}   

function limpiarDatos(){
    document.getElementById('nombre').value = '';
    document.getElementById('apellidos').value = '';
    document.getElementById('nota1').value = '';
    document.getElementById('nota2').value = '';
    document.getElementById('nota3').value = '';
}