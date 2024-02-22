let numeroSecreto = 0;
let cantidadIntentos = 0
let listaNumerosSorteados = [];
let numeroTope = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return; 
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(cantidadIntentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${cantidadIntentos} ${(cantidadIntentos === 1) ? 'intento!!!' : 'intentos!!!'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        cantidadIntentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroTope)+1;
    console.log (listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroTope){
        asignarTextoElemento ('p','Ya se sortearon todos número posibles');
    }else{
        //si el numero generado está incluido o no en lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }      
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroTope}`);
    numeroSecreto = generarNumeroSecreto();
    console.log (`El número secreto es ${numeroSecreto}`);
    cantidadIntentos = 1;    
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //mensajes iniciales
    //generar el número aleatorio
    //Inicialilzar intentos
    condicionesIniciales();
    //deshabilitar el boton d nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();
