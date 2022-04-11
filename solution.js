const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (nums) => {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i].toString() > nums[i + 1].toString()) {
        swapped = true;
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
      }
    }
  }
  return nums;
};

// sort numbers in descending order
const sortNumsD = (nums) => {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] < nums[i + 1]) {
        swapped = true;
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
      }
    }
  }
  return nums;
};

// sort words in ascending order case sensitive
const sortWordsA = (words) => {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < words.length - 1; i++) {
      if (words[i] > words[i + 1]) {
        swapped = true;
        [words[i], words[i + 1]] = [words[i + 1], words[i]];
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
        swapped = true;
        [words[i], words[i + 1]] = [words[i + 1], words[i]];
      }
    }
  }
  return words;
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (catArt) => {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < catArt.length - 1; i++) {
      if (catArt[i].name > catArt[i + 1].name) {
        swapped = true;
        [catArt[i], catArt[i + 1]] = [catArt[i + 1], catArt[i]];
      }
    }
  }
  return catArt;
};

// sort products by price, ascending order
const sortProductPriceA = (catArt) => {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < catArt.length - 1; i++) {
      if (catArt[i].price > catArt[i + 1].price) {
        swapped = true;
        [catArt[i], catArt[i + 1]] = [catArt[i + 1], catArt[i]];
      }
    }
  }
  return catArt;
};

// sort products by price, descending order
const sortProductPriceD = (catArt) => {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < catArt.length - 1; i++) {
      if (catArt[i].price < catArt[i + 1].price) {
        swapped = true;
        [catArt[i], catArt[i + 1]] = [catArt[i + 1], catArt[i]];
      }
    }
  }
  return catArt;
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (catArt) => {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < catArt.length - 1; i++) {
      if (catArt[i].price > catArt[i + 1].price) {
        swapped = true;
        [catArt[i], catArt[i + 1]] = [catArt[i + 1], catArt[i]];
      } else if (catArt[i].price === catArt[i + 1].price) {
        if (catArt[i].name > catArt[i + 1].name) {
          [catArt[i], catArt[i + 1]] = [catArt[i + 1], catArt[i]];
        }
      }
    }
  }
  return catArt;
};

// sort catArt by designed by
const catArtSortDesginedByA = (catArt) => {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < catArt.length - 1; i++) {
      if (catArt[i].designedBy > catArt[i + 1].designedBy) {
        swapped = true;
        [catArt[i], catArt[i + 1]] = [catArt[i + 1], catArt[i]];
      }
    }
  }
  return catArt;
};

// convert price helper function
const converter = (price) => {
  let newPrice = Number(price);
  if (isNaN(newPrice)) {
    newPrice = Number(price.substr(2)) * 10;
  }
  return newPrice;
};

//sort catArt by price
const catArtSortByPriceA = () => {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < catArt.length - 1; i++) {
      let currentPrice = converter(catArt[i].price);
      let nextPrice = converter(catArt[i + 1].price);
      if (currentPrice > nextPrice) {
        swapped = true;
        [catArt[i], catArt[i + 1]] = [catArt[i + 1], catArt[i]];
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
const mySortFunction = (nums) => {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        swapped = true;
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
      }
    }
  }
  return nums;
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
