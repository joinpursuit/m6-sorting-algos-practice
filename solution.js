const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (num) => {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < num.length - 1; i++) {
      if (num[i] > num[i + 1]) {
        [num[i], num[i + 1]] = [num[i + 1], num[i]];
        swapped = true;
      }
    }
  }
  return num;
};

// sort numbers in descending order
const sortNumsD = (num) => {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < num.length - 1; i++) {
      if (num[i] < num[i + 1]) {
        [num[i], num[i + 1]] = [num[i + 1], num[i]];
        swapped = true;
      }
    }
  }
  return num;
};

// sort words in ascending order case sensitive
const sortWordsA = (words) => {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < words.length - 1; i++) {
      if (words[i] > words[i + 1]) {
        [words[i], words[i + 1]] = [words[i + 1], words[i]];
        swapped = true;
      }
    }
  }
  return words;
};

// sort words in descending order case insensitive
const sortWordsD = (words) => {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < words.length - 1; i++) {
      if (words[i].toLowerCase() < words[i + 1].toLowerCase()) {
        [words[i], words[i + 1]] = [words[i + 1], words[i]];
        swapped = true;
      }
    }
  }
  return words;
};
// sort products by name, ascending order case insensitive
const sortProductNamesA = (products) => {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < products.length - 1; i++) {
      if (products[i].name.toLowerCase() > products[i + 1].name.toLowerCase()) {
        [products[i], products[i + 1]] = [products[i + 1], products[i]];
        swapped = true;
      }
    }
  }
  return products;
};

// sort products by price, ascending order
const sortProductPriceA = (products) => {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < products.length - 1; i++) {
      if (products[i].price > products[i + 1].price) {
        [products[i], products[i + 1]] = [products[i + 1], products[i]];
        swapped = true;
      }
    }
  }
  return products;
};

// sort products by price, descending order
const sortProductPriceD = (products) => {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < products.length - 1; i++) {
      if (products[i].price < products[i + 1].price) {
        [products[i], products[i + 1]] = [products[i + 1], products[i]];
        swapped = true;
      }
    }
  }
  return products;
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (products) => {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < products.length - 1; i++) {
      if (products[i].price > products[i + 1].price) {
        [products[i], products[i + 1]] = [products[i + 1], products[i]];
        swapped = true;
      }
    }
  }
  return products;
};

// sort catArt by designed by
const catArtSortDesginedByA = (art) => {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < art.length - 1; i++) {
      if (art[i].designedBy > art[i + 1].designedBy) {
        [art[i], art[i + 1]] = [art[i + 1], art[i]];
        swapped = true;
      }
    }
  }
  return art;
};

// sort catArt by price
const catArtSortByPriceA = (art) => {
  let fixThatPrice = (price) => {
    if (typeof price === "string") {
      if (price[0] == "♇") {
        return price[price.length - 1] * 10;
      }
      return price * 1;
    }
    return price;
  };
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let n = 0; n < art.length - 1; n++) {
      if (fixThatPrice(art[n].price) > fixThatPrice(art[n + 1].price)) {
        [art[n], art[n + 1]] = [art[n + 1], art[n]];
        swapped = true;
      }
    }
  }
  return art;
};

// Create your own sort function
// it should sort in ascending order
// it should work for numbers or words (case sensitive)
// create your own sort algorithm
// or try to implement bubble sort
// or try to implement merge sort
// or look up another common sort algorithm (i.e. quicksort, ) and try your own implementation
// Bonus add another argument that would allow the function to be used for ascending or descending order
const mySortFunction = (sort) => {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < sort.length - 1; i++) {
      if (sort[i] > sort[i + 1]) {
        [sort[i], sort[i + 1]] = [sort[i + 1], sort[i]];
        swapped = true;
      }
    }
  }
  return sort;
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
