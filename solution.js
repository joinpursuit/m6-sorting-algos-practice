const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (arr) => {
  let swapping = true;

  while (swapping) {
    swapping = false;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapping = true;
      }
    }
  }
  return arr;
};

// sort numbers in descending order
const sortNumsD = (arr) => {
  let swapping = true;

  while (swapping) {
    swapping = false;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapping = true;
      }
    }
  }
  return arr;
};

// sort words in ascending order case sensitive
const sortWordsA = (arr) => {
  let swapping = true;

  while (swapping) {
    swapping = false;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapping = true;
      }
    }
  }
  return arr;
};

// sort words in descending order case insensitive
const sortWordsD = (arr) => {
  let swapping = true;
  while (swapping) {
    swapping = false;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].toLowerCase() < arr[i + 1].toLowerCase()) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapping = true;
      }
    }
  }
  return arr;
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (arr) => {
  let swapping = true;

  while (swapping) {
    swapping = false;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].name.toLowerCase() > arr[i + 1].name.toLowerCase()) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapping = true;
      }
    }
  }
  return arr;
};

// sort products by price, ascending order
const sortProductPriceA = (arr) => {
  let swapping = true;

  while (swapping) {
    swapping = false;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].price > arr[i + 1].price) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapping = true;
      }
    }
  }
  return arr;
};

// sort products by price, descending order
const sortProductPriceD = (arr) => {
  let swapping = true;

  while (swapping) {
    swapping = false;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].price < arr[i + 1].price) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapping = true;
      }
    }
  }
  return arr;
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (arr) => {
  let swapping = true;

  while (swapping) {
    swapping = false;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].price > arr[i + 1].price) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapping = true;
      } else if (arr[i].price === arr[i + 1].price) {
        if (arr[i].name.toLowerCase() > arr[i + 1].name.toLowerCase()) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          swapping = true;
        }
      }
    }
  }
  return arr;
};

// sort catArt by designed by
const catArtSortDesginedByA = (arr) => {
  let swapping = true;

  while (swapping) {
    swapping = false;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].designedBy > arr[i + 1].designedBy) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapping = true;
      }
    }
  }
  return arr;
};

// sort catArt by price
const catArtSortByPriceA = (arr) => {
  const converter = (price) => {
    if(typeof price === "number"){
      return price 
    } else if(price * 1 == price){
        return price
    }else {
      return price.split('').splice(2).join() * 10
    }
  }
  let swapping = true;

  while (swapping) {
    swapping = false;
    
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].price)
        if (converter(arr[i].price) > converter(arr[i + 1].price)) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          swapping = true;
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
  let swapping = true;
  
  while (swapping) {
    swapping = false;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          swapping = true;
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
