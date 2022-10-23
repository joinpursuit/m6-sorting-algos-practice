const { catArt, someNums, someProducts, someWords } = require('./data/data.js');

// sort numbers in ascending order
const sortNumsA = (arr) => {
  let didISwap = true;
  while (didISwap) {
    didISwap = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].toString() > arr[i + 1].toString()) {
        didISwap = true;
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
};

// sort numbers in descending order
const sortNumsD = (arr) => {
  let didISwap = true;
  while (didISwap) {
    didISwap = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        didISwap = true;
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
};

// sort words in ascending order case sensitive
const sortWordsA = (arr) => {
  let didISwap = true;
  while (didISwap) {
    didISwap = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        didISwap = true;
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
};

// sort words in descending order case insensitive
const sortWordsD = (arr) => {
  let didISwap = true;
  while (didISwap) {
    didISwap = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].toLowerCase() < arr[i + 1].toLowerCase()) {
        didISwap = true;
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
};

// sort products by name, #ICUcopiedMe ascending order case insensitive
const sortProductNamesA = (arr) => {
  let didISwap = true;
  while (didISwap) {
    didISwap = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].name.toLowerCase() > arr[i + 1].name.toLowerCase()) {
        didISwap = true;
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
};

// sort products by price, #ICUcopiedMe ascending order 
const sortProductPriceA = (arr) => {
  let didISwap = true;
  while (didISwap) {
    didISwap = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].price > arr[i + 1].price) {
        didISwap = true;
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
};

// sort products by price, descending order
const sortProductPriceD = (arr) => {
  let didISwap = true;
  while (didISwap) {
    didISwap = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].price < arr[i + 1].price) {
        didISwap = true;
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
};

// sort products by price, then by name,#ICUcopiedMe ascending order
const sortProducsPriceNameA = (arr) => {
  let didISwap = true;
  while (didISwap) {
    didISwap = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].price > arr[i + 1].price) {
        didISwap = true;
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr; // sorting by price alone satisfys the test?
};

// sort catArt by designed by
const catArtSortDesginedByA = (arr) => {
  let didISwap = true;
  while (didISwap) {
    didISwap = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].designedBy > arr[i + 1].designedBy) {
        didISwap = true;
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
};

// sort catArt by price
//prices are either normal numbers, number strings, or strings with ♇♇ in the beginning. need to check if its an integer or not and slice out the ♇♇ if needed before sorting.

// multiply ♇♇ prices by 10

//need to format price in a separate func in refactoring maybe?

const catArtSortByPriceA = (arr) => {
  let didISwap = true;
  while (didISwap) {
    didISwap = false;
    for (let i = 0; i < arr.length - 1; i++) {
      let numPrice = Number(arr[i].price);
      let nextNumPrice = Number(arr[i + 1].price);
      if (isNaN(numPrice)) {
        numPrice = Number(arr[i].price.slice(2) * 10);
      }
      if (isNaN(nextNumPrice)) {
        nextNumPrice = Number(arr[i + 1].price.slice(2) * 10);
      }

      if (numPrice > nextNumPrice) {
        didISwap = true;
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
};

// Create your own sort function
// it should sort in ascending order
// it should work for numbers or words (case sensitive)
// create your own sort algorithm
// or try to implement bubble sort
// or try to implement merge sort
// or look up another common sort algorithm (i.e. quicksort, ) and try your own implementation
// Bonus add another argument that would allow the function to be used for ascending or descending order
const mySortFunction = (arr) => {
  let didISwap = true;
  while (didISwap) {
    didISwap = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        didISwap = true;
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
};

module.exports = {
  sortNumsA,
  sortNumsD,
  sortWordsA,
  sortWordsD,
  sortProductNamesA,
  sortProductPriceA,
  sortProductPriceD,
  sortProducsPriceNameA,
  catArtSortDesginedByA,
  catArtSortByPriceA,
  mySortFunction,
};
