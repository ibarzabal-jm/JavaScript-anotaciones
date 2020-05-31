let encabezado = document.querySelector('h1');

encabezado.textContent = 'ESTE ES UN ENCABEZADO MANIPULADO CON JS Puro'


//agarrando solo un elemento, recordá que hay diferencia entre textContent (recomendable), innerText y innerHTML

let contenedorTwitter = document.querySelector('.twitter');

contenedorTwitter.innerText = 'Acabo de cambiar el contenido de esta clase'


//agrrando muchos elementos de clase o estilo, hay que iterar para usarlo
let contenedorLista = document.querySelectorAll('li.lista')

for( let i = 0 ; i < contenedorLista.length; i++){
    console.log(contenedorLista[i].innerText);

    contenedorLista[i].textContent = 'Modifiqué TODOS los elementos "li" de clase .lista  '

}

//modificar Estilos con .style y cambiando el - por uppercase
let cambiarEstilo = document.querySelector('#estilo');

cambiarEstilo.style.backgroundColor = 'red';
cambiarEstilo.style.borderRadius = '20px';

cambiarEstilo.onclick = function(){

    cambiarEstilo.style.backgroundColor = 'blue';
}


//Usando create y appendChild
let contenedorFooter = document.querySelector('footer');
let pie = document.createElement('p');
let pieInfo = document.createTextNode('Este es un pie de páinga hecho exclusivamente con JS');

pie.appendChild(pieInfo);
contenedorFooter.appendChild(pie);


