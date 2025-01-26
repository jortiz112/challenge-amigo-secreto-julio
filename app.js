/*El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar 
  la lógica para resolver el problema.*/

//Declaración de variable de tipo array, que almacenará los nombres de los amigos ingresados
let amigos = [];

//Función, que permite al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos
function agregarAmigo() {
    
    /*Se añade una validación para evitar que el usuario deje vacío el campo de entrada de datos y muestra un alerta
      en caso de dejarlo en blanco*/
    if (document.getElementById('amigo').value === "") {
        alert('Por favor, inserte un nombre.');
    } else {
        //Se obtiene el texto del nombre ingresdo por el usuario, del campo de entrada de datos
        let nombre = document.getElementById('amigo').value;
        console.log(nombre);
    }
    
}