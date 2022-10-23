const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (arr) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        unsorted = true;
      }
    }
  }
  return arr;
};

// sort numbers in descending order
const sortNumsD = (arr) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        unsorted = true;
      }
    }
  }
  return arr;
};

// sort words in ascending order case sensitive
const sortWordsA = (arr) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        unsorted = true;
      }
    }
  }
  return arr;
};

// sort words in descending order case insensitive
const sortWordsD = (arr) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].toLowerCase() < arr[i + 1].toLowerCase()) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        unsorted = true;
      }
    }
  }
  return arr;
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (arr) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].name > arr[i + 1].name) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        unsorted = true;
      }
    }
  }
  return arr;
};

// sort products by price, ascending order
const sortProductPriceA = (arr) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].price > arr[i + 1].price) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        unsorted = true;
      }
    }
  }
  return arr;
};

// sort products by price, descending order
const sortProductPriceD = (arr) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].price < arr[i + 1].price) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        unsorted = true;
      }
    }
  }
  return arr;
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (arr) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].price > arr[i + 1].price) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        unsorted = true;
      }
    }
  }
      while (unsorted) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].name > arr[i + 1].name) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        unsorted = true;
      }
      }
    }
    return arr;
  };

// sort catArt by designed by
const catArtSortDesginedByA = (arr) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].designedBy > arr[i + 1].designedBy) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        unsorted = true;
      }
    }
  }
  return arr;
};

// sort catArt by price
const convertPrice = (price) => {
  if(Number.isNaN(Number(price))){
    return (Number(price.slice(2)) * 10)
  }
  return Number(price)
}

const catArtSortByPriceA = (arr) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (convertPrice(arr[i].price) > convertPrice(arr[i + 1].price)) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        unsorted = true;
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
const mySortFunction = (input) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    for (let i = 0; i < input.length - 1; i++) {
      if (input[i] > input[i + 1]) {
        [input[i], input[i + 1]] = [input[i + 1], input[i]];
        unsorted = true;
      }
    }
  }
  return input;
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
