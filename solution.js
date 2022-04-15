const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const swap = (arr, i1, i2) => {
  const temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
};

const sortNumsA = (arr) => {
  let swapped = true;

  while (swapped) {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        swapped = true;
      }
    }
  }
  return arr;
};

// sort numbers in descending order
const sortNumsD = (arr) => {
  let swapped = true;

  while (swapped) {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < arr[i + 1]) {
        swap(arr, i, i + 1);
        swapped = true;
      }
    }
  }
  return arr;
};
// sort words in ascending order case sensitive
const sortWordsA = () => {
  let swapIt = true;
  while (swapIt) {
    swapIt = false;
    for (let i = 0; i < someWords.length; i++) {
      if (someWords[i] > someWords[i + 1]) {
        swap(someWords, i, i + 1);
        swapIt = true;
      }
    }
  }

  return someWords;
};

// sort words in descending order case insensitive
const sortWordsD = () => {
  let swapIt = true;
  while (swapIt) {
    swapIt = false;
    for (let i = 0; i < someWords.length - 1; i++) {
      if (someWords[i].toLowerCase() < someWords[i + 1].toLowerCase()) {
        swap(someWords, i, i + 1);
        swapIt = true;
      }
    }
  }

  return someWords;
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = () => {
  let swapIt = true;
  while (swapIt) {
    swapIt = false;
    for (let i = 0; i < someProducts.length - 1; i++) {
      if (
        someProducts[i].name.toLowerCase() >
        someProducts[i + 1].name.toLowerCase()
      ) {
        swap(someProducts, i, i + 1);
        swapIt = true;
      }
    }
  }

  return someProducts;
};

// sort products by price, ascending order
const sortProductPriceA = () => {
  let swapIt = true;
  while (swapIt) {
    swapIt = false;
    for (let i = 0; i < someProducts.length - 1; i++) {
      if (someProducts[i].price > someProducts[i + 1].price) {
        swap(someProducts, i, i + 1);
        swapIt = true;
      }
    }
  }

  return someProducts;
};

// sort products by price, descending order
const convertPrice = (price) => {
  let newPrice = Number(price);
  if (isNaN(newPrice)) {
    newPrice = Number(price.substr(2) * 10);
  }
  return newPrice;
};

const sortProductPriceD = () => {
  let swapIt = true;
  while (swapIt) {
    swapIt = false;
    for (let i = 0; i < someProducts.length - 1; i++) {
      if (someProducts[i].price < someProducts[i + 1].price) {
        swap(someProducts, i, i + 1);
        swapIt = true;
      }
    }
  }

  return someProducts;
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = () => {
  let swapIt = true;
  while (swapIt) {
    swapIt = false;
    for (let i = 0; i < someProducts.length - 1; i++) {
      if (someProducts[i].price > someProducts[i + 1].price) {
        swap(someProducts, i, i + 1);
        swapIt = true;
      }
    }
  }

  return someProducts;
};

// sort catArt by designed by
const catArtSortDesginedByA = () => {
  let swapIt = true;
  while (swapIt) {
    swapIt = false;
    for (let i = 0; i < catArt.length - 1; i++) {
      if (catArt[i].designedBy > catArt[i + 1].designedBy) {
        swap(catArt, i, i + 1);
        swapIt = true;
      }
    }
  }

  return catArt;
};

// sort catArt by price
const catArtSortByPriceA = (price) => {
  let swapIt = true;
  while (swapIt) {
    swapIt = false;
    for (let i = 0; i < catArt.length - 1; i++) {
      if (convertPrice(catArt[i].price) > convertPrice(catArt[i + 1].price)) {
        swap(catArt, i, i + 1);
        swapIt = true;
      }
    }
  }

  return catArt;
};

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
