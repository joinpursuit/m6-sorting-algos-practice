const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (array) => {
  let sortedNumber = true;
  while (sortedNumber) {
    sortedNumber = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        let tempNum = array[i];
        array[i] = array[i + 1];
        array[i + 1] = tempNum;
        sortedNumber = true;
      }
    }
  }
  return array;
};

// sort numbers in descending order
const sortNumsD = (array) => {
  sortNumsA(array);
  return array.reverse();
};

// sort words in ascending order case sensitive
const sortWordsA = (array) => {
  let sortedChar = true;
  while (sortedChar) {
    sortedChar = false;
    for (let i = 0; i < array.length; i++) {
      if (
        array[i] > array[i + 1] &&
        array[i][0] !== array[i][0].toUpperCase()
      ) {
        let tempChar = array[i];
        array[i] = array[i + 1];
        array[i + 1] = tempChar;
        sortedChar = true;
      }
    }
  }
  return array;
};

// sort words in descending order case insensitive
const sortWordsD = (array) => {
  let sortedChar = true;
  while (sortedChar) {
    sortedChar = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i + 1] && array[i].toLowerCase() < array[i + 1].toLowerCase()) {
        let tempChar = array[i];
        array[i] = array[i + 1];
        array[i + 1] = tempChar;
        sortedChar = true;
      }
    }
  }
  return array;
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (array) => {
  let sortedChar = true;
  while (sortedChar) {
    sortedChar = false;
    for (let i = 0; i < array.length; i++) {
      if (
        array[i + 1] &&
        array[i].name.toLowerCase() > array[i + 1].name.toLowerCase()
      ) {
        let tempChar = array[i];
        array[i] = array[i + 1];
        array[i + 1] = tempChar;
        sortedChar = true;
      }
    }
  }
  return array;
};

// sort products by price, ascending order
const sortProductPriceA = (array) => {
  let sortedNumber = true;
  while (sortedNumber) {
    sortedNumber = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i + 1] && array[i].price > array[i + 1].price) {
        let tempNum = array[i];
        array[i] = array[i + 1];
        array[i + 1] = tempNum;
        sortedNumber = true;
      }
    }
  }
  return array;
};

// sort products by price, descending order
const sortProductPriceD = (array) => {
  let sortedNumber = true;
  while (sortedNumber) {
    sortedNumber = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i + 1] && array[i].price < array[i + 1].price) {
        let tempNum = array[i];
        array[i] = array[i + 1];
        array[i + 1] = tempNum;
        sortedNumber = true;
      }
    }
  }
  return array;
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (array) => {
  let sortedProduct = true;
  while (sortedProduct) {
    sortedProduct = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i + 1] && array[i].price > array[i + 1].price) {
        let tempNum = array[i];
        array[i] = array[i + 1];
        array[i + 1] = tempNum;
        sortedProduct = true;
      } else if (array[i + 1] && array[i].price === array[i + 1].price) {
        if (array[i].name.toLowerCase() > array[i + 1].name.toLowerCase()) {
          let tempChar = array[i];
          array[i] = array[i + 1];
          array[i + 1] = tempChar;
          sortedProduct = true;
        }
      }
    }
  }
  return array;
};

// sort catArt by designed by
const catArtSortDesginedByA = (array) => {
  let sortedArt = true;
  while (sortedArt) {
    sortedArt = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i + 1] && array[i].designedBy > array[i + 1].designedBy) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        sortedArt = true;
      }
    }
  }
  return array;
};

function convertPlutoCoin(price) {
  let plutoCoin = price.toString();
  if (plutoCoin.includes("♇♇")) {
    return 10 * parseInt(plutoCoin.slice(2));
  }
  return price;
}

// sort catArt by price
const catArtSortByPriceA = (array) => {
  let sortedArt = true;
  while (sortedArt) {
    sortedArt = false;
    for (let i = 0; i < array.length; i++) {
      if (
        array[i + 1] &&
        convertPlutoCoin(array[i].price) > convertPlutoCoin(array[i + 1].price)
      ) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        sortedArt = true;
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
  let sortedItem = true;
  while (sortedItem) {
    sortedItem = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        sortedItem = true;
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
