const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (someNums) => {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < someNums.length - 1; i++) {
      if (someNums[i] > someNums[i + 1]) {
        swap(someNums, i, i + 1);
        swapped = true;
      }
    }
  }
  return someNums;
};

// sort numbers in descending order
const sortNumsD = (someNums) => {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < someNums.length - 1; i++) {
      if (someNums[i] < someNums[i + 1]) {
        swap(someNums, i, i + 1);
        swapped = true;
      }
    }
  }
  return someNums;
};

// sort words in ascending order case sensitive
const sortWordsA = (someWords) => {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < someWords.length - 1; i++) {
      if (someWords[i] > someWords[i + 1]) {
        swap(someWords, i, i + 1);
        swapped = true;
      }
    }
  }
  return someWords;
};

// sort words in descending order case insensitive
const sortWordsD = (someWords) => {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < someWords.length - 1; i++) {
      if (someWords[i].toLowerCase() < someWords[i + 1].toLowerCase()) {
        swap(someWords, i, i + 1);
        swapped = true;
      }
    }
  }
  return someWords;
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (someProducts) => {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < someProducts.length - 1; i++) {
      if (someProducts[i].name > someProducts[i + 1].name) {
        swap(someProducts, i, i + 1);
        swapped = true;
      }
    }
  }
  return someProducts;
};

// sort products by price, ascending order
const sortProductPriceA = (someProducts) => {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < someProducts.length - 1; i++) {
      if (someProducts[i].price > someProducts[i + 1].price) {
        swap(someProducts, i, i + 1);
        swapped = true;
      }
    }
  }
  return someProducts;
};

// sort products by price, descending order
const sortProductPriceD = (someProducts) => {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < someProducts.length - 1; i++) {
      if (someProducts[i].price < someProducts[i + 1].price) {
        swap(someProducts, i, i + 1);
        swapped = true;
      }
    }
  }
  return someProducts;
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (someProducts) => {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < someProducts.length - 1; i++)
      if (someProducts[i].price > someProducts[i + 1].price) {
        swap(someProducts, i, i + 1);
        swapped = true;
      } else if (
        someProducts[i].price === someProducts[i + 1].price &&
        someProducts[i].name > someProducts[i + 1].name
      ) {
        swap(someProducts, i, i + 1);
      }
  }
  return someProducts;
};

// sort catArt by designed by
const catArtSortDesginedByA = (catArt) => {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < catArt.length - 1; i++) {
      if (catArt[i].designedBy > catArt[i + 1].designedBy) {
        swap(catArt, i, i + 1);
        swapped = true;
      }
    }
  }
  return catArt;
};

// sort catArt by price
const catArtSortByPriceA = (catArt) => {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < catArt.length - 1; i++) {
      const currentPrice = priceConverter(catArt[i].price);
      const NextPrice = priceConverter(catArt[i + 1].price);
      if (currentPrice > NextPrice) {
        swap(catArt, i, i + 1);
        swapped = true;
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

// Helper functions

const swap = (arr, index1, index2) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
};

const priceConverter = (price) => {
  const newPrice = Number(price);
  if (Number.isNaN(newPrice)) {
    return Number(price.slice(2)) * 10;
  }
  return newPrice;
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
