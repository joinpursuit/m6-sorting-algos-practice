const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

const swap = (arr, index1, index2) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
};

// sort numbers in ascending order
const sortNumsA = (someNums) => {
  let swapped = true;
  while (swapped) {
    // when it is true, the while loop will run
    swapped = false; // we want to check whether we're going to swap or not
    for (let i = 0; i < someNums.length - 1; i++) {
      if (someNums[i].toString() > someNums[i + 1].toString()) {
        // checking
        swap(someNums, i, i + 1);
        swapped = true; //
      }
    }
  }
  return someNums;
};

// sort numbers in descending order
const sortNumsD = (someNums) => {
  let swapped = true;
  while (swapped) {
    // when it is true, the while loop will run
    swapped = false; // we want to check whether we're going to swap or not
    for (let i = 0; i < someNums.length - 1; i++) {
      if (someNums[i] < someNums[i + 1]) {
        // checking
        swap(someNums, i, i + 1);
        swapped = true; //
      }
    }
  }
  return someNums;
};

// sort words in ascending order case sensitive
const sortWordsA = () => {};

// sort words in descending order case insensitive
const sortWordsD = () => {};

// sort products by name, ascending order case insensitive
const sortProductNamesA = () => {};

// sort products by price, ascending order
const sortProductPriceA = () => {};

// sort products by price, descending order
const sortProductPriceD = () => {};

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
