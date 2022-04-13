const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (array) => {
  let swapped = true
  while(swapped){
    swapped = false
    for(let i = 0; i < array.length-1; i++){
      const first = array[i]
      const next = array[i+1]
      if(String(first) > String(next)){
        [array[i], array[i+1]] = [next, first]
        swapped = true
      }
    }
  }
  return array
};

// sort numbers in descending order
const sortNumsD = (array) => {
  let swapped = true
  while(swapped){
    swapped = false
    for(let i = 0; i < array.length-1; i++){
      const first = array[i]
      const next = array[i+1]
      if(first < next){
        [array[i], array[i+1]] = [next, first]
        swapped = true
      }
    }
  }
  return array
};

// sort words in ascending order case sensitive
const sortWordsA = (words) => {
  let swapped = true
  while(swapped){
    swapped = false
    for(let i = 0; i < words.length-1; i++){
      const first = words[i]
      const next = words[i+1]
      if(first > next){
        [words[i], words[i+1]] = [next, first]
        swapped = true
      }
    }
  }
  return words
};

// sort words in descending order case insensitive
const sortWordsD = (words) => {
  let swapped = true
  while(swapped){
    swapped = false
    for(let i = 0; i < words.length-1; i++){
      const first = words[i]
      const next = words[i+1]
      if(first.toLowerCase() < next.toLowerCase() ){
        [words[i], words[i+1]] = [next, first]
        swapped = true
      }
    }
  }
  return words
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (products) => {
  let swapped = true
  while(swapped){
    swapped = false
    for(let i = 0; i < products.length-1; i++){
      const first = products[i]
      const next = products[i+1]
      if(first.name.toLowerCase() > next.name.toLowerCase()){
        [products[i], products[i+1]] = [next, first]
        swapped = true
      }
    }
  }
  return products
};

// sort products by price, ascending order
const sortProductPriceA = (products) => {
  let swapped = true
  while(swapped){
    swapped = false
    for(let i = 0; i < products.length-1; i++){
      const first = products[i]
      const next = products[i+1]
      if(1*first.price > 1*next.price ){
        [products[i], products[i+1]] = [next, first]
        swapped = true
      }
    }
  }
  return products
};

// sort products by price, descending order
const sortProductPriceD = (products) => {
  let swapped = true
  while(swapped){
    swapped = false
    for(let i = 0; i < products.length-1; i++){
      const first = products[i]
      const next = products[i+1]
      if(1*first.price < 1*next.price ){
        [products[i], products[i+1]] = [next, first]
        swapped = true
      }
    }
  }
  return products
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (products) => {
  let swapped = true
  while(swapped){
    swapped = false
    for(let i = 0; i < products.length-1; i++){
      const first = products[i]
      const next = products[i+1]
      if(1*first.price > 1*next.price ){
        [products[i], products[i+1]] = [next, first]
        swapped = true
      }
    }
  }

  return products
};

// sort catArt by designed by
const catArtSortDesginedByA = (products) => {
  let swapped = true
  while(swapped){
    swapped = false
    for(let i = 0; i < products.length-1; i++){
      const first = products[i]
      const next = products[i+1]
      if(first.designedBy > next.designedBy){
        [products[i], products[i+1]] = [next, first]
        swapped = true
      }
    }
  }
  return products
};

// sort catArt by price
const catArtSortByPriceA = (products) => {
  let swapped = true
  while(swapped){
    swapped = false
    for(let i = 0; i < products.length-1; i++){
      const first = products[i]
      const next = products[i+1]
      let firstPrice = convertPrice(first.price)
      let nextPrice = convertPrice(next.price)
      if(firstPrice > nextPrice){
        [products[i], products[i+1]] = [next, first]
        swapped = true
      }
    }
  }
  return products
};

function convertPrice(price){
  let newPrice = Number(price)
  if(isNaN(newPrice)){
    newPrice = Number(price.slice(2)) * 10
  }
  return newPrice
}

// Create your own sort function
// it should sort in ascending order
// it should work for numbers or words (case sensitive)
// create your own sort algorithm
// or try to implement bubble sort
// or try to implement merge sort
// or look up another common sort algorithm (i.e. quicksort, ) and try your own implementation
// Bonus add another argument that would allow the function to be used for ascending or descending order
const mySortFunction = (array) => {
  let swapped = true
  while(swapped){
    swapped = false
    for(let i = 0; i < array.length-1; i++){
      const first = array[i]
      const next = array[i+1]
      if(first > next){
        [array[i], array[i+1]] = [next, first]
        swapped = true
      }
    }
  }
  return array
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
