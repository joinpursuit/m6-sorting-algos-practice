const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

//Helper functions
const swap = (arr, i1, i2) => {
  const temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
  return arr
};
const converter = (price) => {
  let convertedPrice = Number(price); 
  if (Number.isNaN(convertedPrice)) {
    return Number(price.slice(2)) * 10;
  }
  return convertedPrice;
};

// sort numbers in ascending order
const sortNumsA = (array) => {
  let swapped = true;
 
  while (swapped) {
   
    swapped = false;
    
    for (let i = 0; i < array.length - 1; i++) {        
      if (array[i].toString() > array[i + 1].toString()) {
        swap(array, i, i + 1);     
        swapped = true;      
      }
    }
  }
  return array
};

// sort numbers in descending order
const sortNumsD = (array) => {
  let swapped = true;
 
  while (swapped) {
   
    swapped = false;
    
    for (let i = 0; i < array.length - 1; i++) {        
      if (array[i] < array[i + 1]) {
        swap(array, i, i + 1);     
        swapped = true;      
      }
    }
  }
  return array
};

// sort words in ascending order case sensitive
const sortWordsA = (array) => {
  let swapped = true;
 
  while (swapped) {
   
    swapped = false;
    
    for (let i = 0; i < array.length - 1; i++) {        
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);     
        swapped = true;      
      }
    }
  }
  return array
};

// sort words in descending order case insensitive
const sortWordsD = (array) => {
  let swapped = true;
 
  while (swapped) {
   
    swapped = false;
    
    for (let i = 0; i < array.length - 1; i++) {        
      if (array[i].toUpperCase() < array[i + 1].toUpperCase()) {
        swap(array, i, i + 1);     
        swapped = true;      
      }
    }
  }
  return array
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (array) => {
  let swapped = true;
 
  while (swapped) {
   
    swapped = false;
    
    for (let i = 0; i < array.length - 1; i++) {        
      if (array[i].name.toUpperCase() > array[i + 1].name.toUpperCase()) {
        swap(array, i, i + 1);     
        swapped = true;      
      }
    }
  }
  return array
};

// sort products by price, ascending order
const sortProductPriceA = (array) => {
  let swapped = true;
 
  while (swapped) {
   
    swapped = false;
    
    for (let i = 0; i < array.length - 1; i++) {        
      if (array[i].price > array[i + 1].price) {
        swap(array, i, i + 1);     
        swapped = true;      
      }
    }
  }
  return array
};

// sort products by price, descending order
const sortProductPriceD = (array) => {
  let swapped = true;
 
  while (swapped) {
   
    swapped = false;
    
    for (let i = 0; i < array.length - 1; i++) {        
      if (array[i].price < array[i + 1].price) {
        swap(array, i, i + 1);     
        swapped = true;      
      }
    }
  }
  return array
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (array) => {
  let swapped = true;

  while (swapped) {
    swapped = false;
    
    for (let i = 0; i < array.length - 1; i++) {        
      if (array[i].price > array[i + 1].price) {
        swap(array, i, i + 1);     
        swapped = true;      
      }
    }
  }
  return array
};


// sort catArt by designed by
const catArtSortDesginedByA = (array) => {
  let swapped = true;

  while (swapped) {
    swapped = false

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i].designedBy > array[i + 1].designedBy) {
        swap(array, i, i + 1);
        swapped = true;
      }
    }
  }
  return array;
};

// sort catArt by price
const catArtSortByPriceA = (array) => {
  let swapped = true;

  while (swapped) {
    swapped = false;

    for (let i = 0; i < array.length - 1; i++) {
      if (converter(array[i].price) > converter(array[i + 1].price)) {
        swap(array, i, i + 1);
        swapped = true;
      }
    }
  }
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
const mySortFunction = (array) => {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        //if true swap
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
      }
    }
  }
  return array;
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