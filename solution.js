const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (someNums) => {
  
  // Implementing bubble sort
  for (let i = 0; i < someNums.length; i++) {
    for (let j = 0; j < someNums.length; j++) {
      //
      if (someNums[j] > someNums[j + 1]) {
        let temp = someNums[j];
        someNums[j] = someNums[j + 1];
        someNums[j + 1] = temp;
      }
    }
  }
  return someNums;
};

// sort numbers in descending order
const sortNumsD = (someNums) => {
  
  console.log(someNums)
  // Implementing bubble sort
  for (let i = 0; i < someNums.length; i++) {
    for (let j = 0; j < someNums.length; j++) {
      if (someNums[j] < someNums[j + 1]) {
        let temp = someNums[j];
        someNums[j] = someNums[j + 1];
        someNums[j + 1] = temp;
      }
    }
  }
  console.log(someNums)
  return someNums;
};

// sort words in ascending order case sensitive
const sortWordsA = (someWords) => {
  return someWords.sort();
};

// sort words in descending order case insensitive
const sortWordsD = (someWords) => {
  return someWords.sort((a, b) => {
    if (a.toLowerCase() > b.toLowerCase()) {
      return -1;
    } else {
      return 1;
    }
  });
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (someProducts) => {
  return someWords.sort((a,b) => {
    let left = a.toUpperCase();
    let right = b.toUpperCase();

    return (left === right) ? 0 : left > right ? 1 : -1;
  })
    
};

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
