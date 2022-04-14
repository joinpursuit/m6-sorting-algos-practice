const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order

const swap = (arr, i1, i2) => {
  const temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
};

const sortNumsA = (arr) => {
  let swapped = true;

  while (swapped) {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        swapped = true;
      }
    }
  }
  return arr;
};

// sort numbers in descending order
const sortNumsD = (arr) => {
  let swapped = true;

  while (swapped) {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < arr[i + 1]) {
        swap(arr, i, i + 1);
        swapped = true;
      }
    }
  }
  return arr;
};

// sort words in ascending order case sensitive
const sortWordsA = (arr) => {
  let swapped = true;

  while (swapped) {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      let uppered = arr[i];
      let uppered2 = arr[i + 1];

      if (uppered > uppered2) {
        swap(arr, i, i + 1);
        swapped = true;
      }
    }
  }
  return arr;
};

// sort words in descending order case insensitive
const sortWordsD = (arr) => {
  return arr.sort((a, b) => b.localeCompare(a));
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (arr) => {
  let swapped = true;

  while (swapped) {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].name > arr[i + 1].name) {
        swap(arr, i, i + 1);
        swapped = true;
      }
    }
  }
  return arr;
};

// sort products by price, ascending order
const sortProductPriceA = (arr) => {
  let swapped = true;

  while (swapped) {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].price > arr[i + 1].price) {
        swap(arr, i, i + 1);
        swapped = true;
      }
    }
  }
  return arr;
};

// sort products by price, descending order
const sortProductPriceD = (arr) => {
  let swapped = true;

  while (swapped) {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].price < arr[i + 1].price) {
        swap(arr, i, i + 1);
        swapped = true;
      }
    }
  }
  return arr;
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (arr) => {
  let swapped = true;

  while (swapped) {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].price > arr[i + 1].price) {
        swap(arr, i, i + 1);
        swapped = true;
      }
      if (arr[i].price === arr[i + 1].price && arr[i].name > arr[i + 1].name) {
        swap(arr, i, i + 1);
        swapped = true;
      }
    }
  }
  return arr;
};

// sort catArt by designed by
const catArtSortDesginedByA = (arr) => {
  let swapped = true;

  while (swapped) {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].designedBy > arr[i + 1].designedBy) {
        swap(arr, i, i + 1);
        swapped = true;
      }
    }
  }
  return arr;
};

//function to convert catArt Prices
//the param string price
const convert = (price) => {
  //store the string price into a number price
  let newPrice = Number(price);
  //if the newPrice is not a number
  if (Number.isNaN(newPrice)) {
    //then the newPrice is now the string price made to a number and returns everything after the ♇♇ times 10
    //(since each coin is $10)
    newPrice = Number(price.substring(2)) * 10;
  }
  //then you want to return that price
  return newPrice;
};

// sort catArt by price
const catArtSortByPriceA = (arr) => {
  let swapped = true;

  while (swapped) {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      //use convert inside of our if statement
      if (convert(arr[i].price) > convert(arr[i + 1].price)) {
        swap(arr, i, i + 1);
        swapped = true;
      }
    }
  }
  return arr;
};

// Create your own sort function
// it should sort in ascending order
// it should work for numbers or words (case sensitive)
// create your own sort algorithm
// or try to implement bubble sort
// or try to implement merge sort
// or look up another common sort algorithm (i.e. quicksort, ) and try your own implementation
// Bonus add another argument that would allow the function to be used for ascending or descending order
const mySortFunction = (arr) => {
  let swapped = true;

  while (swapped) {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        swapped = true;
      }
    }
  }
  return arr;
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
