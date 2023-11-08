const state = {
    name: [],
    occupation: [],
    startingPrice: []
}
const givenNameInput = prompt(`Enter a name`);
state.name = givenNameInput.split();
const givenOccupationInput = prompt(`Enter a correlating occupation`);
state.occupation = givenOccupationInput.split();
const givenStartingPriceInput = prompt(`Take in a correlating starting price`);
state.startingPrice = givenStartingPriceInput.split();
console.log(state);

