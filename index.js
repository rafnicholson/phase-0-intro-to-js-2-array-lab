// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    let newCatsArray = [...cats];
    newCatsArray.push(name);
    return newCatsArray;
}

function prependCat(name) {
    let newCatsArray = cats.slice();
    newCatsArray.unshift(name)
    return newCatsArray;
}

function removeLastCat() {
    let newCatsArray = [...cats];
    newCatsArray.pop();
    return newCatsArray;
}

function removeFirstCat() {
    let firstCat = cats.slice(1);
    return firstCat;
}