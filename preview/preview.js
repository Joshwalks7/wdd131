// loops
for (let i = 0; i < 5; i++) {
    console.log(i)
}

let balance = 100;
let months = 12;
let x;
for (x=1; x <= months; x++) {
    balance += 5;
    console.log("Month", x, "Balance", balance);
}

let i = 0

while (i <= 10) {
    console.log(i);
    i++
}

//More array methods

//.includes() -- true or false return value

let text = 'Hello Worlds, welcome to wdd131';
let result = text.toLowerCase().includes('world')
console.log(result)

//.find() - return an object or a value from the first instance found

const pets = [
    {id: 1,
        type: 'cat',
        isFurry: true
    },
    {id: 2,
        type: 'dog',
        isFurry: true
    },
    {id: 3,
        type: 'lizard',
        isFurry: false
    }
];

let idResult = pets.find(function(item) {
    return item.isFurry === true;
});

console.log(idResult);

//.filter all results will show
let furryResult = pets.filter(function(item) {
    return item.isFurry === true
})

console.log(furryResult);