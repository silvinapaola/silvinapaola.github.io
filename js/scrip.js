 //funcion que aplica estil a la opcion seleccionada en el menu
 function seleccionar (link){
var opciones = docment.querySlectorAll("#links a");
opciones[0].className = " ";
opciones[1].className = " ";
opciones[2].className = " ";
opciones[3].className = " ";
opciones[4].className = " ";
link.className = "selecionado"


//hacemos desaparecer el menu una vez que se ha seleccionado una opcion en el modo responsive
var x = docment.getElementById ("nav")
x.className ="";
}

//funcion que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById ("nav");
    if(x.className===""){
        x.className = "responsive";
    }
    else {
        x.className ="";
    }
}

//scrolling para animacion de barra de habilidades
window.onscroll = function () {
    efectoHabilidades();
}

//funcion que aplica animacion a la barra de habilidades
function efectoHabilidades (){
var habilidades = docment.getElementById("habilidades");
var distancia_habilidades = window.innerHeight - habilidades.getBoundingClientRect ().top;
if(distancia_habilidades >=300) {
    document.getElementById(html).classList.add("barra-progreso1");
    document.getElementById(css).classList.add("barra-progreso2");
    document.getElementById(nodejs).classList.add("barra-progreso3");
    document.getElementById(js).classList.add("barra-progreso4");
    document.getElementById(git).classList.add("barra-progreso5");
    document.getElementById(bootstrap).classList.add("barra-progreso6");
}
}