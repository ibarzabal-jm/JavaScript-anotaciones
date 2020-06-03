document.querySelector('#siguiente').onclick = function (event){
    const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes');
    const cantidadIntegrantes = Number($cantidadIntegrantes.value);

    borrarIntegrantesAnteriores();
    crearIntegrantes(cantidadIntegrantes);
    crearBotonCalcular();


    event.preventDefault();
}

function crearIntegrantes(cantidad){
    for (let i = 0 ; i < cantidad ; i++){
        crearIntegrante(i);
    }

}

function crearIntegrante(indice){
    const $div = document.createElement('div');
    $div.className = 'integrantes';

    const $label = document.createElement('label');
    $label.textContent = 'Edad del integrante #: ' + (indice+1);
    const $input = document.createElement('input');
    $input.type = 'number';

    $div.appendChild($label);
    $div.appendChild($input);

    const $integrantes = document.querySelector('#integrantes');
    $integrantes.appendChild($div);


}




function crearBotonCalcular(){
    const $button = document.createElement('button');
    $button.type = 'submit';
    $button.textContent='Calcular';
    $button.id = 'calcular';

    const $integrantes = document.querySelector('#integrantes');
    $integrantes.appendChild($button);

    document.querySelector('#calcular').addEventListener('click', calcular);

}


function calcular(){
    const numeros = obtenerEdades();
    mostrarEdad('mayor', obtnerMayorNumero(numeros));
    mostrarEdad('menor', obtenerMenorNumero(numeros));
    mostrarEdad('promedio', obtenerPromedio(numeros));

    event.preventDefault();
}


function obtenerEdades(){
    const $integrantes = document.querySelector
}

function borrarIntegrantesAnteriores(){
    const $integrantes = document.querySelectorAll('.integrante');
    for( let i = 0 ; i< $integrantes.length ; i++ ){
        $integrantes[i].remove();
    }
}




// funciones de obtener numero mayor, menor y promedio

function obtenerMenorNumero(numeros){
    let menorNumero = numeros[0];
    for (let i = 1; i<numeros.length ; i++){
        if( numeros[i] < menorNumero){
            menorNumero = numeros[i];
        }
    }

    return menorNumero;
}

function obtenerMayorNumero(numeros){
    let mayorNumero = numeros[0];
    for (let i = 1; i< numeros.length ; i++){
        if( numeros[i] > mayorNumero){
            mayorNumero = numeros[i];
        }
    }

    return mayorNumero;
}


function obtenerPromedio(numeros){
    let suma = 0;

    for (let i = 1; i < numeros.length; i++){
        suma += numeros[i];
    }
    
    return (suma /numeros.length);
}