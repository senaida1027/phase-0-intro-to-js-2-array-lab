// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

function destructivelyAppendCat(name) {
    cats.push(name)
};
destructivelyAppendCat("Ralph");

beforeEach(function () {
    cats.lenght = 0;

    cats.push('Milo', 'Otis', 'Garfield');
});

function destructivelyPrependCat(name) {
    cats.unshift(name)
};
destructivelyPrependCat("Bob");

beforeEach(function() {
    cats.length = 0;

    cats.push('Milo', 'Otis','Garfield');
});

function destructivelyRemoveLastCat() {
    cats.pop();
};
destructivelyRemoveLastCat();

beforeEach(function() {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
});

function destructivelyRemoveFirstCat() {
    cats.shift();
};
destructivelyRemoveFirstCat();

beforeEach(function() {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
});

function appendCat(name) {
    return [...cats, name]
};
appendCat("Broom");

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
});

function prependCat(name) {
    return [name, ...cats];
};
prependCat('Arnold');

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
});

function removeLastCat () {
    return cats.slice(0, -1);
}
removeLastCat();

beforeEach( function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
});

function removeFirstCat () {
    return cats.slice(1);
}
removeFirstCat();