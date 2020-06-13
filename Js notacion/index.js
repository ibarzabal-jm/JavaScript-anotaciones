/*
    === //Exactamente igual que (1 y "1" no son iguales, pero 1 es exactamente igual a 1 y "1" es exactamente igual a  "1"). Este operador compara el valor y el TIPO del valor.
    !== //Distinto que (dándole importancia al TIPO)
    '===' significa preguntar si es "exactamente igual a". miVariable === 1 es verdadero si miVariable es 1, y falso si es cualquier otra cosa distinta de 1.
*/


/*
    Tamaño del Array
    ================
    
    Podemos verificar fácilmente cuántos elementos tenemos en nuestro Array con una propiedad:
    '.length'
    Ejemplo:
    let cosasAleatorias = [2, 'libro', 'hoy es Sabado', 10];
    console.log(cosasAleatorias.length); // Obtendremos 4.
*/

/*
    Array.push()
    ============
    Si deseas agregar nuevos valores a un array existente, podes usar el método
     '.push()'. Push agregará un nuevo valor al final del array.
    Ejemplo:
    let animales = ['gato', 'perro', 'caballo'];
    animales.push('conejo');
    // nuestro array de animales sera ['gato', 'perro', 'caballo', 'conejo'];
*/


/*
    Elementos de Acceso
    ==================
    Document Object Model (DOM)
    ---------------------------
    El DOM es la representación en JavaScript del elemento HTML que está siendo
    utilizado. EL DOM está disponible bajo una variable global especial llamada
    "document". Podemos obtener nodos específicos (elementos de página) con el
    metodo DOM: '.querySelector'.
*/




/*
    Propiedades de los elementos
    ==================
    
    Ok, hasta acá todo bien. Peeeroo, ¿que pasa si queremos obtener SOLO el texto
    de nuestra etiqueta 'h1'?
    Los elementos de página tienen una propiedad para esto: '.textContent'.
*/





/*
    Editar el contenido de la página
    ====================
    Podemos simplemente cambiar el contenido de las étiquetas utilizando la propiedad'
    .textContent'.
*/



/*
    Editando estilos
    ==============
    Cambiemos algunos estilos. Los elementos de página tienen una propiedad '.style'.
    Podemos asignarle estilos a esta propiedad utilizando los mismos nombres que en
    los archivos CSS.
    (Si una propiedad tiene '-' en su nombre, como — font-size —, entonces
    el guión será eliminado y las siguiente palabra comenzara con una letra mayúscula, y pasará
    a ser fontSize).
    Ejemplo:
    const nuestroTwitter = document.querySelector('.twitter');
    nuestroTwitter.style.backgroundColor = 'white';
*/





/*
   Creando nuevos nodos (Elementos)
    =============================
    El objeto "document" también nos da maneras de crear nodos desde cero.
    document.createElement('div'); // crea un nuevo elemento llamado 'div'.
    document.createTextNode('foobar'); // crea un nuevo texto que contiene 'foobar'
    existingNode.appendChild(newNode); // agrega un newNode al final de existingNode.
    Ejemplo:
    const nodoPagina = document.querySelector('body');
    const nuevoParrafo = document.createElement('p');
    const textoParrafo = document.createTextNode('Yeeee!');
    nuevoParrafo.appendChild(textoParrafo);
    nodoPagina.appendChild(nuevoParrafo);
*/


/*
    Assert
    =============================
    console.assert(1===2, "1 no es igual a 2");
    Forma de probar si algo está en correcto funcionamiento, por si alguien toca
    una función

    EJEMPLOS:
    ==================
    function sumar(a,b){
        return a - b;
    }

    console.assert(sumar(1,2) === 3, 'la suma de 1 + 2 no dio 3');

    function validarNombre(nombre){
        if (nombre.length === 0 ){
            return 'Este campo debe tener al menos un caracter'
        }

        if (nombre.length >=50){
            return 'Este campo debe tener cuanto mucho 50 caracteres'
        }

        return '';
    }

    function probarValidarNombre() {
        console.assert(
            validarNombre('') === 'Este campo debe tener al menos un caracter',
            'Validar nombre no validó que el nombre no sea vacío',
        );

        console.assert(
            validarNombre(
                '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
                'Este campo debe tener cuanto mucho 50 caracteres',
            'Validar nombre no validó que el nombre sea menor a 50 caracteres',
        );
        }

    probarValidarNombre();

*/

/*
        Regular Expressions
        ====================
        
        Se usan para encontrar texto, y buscar & reemplazar porciones de texto.
        
        console.log(/abc/.test("abcde")); => true
        console.log(/abc/.test("abcde")); => false

        /^abc/ => comienza con abc
        /^abc[0-9]+/ => que despues venga un numero de 0 a 9 aunque sea
                        //si quiero cero o más uso el *



*/



