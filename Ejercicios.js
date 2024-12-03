//EJERCICIO 1

/*1.1*/ let myFavouriteHero = "Hulk";

/*1.2*/ let x = 50;

/*1.3*/ let h = 5;
let y = 10;

/*1.4*/let z = h+y;

//EJERCICIO 2

/*1.1*/ const character = {name: 'Jack Sparrow', age: 25};

/*1.2*/ let firstName = "Jon";
let lastName = "Snow";
let age = 24;
console.log("Soy " + firstName + " " + lastName + ", tengo " + age + " años, y me gustan los lobos.");

/*1.3*/ const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};

function sumarPrecios(toy1, toy2) {
    return toy1.price + toy2.price;
}

const totalPrice = sumarPrecios(toy1, toy2);
console.log("El precio total es:", totalPrice);

/*1.4*/ let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

globalBasePrice = 25000;
car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice = car2.basePrice + globalBasePrice;
console.log(car1.finalPrice);
console.log(car2.finalPrice);

//Ejercicio 3

/*1.1*/ let x = 10;
let y = 5;
let z = x*y;
console.log(z);

/*1.2*/ let x = 10;
let y = 2;
let z = x/y;
console.log(z)

/*1.3*/ console.log(15%9)

/*1.4*/ let p = 10;
let j = 5;
let o = p+j;
console.log(o)

/*1.5*/ let c = 10;
let m = 5;
let i = c*m;
console.log(i)

//EJERCICIO 4

/*1.1*/ const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

console.log(avengers[0])

/*1.2*/ const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

avengers[0] = "IRON MAN";
console.log(avengers)

/*1.3*/ const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

console.log(avengers.length)

/*1.4*/ const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

rickAndMortyCharacters.push("Morty", "Summer");
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1]);

/*1.5*/ rickAndMortyCharacters.pop();
console.log(rickAndMortyCharacters[0]);
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1]);

/*1.6*/ const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

rickAndMortyCharacters.splice(1,1);
console.log(rickAndMortyCharacters);

//EJERCICIO 5

const number1 = 10;
const number2 = 20;
const number3 = 2;

if (number2/number1 === 2) {
  console.log("number2 dividido entre number1 es igual a 2");
}

if (number1!==number2) {
    console.log("number1 es estrictamente distinto a number2");
  }

if (number3!=number1) {
    console.log("number3 es distinto number1");
  }

if (number3 * 5 == number1) {
    console.log("number3 por 5 es igual a number1");
  }

if (number3 * 5 == number1 && number1 * 2 == number2) {
    console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
  }

if (number2 / 2 == number1 || number1 / 5 == number3) {
    console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
  }

//EJERCICIO 6

/*1.1*/ for (let i = 0; i<=9; i++) {
  console.log(i)
}

/*1.2*/ for (let i = 0; i<=9; i++) {
  if(i % 2 == 0) {
    console.log(i)
  }
  }

/*1.3*/ for (let i = 1; i<=10; i++) {
  if(i < 10) {
    console.log("intentando dormir 🐑")
  } else {
    console.log("¡Dormido!")
  }
  }

//EJERCICIO 7

function sum(numberOne , numberTwo) {
    if(numberOne > numberTwo) {
      return numberOne
    } else {
      return numberTwo
    }
  }

//EJERCICIO 8

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function longestWord(input) {
  let longest = '';

  for (let word of input) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}
console.log(longestWord(avengers))

/*Primero creamos una variable longest, que almacenará la palabra más larga encontrada hasta el momento.
Luego creamos un bucle que pase por cada palabra del input, y si esta es más larga que la almacenada
en longest, la actualizará.
Por último le decimos que nos devuelva longest, la palabra más larga encontrada.*/

//EJERCICIO 9

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
  let sum = 0;

  for (let i = 0; i < param.length; i++) {
    const element = param[i];
    sum += element;
  }
  return sum;
}
console.log(sumAll(numbers))

//EJERCICIO 10

function average(param) {
    let sum = 0;
  
    for (let i = 0; i < param.length; i++) {
      const element = param[i];
      sum += element;
    }
    return sum / param.length;
  }

//EJERCICIO 11

for (let i = 0; i < param.length; i++) {
    const element = param[i];

    if (typeof element === "string") {
      sum += element.length;
    } else {
      sum += element;
    }
  }
  return sum / param.length

//EJERCICIO 12

function removeDuplicates(param) {
  
    for (let i = 0; i < param.length; i++) {
        const primerPuntero = param[i]
        
        for (let j = i + 1; j < param.length; j++) {
            const segundoPuntero = param[j];
            
            if (primerPuntero === segundoPuntero) {
                param.splice(j, 1);
                j--;
            }
        }
    }

    console.log(param);

}

//EJERCICIO 13

function finderName(array, element) {
    if (array.includes(element)) {
        return `${true}, posicion: ${array.indexOf(element)}`
    } else {
        return false;
    }
  }

//EJERCICIO 14

function repeatCounter(array) {
    const count = {}
    for (let i = 0; i < array.length; i++) {
        
        if(count[array[i]] >= 1) {
            count[array[i]]++;
        } else {
            count[array[i]] = 1;
        }
        
    }

    console.log(count);
  }

//EJERCICIO 15

for (const product of products) {
    if (product.includes("Camiseta")) {
        console.log(product);
    }
}

//EJERCICIO 16

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

for(const lista of placesToTravel) {
  console.log(lista)
}

//EJERCICIO 17

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (const data in alien) {
  console.log (alien[data]);
}

//EJERCICIO 18

for (let i = 0; i < placesToTravel.length; i++) {
    
    if (placesToTravel[i].id === 11 || placesToTravel[i].id === 40) {
        placesToTravel.splice(i, 1);
        i--;
    }
    
}

//EJERCICIO 19

for (let i = 0; i < toys.length; i++) {
    
    if (toys[i].name.includes("gato")) {
        toys.splice(i, 1),
        i--;
    }
    
}

//EJERCICIO 20

for (const toy of toys) {
    if (toy.sellCount > 15) {
        popularToys.push(toy);
    }
}

console.log(popularToys);

//EJERCICIO 21

const mayores = [];
const menores = [];

for (const user of users) {
  if(user.years < 18) {
      menores.push(user);
  }
  if(user.years >= 18) {
      mayores.push(user);
  }
}

//EJERCICIO 22

for (let i = 0; i < foodSchedule.length; i++) {
    
    if (foodSchedule[i].isVegan === false) {
        foodSchedule[i].name = fruits.splice(0, 1)[0];
        foodSchedule[i].isVegan = true;
    }
    
}

//EJERCICIO 23

const shortMovies = [];
const mediumMovies = [];
const longMovies = [];

for (let i = 0; i < movies.length; i++) {
    
    if (movies[i].durationInMinutes < 100) {
        shortMovies.push(movies[i]);
    } else if (movies[i].durationInMinutes > 200) {
        longMovies.push(movies[i]);
    } else {
        mediumMovies.push(movies[i]);
    }
    
}

//EJERCICIO 24

