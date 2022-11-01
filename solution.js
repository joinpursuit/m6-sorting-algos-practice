const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order [ok]
const sortNumsA = (someNums) => {
  
  // Implementing bubble sort
  for (let i = 0; i < someNums.length; i++) {
    for (let j = i + 1; j < someNums.length; j++) {
      // Comparing the current element with the next
      if (someNums[i] > someNums[j]) {
        // If the current is greater, 
        // We need to hold it in a temp variable
        temp = someNums[i];
        // Then proceed to switch values, assigning to the next the current greater
        // And the current the next value
        someNums[i] = someNums[j];
        someNums[j] = temp;
      }
    }
  }
  return someNums;
};

// sort numbers in descending order [ok]
const sortNumsD = (someNums) => {
  
  // Implementing bubble sort
  for (let i = 0; i < someNums.length; i++) {
    for (let j = i + 1; j < someNums.length; j++) {
      // Comparing the current element with the next
      if (someNums[i] < someNums[j]) {
        // If the current is greater, 
        // We need to hold it in a temp variable
        temp = someNums[i];
        // Then proceed to switch values, assigning to the next the current greater
        // And the current the next value
        someNums[i] = someNums[j];
        someNums[j] = temp;
      }
    }
  }
  return someNums;
};

// sort words in ascending order case sensitive [ok]
const sortWordsA = (someWords) => {

  for (let i = 0; i < someWords.length; i++) {
    for (let j = i + 1; j < someWords.length; j++) {
      // Comparing the current element with the next
      if (someWords[i] > someWords[j]) {
        // If the current is greater, 
        // We need to hold it in a temp variable
        temp = someWords[i];
        // Then proceed to switch values, assigning to the next the current greater
        // And the current the next value
        someWords[i] = someWords[j];
        someWords[j] = temp;
      }
    }
  }
  return someWords;
};

// sort words in descending order case insensitive [ok]
const sortWordsD = (someWords) => {

  for (let i = 0; i < someWords.length; i++) {
    for (let j = i + 1; j < someWords.length; j++) {
      // Assigning each word passing to caps into lower letters 
      let a = someWords[i].toLowerCase();
      let b = someWords[j].toLowerCase();

      if (a < b) {
        temp = someWords[i];
        someWords[i] = someWords[j];
        someWords[j] = temp;
      }
    }
  }
  return someWords;  
};

// sort products by name, ascending order case insensitive [ok]
const sortProductNamesA = (someProducts) => {

  for (let i = 0; i < someProducts.length; i++) {
    for (let j = i + 1; j < someProducts.length; j++) {
      // Assigning each product name passing to caps into lower letters 
      let a = someProducts[i].name.toLowerCase();
      let b = someProducts[j].name.toLowerCase();
      
      if (a > b) {
        temp = someProducts[i];
        someProducts[i] = someProducts[j];
        someProducts[j] = temp;
      }
    }
  }

  return someProducts; 
};

// sort products by price, ascending order [ok]
const sortProductPriceA = (someProducts) => {

  for (let i = 0; i < someProducts.length; i++) {
    for (let j = i + 1; j < someProducts.length; j++) {
      // Assigning each product price in order to perform comparisons 
      let a = someProducts[i].price;
      let b = someProducts[j].price;
      
      if (a > b) {
        temp = someProducts[i];
        someProducts[i] = someProducts[j];
        someProducts[j] = temp;
      }
    }
  }
  return someProducts;
};

// sort products by price, descending order [ok]
const sortProductPriceD = (someProducts) => {

  for (let i = 0; i < someProducts.length; i++) {
    for (let j = i + 1; j < someProducts.length; j++) {
      // Assigning each product in order to perform comparisons
      let a = someProducts[i].price;
      let b = someProducts[j].price;
      
      if (a < b) {
        temp = someProducts[i];
        someProducts[i] = someProducts[j];
        someProducts[j] = temp;
      }
    }
  }
  return someProducts;
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = () => {


};

// sort catArt by designed by, ascending
const catArtSortDesginedByA = (catArt) => {

  for (let i = 0; i < catArt.length; i++) {
    for (let j = i + 1; j < catArt.length; j++) {
      // Assigning each item price in order to perform comparisons
      let a = catArt[i].designedBy;
      let b = catArt[j].designedBy;
      
      if (a > b) {
        temp = catArt[i];
        catArt[i] = catArt[j];
        catArt[j] = temp;
      }
    }
  }
  return catArt;  
};

// sort catArt by price
const catArtSortByPriceA = (catArt) => {

  for (let i = 0; i < catArt.length; i++) {
    for (let j = i + 1; j < catArt.length; j++) {
      // Assigning each item price in order to perform comparisons
      let a = catArt[i].price;
      let b = catArt[j].price;

      if(typeof catArt[i].price === "string") {
        a = a.replace(/[^\d]+/g, '');
      }

      if(typeof catArt[j].price === "string") {
        b = b.replace(/[^\d]+/g, '')
      }
      //  console.log(typeof a)
      //  console.log(typeof b)
       //console.log((catArt[i].price).match(/[^\d]+/g))
      // console.log(catArt[j].price)
      
      // console.log(a)
      // console.log(b)
      
      if (Number(a) > Number(b)) {
        temp = catArt[i];
        catArt[i] = catArt[j];
        catArt[j] = temp;
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
const mySortFunction = (arr) => {

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let a = arr[i];
      let b = arr[j];

      if (a > b) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
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
