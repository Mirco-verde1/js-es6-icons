// ---------------------------------------------------------MILESTONE 1:---------------------------------------------------------------------
// - Definire un array di oggetti; ogni oggetto rappresenta un'icona, che è caratterizzata da: nome, prefisso, tipo e famiglia.
// - Utilizzando la funzione forEach e il template literal, visualizzare in pagina tutte le icone con il proprio nome.


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


// CICLO IL MIO ARRAY DI OOGGETTI E AD OGNI OGGETTO ASSEGNO UN BOX NELLA PAGINA;

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


//POSSIBILMENTE DA RIVEDERE CON UNA FUNZIONE;
