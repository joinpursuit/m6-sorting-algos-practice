const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (nums) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
        unsorted = true;
      }
    }
  }
  return nums;
};

// sort numbers in descending order
const sortNumsD = (nums) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] < nums[i + 1]) {
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
        unsorted = true;
      }
    }
  }
  return nums;
};

// sort words in ascending order case sensitive
const sortWordsA = (words) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    for (let i = 0; i < words.length - 1; i++) {
      if (words[i] > words[i + 1]) {
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
      let firstWrd = words[i].toLowerCase();
      let secondWrd = words[i + 1].toLowerCase();
      if (firstWrd < secondWrd) {
        [words[i], words[i + 1]] = [words[i + 1], words[i]];
        unsorted = true;
      }
    }
  }
  return words
};

// sort products by name, ascending order case insensitive 
const sortProductNamesA = (products) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    for (let i = 0; i < products.length - 1; i++) {
      let firstWrd = products[i]['name'].toLowerCase();
      let secondWrd = products[i + 1]['name'].toLowerCase();
      if (firstWrd > secondWrd) {
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
      if (products[i]['price'] > products[i+1]['price']) {
        [products[i], products[i+1]] = [products[i+1], products[i]];
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
      if (products[i]['price'] < products[i+1]['price']) {
        [products[i], products[i+1]] = [products[i+1], products[i]];
        unsorted = true;
      }
    }
  }
  return products;
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (data) => {
  return sortProductPriceA(sortWordsA(data) )
};

// sort catArt by designed by 
const catArtSortDesginedByA = (data) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    for (let i = 0; i < data.length - 1; i++) {
      let firstWrd = data[i]['designedBy'];
      let secondWrd = data[i + 1]['designedBy'];
      if (firstWrd > secondWrd) {
        [data[i], data[i + 1]] = [data[i + 1], data[i]];
        unsorted = true;
      }
    }
  }
  return data;
};

// sort catArt by price 
function checkPrice(price) {
  price = price.toString();
  if (price.includes("♇♇")) {
    return 10 * parseFloat(price.slice(2));
  }
  return parseFloat(price);
}

const catArtSortByPriceA = (data) => {
  let isSorted = false;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < data.length - 1; i++) {
      if (checkPrice(data[i].price) > checkPrice(data[i + 1].price)) {
        isSorted = false;
        [data[i], data[i + 1]] = [data[i + 1], data[i]];
      }
    }
  }

  return data;
};

// Create your own sort function
// it should sort in ascending order
// it should work for numbers or words (case sensitive)
// create your own sort algorithm
// or try to implement bubble sort
// or try to implement merge sort
// or look up another common sort algorithm (i.e. quicksort, ) and try your own implementation
// Bonus add another argument that would allow the function to be used for ascending or descending order
const mySortFunction = (data) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    for (let i = 0; i < data.length - 1; i++) {
      if (data[i] > data[i + 1]) {
        [data[i], data[i + 1]] = [data[i + 1], data[i]]
        unsorted = true;
      }
    }
  }
  return data;
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
