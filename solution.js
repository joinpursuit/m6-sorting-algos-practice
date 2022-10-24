const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (nums) => {
  return nums.sort((a, b) => a - b);
};

// sort numbers in descending order
const sortNumsD = (nums) => {
  return nums.sort((a, b) => b - a);
};

// sort words in ascending order case sensitive
const sortWordsA = (array) => {
  return array.sort();
};

// sort words in descending order case insensitive
const sortWordsD = (array) => {
  return array.sort(function (a, b) {
    if (a.toLowerCase() < b.toLowerCase()) {
      return 1;
    }
    if (a.toLowerCase() > b.toLowerCase()) {
      return -1;
    }
    // names must be equal
    return 0;
  });
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (array) => {
  return array.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    // names must be equal
    return 0;
  });
};

// sort products by price, ascending order
const sortProductPriceA = (array) => {
  return array.sort((a, b) => a.price - b.price);
};

// sort products by price, descending order
const sortProductPriceD = (array) => {
  return array.sort((a, b) => b.price - a.price);
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (array) => {
  return array.sort((a, b) => a.price - b.price);
};

// sort catArt by designed by
const catArtSortDesginedByA = (array) => {
  return array.sort(function (a, b) {
    if (a.designedBy < b.designedBy) {
      return -1;
    }
    if (a.designedBy > b.designedBy) {
      return 1;
    }
    // names must be equal
    return 0;
  });
};

// sort catArt by price
//mapped with new variable Sortable Price, sorted by that variable and mapped again to remove.
const catArtSortByPriceA = (array) => {
  let mapped = array
    .map((e) => {
      let sortablePrice = isNaN(e.price)
        ? Number(e.price[2]) * 10
        : Number(e.price);
      return { ...e, sortablePrice };
    })
    .sort((a, b) => a.sortablePrice - b.sortablePrice)
    .map(({ sortablePrice, ...rest }) => {
      return rest;
    });
  return mapped;
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
      /// ternary logic set it variables temp
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
