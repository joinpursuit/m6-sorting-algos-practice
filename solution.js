const { catArt, someNums, someProducts, someWords } = require('./data/data.js');

// sort numbers in ascending order using the while loop
const sortNumsA = (arr) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    for (let i = 0; i < arr.length - 1; i++) {
      //Logic to sort items in ascending order
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        unsorted = true;
      }
    }
  }
  return arr;
};

//sort numbers in descending order using the while loop
const sortNumsD = (arr) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    for (let i = 0; i < arr.length - 1; i++) {
      //Logic to sort items in descending order
      if (arr[i] < arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        unsorted = true;
      }
    }
  }
  return arr;
};

// sort array of words in ascending order (case sensitive)
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

// sort array of words in descending order (case insensitive)
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
      if (arr[i].name.toLowerCase() > arr[i + 1].name.toLowerCase()) {
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

//sort catArt by price
//First, create a helper function to convert the price from strings to numbers
const formatPrice = (price) => {
  if (Number.isNaN(Number(price))) {
    return Number(price.slice(2)) * 10;
  }
  return Number(price);
};

const catArtSortByPriceA = (arr) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    for (let i = 0; i < arr.length - 1; i++) {
      //Use the formatPrice function to convert strings to numbers
      if (formatPrice(arr[i].price) > formatPrice(arr[i + 1].price)) {
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

//Create a Bubble Sort function using the while loop:
const mySortFunction = (arr) => {
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
