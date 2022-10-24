const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (nums) => {
  let swapping = true
  while (swapping) {
    swapping = false
    for (let n = 0; n < nums.length - 1; n++) {
      if (nums[n] > nums[n + 1]) {
       [nums[n], nums[n + 1]] = [nums[n + 1], nums[n]]
       swapping = true
      }
    }
  }
  return nums
};

// sort numbers in descending order
const sortNumsD = (nums) => {
  let swapping = true
  while (swapping) {
    swapping = false
    for (let n = 0; n < nums.length -1; n++) {
      if (nums[n+1] > nums[n]) {
        [nums[n], nums[n+1]] = [nums[n+1], nums[n]]
        swapping = true
      }
    }
  }
  return nums;
};

// sort words in ascending order case sensitive
const sortWordsA = (words) => {
  let swapping = true
  while (swapping) {
    swapping = false
    for (let n = 0; n < words.length - 1; n++) {
      if (words[n] > words[n+1]) {
        [words[n], words[n+1]] = [words[n+1], words[n]]
        swapping = true
      }
    }
  }
  return words;
};

// sort words in descending order case insensitive
// this one is case sensitive but not the ascending problem?
const sortWordsD = (words) => {
  let swapping = true
  while (swapping) {
    swapping = false
    for (let n = 0; n < words.length -1; n++) {
      if (words[n+1].toUpperCase() > words[n].toUpperCase()) {
        [words[n], words[n+1]] = [words[n+1], words[n]]
        swapping = true
      }
    }
  }
  return words
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (name) => {};

// sort products by price, ascending order
const sortProductPriceA = (price) => {};

// sort products by price, descending order
const sortProductPriceD = (price) => {};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (price, name) => {};

// sort catArt by designed by
const catArtSortDesginedByA = (cat) => {};

// sort catArt by price
const catArtSortByPriceA = (cat) => {};

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
