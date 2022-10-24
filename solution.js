const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (array) => {
  let unsorted  = true

  while (unsorted){
      unsorted = false;
      for (let i = 0; i < array.length-1; i++){
          if (array[i] > array[i+1]){
              [array[i], array[i+1]] = [array[i+1], array[i]]
              unsorted = true;
          }
      }
  }
  return array

};

// sort numbers in descending order
const sortNumsD = (array) => {
  let unsorted  = true

  while (unsorted){
      unsorted = false
      for (let i = 0; i < array.length-1; i++){
          if (array[i] < array[i+1]){
              [array[i], array[i+1]] = [array[i+1], array[i]]
              unsorted = true
          }
      }
  }
  return array;

};

// sort words in ascending order case sensitive
const sortWordsA = (wordsArr) => {
  let unsorted  = true

  while (unsorted){
      unsorted = false;
      for (let i = 0; i < wordsArr.length-1; i++){
          if (wordsArr[i] > wordsArr[i+1]){
              [wordsArr[i], wordsArr[i+1]] = [wordsArr[i+1], wordsArr[i]]
              unsorted = true;
          }
      }
  }
  return wordsArr;
};

// sort words in descending order case insensitive
const sortWordsD = (wordsArr) => {
  let unsorted  = true

  while (unsorted){
      unsorted = false;
      for (let i = 0; i < wordsArr.length-1; i++){
          if (wordsArr[i].toUpperCase() < wordsArr[i+1].toUpperCase()){
              [wordsArr[i], wordsArr[i+1]] = [wordsArr[i+1], wordsArr[i]]
              unsorted = true;
          }
      }
  }
  return wordsArr;
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (products) => {
  let unsorted  = true

  while (unsorted){
      unsorted = false;
      for (let i = 0; i < products.length-1; i++){
          if (products[i].name > products[i+1].name){
              [products[i], products[i+1]] = [products[i+1], products[i]]
              unsorted = true;
          }
      }
  }
  return products;
};

// sort products by price, ascending order
const sortProductPriceA = (products) => {
  let unsorted  = true

  while (unsorted){
      unsorted = false;
      for (let i = 0; i < products.length-1; i++){
          if (products[i].price > products[i+1].price){
              [products[i], products[i+1]] = [products[i+1], products[i]]
              unsorted = true;
          }
      }
  }
  return products;
};

// sort products by price, descending order
const sortProductPriceD = (products) => {
  let unsorted  = true

  while (unsorted){
      unsorted = false;
      for (let i = 0; i < products.length-1; i++){
          if (products[i].price < products[i+1].price){
              [products[i], products[i+1]] = [products[i+1], products[i]]
              unsorted = true;
          }
      }
  }
  return products;
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (products) => {
  let unsorted  = true;

  while (unsorted){
      unsorted = false;
      for (let i = 0; i < products.length-1; i++){
          if (products[i].price > products[i+1].price){
              [products[i], products[i+1]] = [products[i+1], products[i]]
              unsorted = true;
          } else if (products[i].price === products[i + 1].price) {
            if (products[i].name.toUpperCase() > products[i + 1].name.toUpperCase()) {
                [products[i], products[i+1]] = [products[i+1], products[i]]
                unsorted = true;
            }
          }
      }
  }
  return products;
};

// sort catArt by designed by
const catArtSortDesginedByA = (cart) => {
    let unsorted  = true

  while (unsorted){
      unsorted = false;
      for (let i = 0; i < cart.length-1; i++){
          if (cart[i].designedBy > cart[i+1].designedBy){
              [cart[i], cart[i+1]] = [cart[i+1], cart[i]]
              unsorted = true;
          }
      }
  }
  return cart;
};

// sort catArt by price
const catArtSortByPriceA = (art) => {
    const converter = (price) => {
        if(typeof price === "number"){
          return price;
        } else if(price * 1 == price){
            return price;
        }else {
          return price.split('').splice(2).join() * 10
        }
      }
    let unsorted  = true

    while (unsorted){
        unsorted = false;
        for (let i = 0; i < art.length-1; i++){
            if (converter(art[i].price) > converter(art[i+1].price)){
                [art[i], art[i+1]] = [art[i+1], art[i]]
                unsorted = true;
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
const mySortFunction = (data) => {
    let mySorting  = true

  while (mySorting){
      mySorting = false;
      for (let i = 0; i < data.length-1; i++){
          if (data[i] > data[i+1]){
              [data[i], data[i+1]] = [data[i+1], data[i]]
              mySorting = true;
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
