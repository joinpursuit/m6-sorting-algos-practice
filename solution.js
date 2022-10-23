const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (numbers) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    for (let i = 0; i < numbers.length - 1; i++) {
      if (numbers[i] > numbers[i + 1]) {
        [numbers[i], numbers[i + 1]] = [numbers[i + 1], numbers[i]];
        unsorted = true;
      }
    }
  }
  return numbers;
};

// sort numbers in descending order
const sortNumsD = (numbers) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    for (let i = 0; i < numbers.length - 1; i++) {
      if (numbers[i] < numbers[i + 1]) {
        [numbers[i], numbers[i + 1]] = [numbers[i + 1], numbers[i]];
        unsorted = true;
      }
    }
  }
  return numbers;
};

// sort words in ascending order case sensitive
const sortWordsA = (words) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    for (let i = 0; i < words.length - 1; i++) {
      if (words[i][0] > words[i + 1][0]) {
        [words[i], words[i + 1]] = [words[i + 1], words[i]];
        unsorted = true;
      }
    }
  }
  return words;
};

// sort words in descending order case insensitive
const sortWordsD = (words) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    for (let i = 0; i < words.length - 1; i++) {
      if (words[i].toLowerCase() < words[i + 1].toLowerCase()) {
        // if the word is "less than" the next word...
        [words[i], words[i + 1]] = [words[i + 1], words[i]];
        unsorted = true;
      }
    }
  }
  return words;
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (someProducts) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    for (let i = 0; i < someProducts.length - 1; i++) {
      if (
        someProducts[i].name.toLowerCase() >
        someProducts[i + 1].name.toLowerCase()
      ) {
        [someProducts[i], someProducts[i + 1]] = [
          someProducts[i + 1],
          someProducts[i],
        ];
        unsorted = true;
      }
    }
  }
  return someProducts;
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
const catArtSortByPriceA = (catArt) => {
  let unsorted = true;
  while (unsorted) {
    
  }
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
