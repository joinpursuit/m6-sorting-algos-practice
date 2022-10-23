const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (array) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        unsorted = true;
      }
    }
  }
  return array;
};

// sort numbers in descending order
const sortNumsD = (array) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] < array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        unsorted = true;
      }
    }
  }
  return array;
};

// sort words in ascending order case sensitive
const sortWordsA = (array) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        unsorted = true;
      }
    }
  }
  return array;
};

// sort words in descending order case insensitive
const sortWordsD = (array) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i].toLowerCase() < array[i + 1].toLowerCase()) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        unsorted = true;
      }
    }
  }
  return array;
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (array) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i].name.toLowerCase() > array[i + 1].name.toLowerCase()) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        unsorted = true;
      }
    }
  }
  return array;
};

// sort products by price, ascending order
const sortProductPriceA = (array) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i].price > array[i + 1].price) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        unsorted = true;
      }
    }
  }
  return array;
};

// sort products by price, descending order
const sortProductPriceD = (array) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i].price < array[i + 1].price) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        unsorted = true;
      }
    }
  }
  return array;
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (array) => {
  // console.log(array)
  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i].price > array[i + 1].price) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        unsorted = true;
      }
    }
  }
  // console.log(array)

  // let unsorted2 = true;
  //   while(unsorted2){
  //     unsorted2 = false;
  //   for(let i = 0; i < array.length-1; i++){
  //     if(array[i].name > array[i+1].name){
  //       [array[i],array[i+1]]=[array[i+1],array[i]]
  //       unsorted2 = true;
  //     }
  //   }
  // }
  // console.log(array)
  return array;
};

// sort catArt by designed by
const catArtSortDesginedByA = (array) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (
        array[i].designedBy.toLowerCase() >
        array[i + 1].designedBy.toLowerCase()
      ) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        unsorted = true;
      }
    }
  }
  return array;
};

// sort catArt by price
const catArtSortByPriceA = (array) => {
  let unsorted = true;
  
  while (unsorted) {
    unsorted = false;

    for (let i = 0; i < array.length - 1; i++) {
      let current = 0;
      let next = 0;
      if (typeof array[i].price === "string") {
        if(array[i].price.includes("♇")){
          current = +array[i].price.slice(2) * 10
        }else{
          current = Number(array[i].price)
        }
      }

      if (typeof array[i+1].price === "string") {
        if(array[i+1].price.includes("♇")){
          next = +array[i+1].price.slice(2) * 10
        }else{
          next = Number(array[i+1].price)
        }
      }

      if (current > next) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        unsorted = true;
      }
    }
  }
  // console.log(array);
  return array;
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
