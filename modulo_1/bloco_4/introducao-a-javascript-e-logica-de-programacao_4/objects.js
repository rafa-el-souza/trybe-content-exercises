let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    }
}

function playerPresentation(player) {
    console.log(`A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade.`);
}

function playerMedals(player) {
    console.log(`A jogadora possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} medalhas de prata.`);
}

function printWelcome(array) {
    for (let key in array) {
        console.log(`Olá ${array[key]}`);
    }
}

function printCar(car) {
    console.log(car);
for (let key in car) {
    console.log(`modelo: ${car["model"]}, marca: ${car["manufacturer"]}, ano: ${car["manufacturer"]}`);
}
}

playerPresentation(player);
playerMedals(player);

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
console.table(player);

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge'
  }
console.log(names);
printWelcome(names);

let carro = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
}
printCar(carro);