// Basic Array (Flat Array) = verdier som er flere ulike datatyper
const fruits = ['Apple', 'Banana', 'Orange', 'Peach'];
console.log(fruits);
console.log(fruits[2])

const prices = [10,20,30,40];
console.log(prices[3])
const avalible = [true,false]
console.log(avalible[0])


console.log(fruits[1] + " til Salg "+prices[3]+ "kr" + " Avalible? " + avalible[0])

const h1 = document.querySelector("h1")

h1.textContent = fruits[1] + " til Salg "+prices[3]+ "kr" + " Avalible? " + avalible[0]



// Arrray of objects

const fruitbowl = [
    {name: "Apple", price: 10, avalible: true, quantity: 50},
    {name: "Banana", price: 20, avalible: false, quantity: 89},
    {name: "Orange", price: 30, avalible: true, quantity: 100},
    {name: "Peach", price: null, avalible: false, quantity: undefined},
    {name: "Pear", price: null, avalible: false, quantity: undefined}
]
console.log(fruitbowl)
console.log(fruitbowl[1])
console.log(fruitbowl[1].name, fruitbowl[1].price, fruitbowl[1].avalible, fruitbowl[1].quantity)
console.log(fruitbowl)

const appleData = fruitbowl[0]
console.log(appleData.name, appleData.price, appleData.avalible, appleData.quantity)

// Object with Arrays

const fruitGarden ={
    name: ["Apple", "Banana", "Orange", "Peach", "Pear", undefined],
    price: [10,20,30,40,50,null],
    avalible: [true, false],
    quantity: [25,50,75,100, null]
}

console.log(fruitGarden)
console.log(fruitGarden.name)
console.log(fruitGarden.name[3], fruitGarden.price[3])