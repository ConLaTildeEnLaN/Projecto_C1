'use strict';
function searchEmployee() {
    let searchInput = document.getElementById("searchInput").value.toLowerCase();
    let empleado1 = ["109110338"];
    let empleado2 = ["209110338"];
    let empleado3 = ["309110338"];
    let empleado4 = ["409110338"];
    let empleado5 = ["509110338"];
    let PersonaImagenes = {
        "109110338": "imagenes/persona1.jpg",
        "209110338": "imagenes/persona2.jpg",
        "309110338": "imagenes/persona3.jpg",
        "409110338": "imagenes/persona4.jpg",
        "509110338": "imagenes/persona5.jpg",
    };
    let filteredEmployee = [];
    let allEmployee = [...empleado1, ...empleado2, ...empleado3, ...empleado4, ...empleado5];
    if (searchInput === "") {
        swal.fire({
            icon: "error",
            title: "Ups...",
            text: "No puedes dejar esto en blanco!",
            confirmButtonText: "Intenta de nuevo",
            confirmButtonColor: "#0063be",
        });
        return;
    }

    for (let i = 0; i < allEmployee.length; i++) {
        if (allEmployee[i].toLowerCase().includes(searchInput)) {
            filteredEmployee = [allEmployee[i]];
            break;
        }
    }
    if (filteredEmployee.length === 0) {
        if (searchInput === "109110338") {
            filteredEmployee = empleado1;
        } else if (searchInput === "209110338") {
            filteredEmployee = empleado2;
        } else if (searchInput === "309110338") {
            filteredEmployee = empleado3;
        } else if (searchInput === "409110338") {
            filteredEmployee = empleado4;
        } else if (searchInput === "509110338") {
            filteredEmployee = empleado5;
        }
    }
    displayResults(filteredEmployee, PersonaImagenes);
}

function displayResults(Employee, PersonaImagenes) {
    let resultsContainer = document.getElementById("pResult");
    resultsContainer.innerHTML = "";
    if (Employee.length === 0) {
        resultsContainer.innerHTML = "<p>No se encontro un empleado.</p>";
    } else {
        for (let i = 0; i < Employee.length; i++) {
            let imageSrc = PersonaImagenes[Employee[i].toLowerCase()] || "reto10.jpg";
            let card = document.createElement("div");
            card.className = "card mb-3";
            card.style.maxWidth = "100%";
            card.innerHTML = `
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${imageSrc}" class="img-fluid rounded-start" alt="Colaboradora ${Employee[i]}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Colaboradora ${Employee[i]}</h5>
                            <p class="card-text">Nuestas colaboradoras son nuestro motor.
                            </p>
                        </div>
                    </div>
                </div>
            `;
            resultsContainer.appendChild(card);
        }
    }
}