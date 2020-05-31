let encabezado = document.querySelector('h1');

encabezado.innerText = 'ESTE ES UN ENCABEZADO MANIPULADO CON JS'

let contenedorTwitter = document.querySelector('.twitter');

contenedorTwitter.innerText = 'Acabo de cambiar el contenido de esta clase'

let contenedorLista = document.querySelectorAll('li.lista')

for( let i = 0 ; i < contenedorLista.length; i++){
    console.log(contenedorLista[i].innerText);

    contenedorLista[i].innerText = 'Modifiqué TODOS los elementos "li" de clase .lista  '

}

