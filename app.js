// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let AmigosIngresados = [];
let AmigoSorteado =[]


// Agregar amigos al Listado
function agregarAmigo() {
    let NombreIngresado = document.getElementById('amigo').value.trim();
        if(NombreIngresado == ''){
            alert ('Debes ingresar un Nombre');}
            else { if(AmigosIngresados.includes(NombreIngresado)) 
           {alert('Ya Ingresaste ese Nombre');}  
            else {AmigosIngresados.push(NombreIngresado);}
        }
    
    //mostrar Amigos en Listado        
    CrearLi();
       
    //LimpiarNombre
    document.getElementById('amigo').value = ""; 

    console.log(AmigosIngresados);
}

// funcion Li
function CrearLi(){
    let Listado = document.getElementById('listaAmigos');
    Listado.innerHTML = "";
    for(let i = 0; i < AmigosIngresados.length; i++){
    let elemento = document.createElement('li');
    //muestra elementos lista
    elemento.textContent = AmigosIngresados[i];
    Listado.appendChild(elemento);
    }
}

// Funcion de sorteo
function sortearAmigo() {let amigoAleatorio = Math.floor(Math.random()*AmigosIngresados.length);
    let amigoSeleccionado = AmigosIngresados[amigoAleatorio];
    let resultado = document.getElementById('resultado');
    if (AmigosIngresados == 0 ){
        alert('No hay Nombres ingresados, no se puede realizar el sorteo');
    } else {
        resultado.innerHTML = `<li>El amigo secreto es : ${amigoSeleccionado}</li>`;
    // Deshabilitar boton despues del sorteo?
    document.querySelector('#Sorteo').setAttribute('disabled','true');}

    let AmigoSorteado = AmigosIngresados[amigoAleatorio];
}

//funcion extra, limpiar pantalla y reinicio de juego
function Reset() {
    
    // Borra amigos de la Lista
    AmigosIngresados =[]
    // Limpia el area de ingreso nombre
    document.getElementById('amigo').value = "";
    // Limpiar nombre Sorteado
    resultado.innerHTML = "";
    // Limpiar la lista de amigos (el contenido de la lista de amigos)
    listaAmigos.innerHTML ="";
    // Habilitar boton Sorteo
    document.querySelector('#Sorteo').removeAttribute('disabled');
    
    alert("Sorteo reiniciado.");
}