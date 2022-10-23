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

// sort products by name, ascending order case insensitive
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

// sort products by price, ascending order
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

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = () => {};

// sort catArt by designed by
const catArtSortDesginedByA = () => {};

// sort catArt by price
const catArtSortByPriceA = () => {};

// Create your own sort function
// it should sort in ascending order
// it should work for numbers or words (case sensitive)
// create your own sort algorithm
// or try to implement bubble sort
// or try to implement merge sort
// or look up another common sort algorithm (i.e. quicksort, ) and try your own implementation
// Bonus add another argument that would allow the function to be used for ascending or descending order
const mySortFunction = () => {};

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
