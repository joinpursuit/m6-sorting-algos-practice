const { catArt, someNums, someProducts, someWords } = require('./data/data.js');

// sort numbers in ascending order
const sortNumsA = (someNums) => {
  do {
    swapped = false;
    for (let i = 0; i < someNums.length; i++) {
      if (someNums[i] > someNums[i + 1]) {
        [someNums[i], someNums[i + 1]] = [someNums[i + 1], someNums[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return someNums;
};
//console.log(sortNumsA(someNums));
// sort numbers in descending order
const sortNumsD = (someNums) => {
  do {
    swapped = false;
    for (let i = 0; i < someNums.length; i++) {
      if (someNums[i] < someNums[i + 1]) {
        [someNums[i], someNums[i + 1]] = [someNums[i + 1], someNums[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return someNums;
};
//console.log(sortNumsD(someNums));
// sort words in ascending order case sensitive
const sortWordsA = (someWords) => {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < someWords.length - 1; i++) {
      if (someWords[i] > someWords[i + 1]) {
        [someWords[i], someWords[i + 1]] = [someWords[i + 1], someWords[i]];
        swapped = true;
      }
    }
  }
  {
    return someWords;
  }
};
//console.log(sortWordsA(someWords));
// sort words in descending order case insensitive
const sortWordsD = (someWords) => {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < someWords.length - 1; i++) {
      if (someWords[i].toUpperCase() < someWords[i + 1].toUpperCase()) {
        [someWords[i], someWords[i + 1]] = [someWords[i + 1], someWords[i]];
        swapped = true;
      }
    }
  }

  return someWords;
};
//console.log(sortWordsD(someWords));
// sort products by name, ascending order case insensitive
const sortProductNamesA = (someProducts) => {
  do {
    swapped = false;
    for (let i = 0; i < someProducts.length - 1; i++) {
      if (
        someProducts[i].name.toUpperCase() >
        someProducts[i + 1].name.toUpperCase()
      ) {
        [someProducts[i], someProducts[i + 1]] = [
          someProducts[i + 1],
          someProducts[i],
        ];
        swapped = true;
      }
    }
  } while (swapped);
  {
    return someProducts;
  }
};
console.log(sortProductNamesA(someProducts));
// sort products by price, ascending order
const sortProductPriceA = (someProducts) => {
  do {
    swapped = false;
    for (let i = 0; i < someProducts.length - 1; i++) {
      if (someProducts[i].price > someProducts[i + 1].price) {
        [someProducts[i], someProducts[i + 1]] = [
          someProducts[i + 1],
          someProducts[i],
        ];
        swapped = true;
      }
    }
  } while (swapped);
  {
    return someProducts;
  }
};

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
