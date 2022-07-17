// /*DOM NOTES */
// /*querySelectorAll: sirve para seleccionar una lista de elementos y los devuelve en un array */
// const buttons = document.querySelectorAll('button');
// console.log(buttons);

// /*querySelector: sirve para seleccionar un elemento, sea por su tipo o por su clase o por su ID
// si hay varios elementos del mismo tipo este tomara el primero como en el ejemplo */
// const firstButton = document.querySelector('button');
// console.log(firstButton);
// /*Como con querySelector nos devuelve un array podemos hacerlo siguiente: */
// const secondButton = buttons[1];
// console.log(secondButton);
// /*nextElementSibling: nos devuelve el hermano siguiente */
// console.log(secondButton.nextElementSibling);

// /*previousElementSibling: nos devuelve el hermano anterior */
// const fourthButton = buttons[3];
// console.log(fourthButton.previousElementSibling);

// /*parentElement: nos devuelve el padre del elemento */
// console.log(fourthButton.parentElement);

// /*textContent: podemos manipular el texto que tiene el elemento */
// // fourthButton.textContent = 'Daniel';

// /*CREANDO NODOS*/
// /*1. Crear Nodo */
// const newButton = document.createElement('button'); //creando un boton con createElement
// const newSecondButton = document.createElement('button'); //creando un segundo boton con createElement
// newSecondButton.textContent = 'Reset'; //Agregamos texto con innerHTML
// // newButton.textContent = 'Daniel';
// //hacemos una constante para crear el texto:
// const newButtonText = document.createTextNode('Enter'); //Agregamos texto con createTextNode
// /*2. Seleccionar elemento padre */
// const parentEle = document.querySelector('.calculator-container');

// /*3. Agregar el elemento al padre: tenemos dos opciones append y appendChild
// /*con appendChild solo podemos agregar un nodo */

// // parentEle.appendChild(newButton);
// newButton.appendChild(newButtonText);
// // parentEle.appendChild(newSecondButton);

// /*con append podemos agregar varios nodos a la vez separados por una coma
// entonces usamos append para agregar los dos nodos anteriores al mismo tiempo*/
// parentEle.append(newButton, newSecondButton);

// /*Agregar una clase a un elemento */
// newButton.className = 'button';
// newSecondButton.className = 'button';
// /*para agregar un atributo a un elemento */
// newButton.id = 'enter-button';
// newSecondButton.id = 'reset-button';

// /*COMO TRABAJAR CON ESTILOS*/

// /*para agregar un estilo al elemento */
// // newButton.style.color = '#33FCFF';
