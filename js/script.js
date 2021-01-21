// ---------------------------------------------------------MILESTONE 1:---------------------------------------------------------------------
// - Definire un array di oggetti; ogni oggetto rappresenta un'icona, che è caratterizzata da: nome, prefisso, tipo e famiglia.
// - Utilizzando la funzione forEach e il template literal, visualizzare in pagina tutte le icone con il proprio nome.

const box = document.getElementsByClassName('container')
//DICHIARO IL MIO ARRAY DI OGGETTI;
const listAnimals = [
  {name:'dog', family:'fas', prefisso:'fa-', tipo:'dog'},
  {name:'cat', family:'fas', prefisso:'fa-', tipo:'cat'},
  {name:'dove', family:'fas', prefisso:'fa-', tipo:'dove'},
  {name:'bone', family:'fas', prefisso:'fa-', tipo:'bone'},
  {name:'hotdog', family:'fas', prefisso:'fa-', tipo:'hotdog'},
  {name:'passport', family:'fas', prefisso:'fa-', tipo:'passport'},
  {name:'igloo', family:'fas', prefisso:'fa-', tipo:'igloo'},
  {name:'dna', family:'fas', prefisso:'fa-', tipo:'dna'}


];




listAnimals.forEach((item) => {
  if (item.tipo  === 'dog') {

    $('.box-1').append('<i class="fas fa-dog" ></i>', item.name)
  }

  if (item.tipo  === 'cat') {

    $('.box-2').append('<i class="fas fa-cat" ></i>', item.name)
  }

  if (item.tipo  === 'dove') {

    $('.box-3').append('<i class="fas fa-dove" ></i>', item.name)
  }

  if (item.tipo  === 'bone') {

    $('.box-4').append('<i class="fas fa-bone" ></i>', item.name)
  }

  if (item.tipo  === 'hotdog') {

    $('.box-5').append('<i class="fas fa-hotdog" ></i>', item.name)
  }

  if (item.tipo  === 'passport') {

    $('.box-6').append('<i class="fas fa-passport" ></i>', item.name)
  }

  if (item.tipo  === 'igloo') {

    $('.box-7').append('<i class="fas fa-igloo" ></i>', item.name)
  }

  if (item.tipo  === 'dna') {

    $('.box-8').append('<i class="fas fa-dna" ></i>', item.name)
  }

});


// POSSIBILE SOLUZIONE


// listAnimals.forEach((item) => {
// const{name , family , prefisso , tipo} = item;
//
//   box.innerHTML += `
//
//     <div>
//     <i class="$(family) $(prefisso)$(tipo)" ></i>
//     ${name}
//    </div>
//
//   `
// });







// // ------------------------------------------------------------------ MILESTONE 2 -------------------------------------------------------------------------------
//
// - Definire un array di colori e associare ad ogni tipo di icona un colore.
// - Visualizzare le icone di colore diverso in base al tipo.

const squareContainer = document.getElementsByClassName('square')
const colors = ['red', 'blue', 'yellow','black','grey','orange','lightblue','pink']
const typeAnimal = [];



  listAnimals.forEach((item) => {
    if (!typeAnimal.includes(item.tipo)) {
      typeAnimal.push(item.tipo)
    }
});

 listAnimals.forEach((item) => {
   const typeIndex = typeAnimal.indexOf(item.tipo)
   if (typeIndex !== -1) {
     item.color = colors[typeIndex];
   }
 });
console.log(listAnimals);




// // // ------------------------------------------------------------------ MILESTONE  -------------------------------------------------------------------------------
//
// - Aggiungere una select per filtrare le icone in base al tipo.
// - Popolare le options della select dinamicamente e, ogni volta che cambia il valore selezionato, visualizzare le icone corrispondenti.
//
//
