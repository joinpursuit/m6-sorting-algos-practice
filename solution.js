const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (someNums) => {
  return someNums.sort(function (a, b) {
    return a - b;
  });
};

// sort numbers in descending order
const sortNumsD = (someNums) => {
  return someNums.sort(function (a, b) {
    return b - a;
  });
};

// sort words in ascending order case sensitive
const sortWordsA = (someWords) => {
  return someWords.sort();
  // console.log(someWords.sort())
};

// sort words in descending order case insensitive
const sortWordsD = (someWords) => {
  return someWords.sort(function (a, b) {
    if (a.toUpperCase() > b.toUpperCase()) return -1;
    if (a.toLowerCase() < b.toLowerCase()) return 1;
    return 0;
  });
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (someProducts) => {
  return someProducts.sort(function (a, b) {
    if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    return 0;
  });
};

// sort products by price, ascending order
const sortProductPriceA = (someProducts) => {
  return someProducts.sort(function (a, b) {
    if (a.price > b.price) return 1;
    if (a.price < b.price) return -1;
    return 0;
  });
};

// sort products by price, descending order
const sortProductPriceD = (someProducts) => {
  return someProducts.sort(function (a, b) {
    if (a.price > b.price) return -1;
    if (a.price < b.price) return 1;
    return 0;
  });
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (someProducts) => {
  //price
  return someProducts.sort(function (a, b) {
    if (a.price > b.price) return 1;
    if (a.price < b.price) return -1;
    return 0;
  });
};

// sort catArt by designed by
const catArtSortDesginedByA = (catArt) => {
  return catArt.sort(function (a, b) {
    if (a.designedBy > b.designedBy) return 1;
    if (a.designedBy < b.designedBy) return -1;
    return 0;
  });
};

const convertCoin = (price) => {
  if (Number.isNaN(Number(price))) {
    return Number(price.slice(2)) * 10;
  }
  return Number(price);
};

const catArtSortByPriceA = (catArt) => {
  return catArt.sort(function (a, b) {
    if (convertCoin(a.price) > convertCoin(b.price)) return 1;
    if (convertCoin(a.price) < convertCoin(b.price)) return -1;
    return 0;
  });
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
