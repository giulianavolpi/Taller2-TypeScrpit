import {Serie} from './serie.js';
import {Data} from './data.js';

const laseries: HTMLElement = document.getElementById("series")!;
let promedio: number = 0;
const datos: HTMLElement = document.getElementById("tabla-datos")!;
const card: HTMLElement = document.getElementById("container-card")!;


function elementosTabla(series: Serie[]): void{
  
    series.forEach((serie) => {
        let elemento = document.createElement('elemento');

        elemento.innerHTML =  `<th>${serie.id}</th>
                                <td class="text-primary">${serie.nombre}</td>
                                <td>${serie.plataforma}</td>
                                <td>${serie.temporadas}</td>`;

        laseries.appendChild(elemento);
        promedio += serie.temporadas;
     
    });

    promedio /= series.length;

    document.getElementById("average")!.innerHTML = "Seasons Average: " + promedio;

}
elementosTabla(Data)

datos.addEventListener("click", function(event){
    const activado = event.target as HTMLElement;

    if (activado.tagName == "TH" || activado.tagName == "TD"){
        const fila = activado.parentElement as HTMLTableRowElement;
        const id = fila.cells[0].textContent;

        Data.forEach((serie) => {
            if (id !== null && parseInt(id) === serie.id){
                let escogida: Serie = serie;
                visualizador(escogida);
            }
        });
    }
});


function visualizador(escogida: Serie){
    
    let nuevo = document.createElement("div");
    nuevo.className = "card";
    nuevo.style.width = "20rem";

    
    nuevo.innerHTML = `<img class="card-img-top" src="${escogida.imagen}" alt="Imgagen">`
    let body = document.createElement("div");
    body.className = "card-body";
    body.innerHTML =   `<h3 class="card-title" style="font-weight: bold;">${escogida.nombre}</h3>
                            <p class="card-text">${escogida.descripcion}</p>
                            <a href="${escogida.link}" target="_blank">${escogida.link}</a>`


    nuevo.appendChild(body);
    card.innerHTML = "";
    card.appendChild(nuevo);
}

