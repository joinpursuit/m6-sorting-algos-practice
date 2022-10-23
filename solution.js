const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (array) => {
  let unswapped = true;

  while(unswapped){
    unswapped = false;
    for(let i = 0; i < array.length-1; i++){
      if(array[i] > array[i + 1]){
        [array[i], array[i +1]] = [array[i+1], array[i]]
        unswapped = true
      }
    }
  }
  return array
};

// sort numbers in descending order
const sortNumsD = (array) => {
  let unswapped = true;

  while(unswapped){
    unswapped = false;
    for(let i = 0; i < array.length-1; i++){
      if(array[i] < array[i + 1]){
        [array[i], array[i +1]] = [array[i+1], array[i]]
        unswapped = true
      }
    }
  }
  return array
};

// sort words in ascending order case sensitive
const sortWordsA = (array) => {
  let unswapped = true;

  while(unswapped){
    unswapped = false;
    for(let i = 0; i < array.length-1; i++){
      if(array[i] > array[i + 1]){
        [array[i], array[i +1]] = [array[i+1], array[i]]
        unswapped = true
      }
    }
  }
  return array
};

// sort words in descending order case insensitive
const sortWordsD = (array) => {
  let unswapped = true;

  while(unswapped){
    unswapped = false;
    for(let i = 0; i < array.length-1; i++){
      if(array[i].toLowerCase() < array[i + 1].toLowerCase()){
        [array[i], array[i +1]] = [array[i+1], array[i]]
        unswapped = true
      }
    }
  }
  return array
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (array) => {
  let unswapped = true;

  while(unswapped){
    unswapped = false;
    for(let i = 0; i < array.length-1; i++){
      if(array[i].name.toLowerCase() > array[i + 1].name.toLowerCase()){
        [array[i], array[i +1]] = [array[i+1], array[i]]
        unswapped = true
      }
    }
  }
  return array
};

// sort products by price, ascending order
const sortProductPriceA = (array) => {
  let unswapped = true;

  while(unswapped){
    unswapped = false;
    for(let i = 0; i < array.length-1; i++){
      if(array[i].price > array[i + 1].price){
        [array[i], array[i +1]] = [array[i+1], array[i]]
        unswapped = true
      }
    }
  }
  return array
};

// sort products by price, descending order
const sortProductPriceD = (array) => {
  let unswapped = true;

  while(unswapped){
    unswapped = false;
    for(let i = 0; i < array.length-1; i++){
      if(array[i].price < array[i + 1].price){
        [array[i], array[i +1]] = [array[i+1], array[i]]
        unswapped = true
      }
    }
  }
  return array
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (array) => {
  let unswapped = true;

  while(unswapped){
    unswapped = false;
    for(let i = 0; i < array.length-1; i++){
      if(array[i].price > array[i + 1].price){
        [array[i], array[i +1]] = [array[i+1], array[i]]
        unswapped = true
      }
    }

  }
  return array
};

// sort catArt by designed by
const catArtSortDesginedByA = (array) => {
  let unswapped = true;

  while(unswapped){
    unswapped = false;
    for(let i = 0; i < array.length-1; i++){
      if(array[i].designedBy > array[i + 1].designedBy){
        [array[i], array[i +1]] = [array[i+1], array[i]]
        unswapped = true
      }
    }
  }
  return array
};

// sort catArt by price
const convertToMeowa = (price) => {
  if(Number.isNaN(price)){
    price = price.slice(2)
    return (Number(price) * 10)
  }
}

const catArtSortByPriceA = (array) => {
  let unswapped = true;

  while(unswapped){
    unswapped = false;
    for(let i = 0; i < array.length-1; i++){
      
      if(convertToMeowa(array[i].price) > convertToMeowa(array[i + 1].price)){
        [array[i], array[i +1]] = [array[i+1], array[i]]
        unswapped = true
      }
    }
  }
  return array
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
  convertToMeowa
};
