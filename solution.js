const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order [ok]
const sortNumsA = (someNums) => {
  
  // Implementing bubble sort
  for (let i = 0; i < someNums.length; i++) {
    for (let j = i + 1; j < someNums.length; j++) {
      // Comparing the current element with the next
      if (someNums[i] > someNums[j]) {
        // If the current is greater, 
        // We need to hold it in a temp variable
        temp = someNums[i];
        // Then proceed to switch values, assigning to the next the current greater
        // And the current the next value
        someNums[i] = someNums[j];
        someNums[j] = temp;
      }
    }
  }
  return someNums;
};

// sort numbers in descending order [ok]
const sortNumsD = (someNums) => {
  
  // Implementing bubble sort
  for (let i = 0; i < someNums.length; i++) {
    for (let j = i + 1; j < someNums.length; j++) {
      // Comparing the current element with the next
      if (someNums[i] < someNums[j]) {
        // If the current is greater, 
        // We need to hold it in a temp variable
        temp = someNums[i];
        // Then proceed to switch values, assigning to the next the current greater
        // And the current the next value
        someNums[i] = someNums[j];
        someNums[j] = temp;
      }
    }
  }
  return someNums;
};

// sort words in ascending order case sensitive [ok]
const sortWordsA = (someWords) => {

  for (let i = 0; i < someWords.length; i++) {
    for (let j = i + 1; j < someWords.length; j++) {
      // Comparing the current element with the next
      if (someWords[i] > someWords[j]) {
        // If the current is greater, 
        // We need to hold it in a temp variable
        temp = someWords[i];
        // Then proceed to switch values, assigning to the next the current greater
        // And the current the next value
        someWords[i] = someWords[j];
        someWords[j] = temp;
      }
    }
  }
  return someWords;
};

// sort words in descending order case insensitive
const sortWordsD = (someWords) => {

  for (let i = 0; i < someWords.length; i++) {
    for (let j = i + 1; j < someWords.length; j++) {
      // Assigning each word passing to caps into lower letters 
      let a = someWords[i].toLowerCase();
      let b = someWords[j].toLowerCase();

      if (a < b) {
        // If the current is greater, 
        // We need to hold it in a temp variable
        temp = someWords[i];
        // Then proceed to switch values, assigning to the next the current greater
        // And the current the next value
        someWords[i] = someWords[j];
        someWords[j] = temp;
      }
    }
  }
  return someWords;  
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
