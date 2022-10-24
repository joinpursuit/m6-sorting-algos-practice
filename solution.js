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
const sortProductNamesA = (products) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    for (let i = 0; i < products.length - 1; i++) {
      if (products[i].name.toLowerCase() > products[i + 1].name.toLowerCase()) {
        [products[i], products[i + 1]] = [products[i + 1], products[i]];
        unsorted = true;
      }
    }
  }
  return products;
};

// sort products by price, ascending order
const sortProductPriceA = (products) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    for (let i = 0; i < products.length - 1; i++) {
      if (products[i].price > products[i + 1].price) {
        [products[i], products[i + 1]] = [products[i + 1], products[i]];
        unsorted = true;
      }
    }
  }
  return products;
};

// sort products by price, descending order
const sortProductPriceD = (products) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    for (let i = 0; i < products.length - 1; i++) {
      if (products[i].price < products[i + 1].price) {
        [products[i], products[i + 1]] = [products[i + 1], products[i]];
        unsorted = true;
      }
    }
  }
  return products;
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (products) => {
  let priceSorted = sortProductPriceA(products);
  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    for (i = 0; i < priceSorted.length - 1; i++) {
      if (priceSorted[i].price === priceSorted[i + 1].price) {
        // a check to see if two items have the same price
        if (priceSorted[i].name > priceSorted[i + 1].name) {
          // a check to see which name belongs where alphabetically
          [priceSorted[i], priceSorted[i + 1]] = [
            priceSorted[i + 1],
            priceSorted[i],
          ];
          unsorted = true;
        }
      }
    }
  }
  return priceSorted;
};

// sort catArt by designed by
const catArtSortDesginedByA = (art) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    for (let i = 0; i < art.length - 1; i++) {
      if (art[i].designedBy > art[i + 1].designedBy) {
        [art[i], art[i + 1]] = [art[i + 1], art[i]];
        unsorted = true;
      }
    }
  }
  return art;
};

// sort catArt by price
const catArtSortByPriceA = (catArt) => {
  // let unsorted = true;
  // while (unsorted) {}
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
