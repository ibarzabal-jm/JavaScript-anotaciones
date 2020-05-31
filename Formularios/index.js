document.querySelector('#siguiente').onclick = function (event){
    const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes');
    const cantidadIntegrantes = Number($cantidadIntegrantes.value);

    borrarIntegrantesAnteriores();
    crearIntegrantes(cantidadIntegrantes);
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

function borrarIntegrantesAnteriores(){
    const $integrantes = document.querySelectorAll('.integrante');
    for( let i = 0 ; i< $integrantes.length ; i++ ){
        $integrantes[i].remove();
    }
}