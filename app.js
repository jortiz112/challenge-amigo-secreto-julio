/*El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar 
  la lógica para resolver el problema.*/

//Declaración de variable de tipo array, que almacenará los nombres de los amigos ingresados
let amigos = [];
//se declara la variable lista, en donde se almacenara toda la lista completa para mandar a insertar en el HTML
let lista = "";

//Función, que permite al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos
function agregarAmigo() {
    
    /*Se añade una validación para evitar que el usuario deje vacío el campo de entrada de datos y muestra un alerta
      en caso de dejarlo en blanco*/
    if (document.getElementById('amigo').value === "") {
        alert('Por favor, inserte un nombre.');
    } else {
        /*Se obtiene el texto del nombre ingresdo por el usuario, del campo de entrada de datos y se actualiza el
        array amigos*/
        amigos.push(document.getElementById('amigo').value);
        //Se restablece el campo de texto a una cadena vacía
        document.getElementById('amigo').value = "";
        /*Para que el cursor siempre este en la caja de texto listo para ingresar una nueva entrada */
        document.getElementById('amigo').focus();
        //Se realiza la llamada de la funcion que actualiza la lista de amigos en el HTML
        actualizaListaAmigos(); 
        //Se lispia la lista existente para asegurarse de que no haya duplicados al actualizar.
        lista = "";     
    }  
    
    return;
}

/*Función que recorre el array amigos y agrega cada nombre como un elemento <li> dentro de una lista HTML. 
  se usa innerHTML para limpiar la lista antes de agregar nuevos elementos.*/
function actualizaListaAmigos() {
  /*Se usa un bucle for para recorrer el arreglo amigos y crear los elementos de lista (<li>) para cada 
  nombre y se forma la lsita dentro de la variable lista .*/
    for(let contador = 0; contador < amigos.length; contador++) {
      //Para cada amigo, se crea un nuevo elemento de lista.
      lista += '<li>' + amigos[contador] + '</li>';
      //Obtengo el elemento de la lista y se ingresa la lista completa en el HTML
      document.getElementById('listaAmigos').innerHTML = lista;
    }
    return;    
}

/*función que selecciona de manera aleatoria uno de los nombres almacenados en el array amigos. 
Se Math.random() y Math.floor() para obtener un índice aleatorio.*/
function sortearAmigo() {
  //Se comprueba si el array amigos no está vacío.
  if (amigos.length >= 0) {
    //Se genera un índice aleatorio del arreglo
    let indice = Math.floor(Math.random() * (amigos.length));
    /*Se Obtiene el nombre sorteado, se utiliza el índice aleatorio para acceder al nombre correspondiente 
    en el arreglo. y se muestra el resultado en la lista de id resultado*/
    document.getElementById('resultado').innerHTML = `El amigo secreto es: ${amigos[indice]}`;
    //Se limpia la lista existente de amigos del HTML
    document.getElementById('listaAmigos').innerHTML = "";
  }
  return;
}