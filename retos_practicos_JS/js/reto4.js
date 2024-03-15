
let seleccionar = document.querySelector('select');
seleccionar.addEventListener('change', elegir);
 
function elegir(){
let eleccion = seleccionar.value;

if (eleccion == 0){
    descripcion.innerHTML = '';
}
if (eleccion == 1){
    descripcion.innerHTML = 'Las variedades más preciadas de Arábica crecen en fértiles tierras montañosas alcanzando alturas de 2.000 m, antes de unirse para crear un café lleno de carácter y personalidad.';
} else if (eleccion == 2){
    descripcion.innerHTML = 'Una mezcla aromática y bien equilibrada. Experimenta un sabor inolvidable y con mucho cuerpo. La mezcla ideal si quieres evitar la cafeína sin renunciar al lujo del café italiano.';
}else if (eleccion == 3){
    descripcion.innerHTML = 'Espresso delicado con una crema duradera y un agradable final a chocolate. Cremoso espresso es la mezcla ideal para quienes quieren disfrutar de un delicioso café todos los días.';
}
}
