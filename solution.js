const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (array) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        unsorted = true;
      }
    }
  }
  return array;
};

// sort numbers in descending order
const sortNumsD = (array) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] < array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        unsorted = true;
      }
    }
  }
  return array;
};

// sort words in ascending order case sensitive
const sortWordsA = (array) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        unsorted = true;
      }
    }
  }
  return array;
};

// sort words in descending order case insensitive
const sortWordsD = (array) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i].toUpperCase() < array[i + 1].toUpperCase()) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        unsorted = true;
      }
    }
  }
  return array;
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (array) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i].name > array[i + 1].name) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        unsorted = true;
      }
    }
  }
  return array;
};

// sort products by price, ascending order
const sortProductPriceA = (array) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i].price > array[i + 1].price) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        unsorted = true;
      }
    }
  }
  return array;
};

// sort products by price, descending order
const sortProductPriceD = (array) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i].price < array[i + 1].price) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        unsorted = true;
      }
    }
  }
  return array;
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (array) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i].price > array[i + 1].price) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        unsorted = true;
      }
    }
  }
  return array;
};

// sort catArt by designed by
const catArtSortDesginedByA = (array) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i].designedBy > array[i + 1].designedBy) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        unsorted = true;
      }
    }
  }
  return array;
};

// sort catArt by price
const catArtSortByPriceA = (array) => {
  let unsorted = true;
  let converterA = 0;
  let converterB = 0;
  while (unsorted) {
    unsorted = false;

    for (let i = 0; i < array.length - 1; i++) {
      // console.log(array[i].price)
      if (typeof array[i].price === "string") {
        // console.log(!Number(array[i].price))
        if (Number(array[i].price)) {
          converterA = Number(array[i].price);
        } else if (!Number(array[i].price)) {
          converterA = Number(array[i].price.slice(2)) * 10;
        } 
      } else {
        converterA = array[i].price;
      }

      if (typeof array[i + 1].price === "string") {
        // console.log(array[i].price.slice(2))
        if (Number(array[i + 1].price)) {
          converterB = Number(array[i + 1].price);
        } else if (!Number(array[i].price)) {
          converterB = Number(array[i + 1].price.slice(2)) * 10;
        } 
      } else {
        converterB = array[i + 1].price;
      }

      if (converterA > converterB) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        unsorted = true;
      }
    }
  }
  return array;
};

// Create your own sort function
// it should sort in ascending order
// it should work for numbers or words (case sensitive)
// create your own sort algorithm
// or try to implement bubble sort
// or try to implement merge sort
// or look up another common sort algorithm (i.e. quicksort, ) and try your own implementation
// Bonus add another argument that would allow the function to be used for ascending or descending order
const mySortFunction = (array) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        unsorted = true;
      }
    }
  }
  return array;
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
