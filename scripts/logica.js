import  {Data} from './Data.js';	
var body = document.getElementById('series');
var promedio = 0;
var datos = document.getElementById("tabla-datos");
var card = document.getElementById("container-card");

elementosTabla(Data)
function elementosTabla(series) {
    series.forEach(function (serie) {
        var trElement = document.createElement('tr');
        trElement.innerHTML = "<th>".concat(serie.id, "</th>\n                                <td class=\"text-primary\">").concat(serie.nombre, "</td>\n                                <td>").concat(serie.plataforma, "</td>\n                                <td>").concat(serie.temporadas, "</td>");
        body.appendChild(trElement);
        promedio += serie.temporadas;
    });
    promedio /= series.length;
    document.getElementById("average").innerHTML = "Seasons Average: " + promedio;
}
export {};


datos.addEventListener("click", function(event){
    const activado = event.target;

    if (activado.tagName == "TH" || activado.tagName == "TD"){
        const fila = activado.parentElement;
        const id = fila.cells[0].textContent;

        Data.forEach((serie) => {
            if (id !== null && parseInt(id) === serie.id){
                let escogida = serie;
                visualizador(escogida);
            }
        });
    }
});


function visualizador(escogida){
    
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

