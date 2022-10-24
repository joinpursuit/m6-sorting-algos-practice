const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (nums) => {
  let didSwap = true

  while(didSwap){
    didSwap = false
    for(let i = 0; i < nums.length - 1; i++){
      let current = nums[i]
      let next = nums[i + 1]
      
      if(current > next){
        didSwap = true
        nums[i] = next
        nums[i + 1] = current
      }
    }
  }
  return nums
};

// sort numbers in descending order
const sortNumsD = (nums) => {
  let didSwap = true

  while(didSwap){
    didSwap = false
    for(let i = 0; i < nums.length - 1; i++){
      let current = nums[i]
      let next = nums[i + 1]
      
      if(current < next){
        didSwap = true
        nums[i] = next
        nums[i + 1] = current
      }
    }
  }
  return nums
};

// sort words in ascending order case sensitive
const sortWordsA = (words) => {
  let didSwap = true

  while(didSwap){
    didSwap = false
    for(let i = 0; i < words.length - 1; i++){
      let current = words[i]
      let next = words[i + 1]
      
      if(current > next){
        didSwap = true
        words[i] = next
        words[i + 1] = current
      }
    }
  }
  return words
};

// sort words in descending order case insensitive
const sortWordsD = (words) => {
  let didSwap = true

  while(didSwap){
    didSwap = false
    for(let i = 0; i < words.length - 1; i++){
      let current = words[i]
      let next = words[i + 1]
      
      if(current.toLowerCase() < next.toLowerCase()){
        didSwap = true
        words[i] = next
        words[i + 1] = current
      }
    }
  }
  return words
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (products) => {
  let didSwap = true

  while(didSwap){
    didSwap = false
    for(let i = 0; i < products.length - 1; i++){
      let current = products[i]
      let next = products[i + 1]
      
      if(current.name.toLowerCase() > next.name.toLowerCase()){
        didSwap = true
        products[i] = next
        products[i + 1] = current
      }
    }
  }
  return products
};

// sort products by price, ascending order
const sortProductPriceA = (products) => {
  let didSwap = true

  while(didSwap){
    didSwap = false
    for(let i = 0; i < products.length - 1; i++){
      let current = products[i]
      let next = products[i + 1]
      
      if(current.price > next.price){
        didSwap = true
        products[i] = next
        products[i + 1] = current
      }
    }
  }
  return products
};

// sort products by price, descending order
const sortProductPriceD = (products) => {
  let didSwap = true

  while(didSwap){
    didSwap = false
    for(let i = 0; i < products.length - 1; i++){
      let current = products[i]
      let next = products[i + 1]
      
      if(current.price < next.price){
        didSwap = true
        products[i] = next
        products[i + 1] = current
      }
    }
  }
  return products
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (products) => {
  let didSwap = true

  while(didSwap){
    didSwap = false
    for(let i = 0; i < products.length - 1; i++){
      let current = products[i]
      let next = products[i + 1]
      
      if(current.price > next.price){
        didSwap = true
        products[i] = next
        products[i + 1] = current
      }
    }
  }
  return products
};

// sort catArt by designed by
const catArtSortDesginedByA = (catArt) => {
  let didSwap = true

  while(didSwap){
    didSwap = false
    for(let i = 0; i < catArt.length - 1; i++){
      let current = catArt[i]
      let next = catArt[i + 1]
      
      if(current.designedBy > next.designedBy){
        didSwap = true
        catArt[i] = next
        catArt[i + 1] = current
      }
    }
  }
  return catArt
};

// sort catArt by price
const catArtSortByPriceA = (catArt) => {
  let didSwap = true

  function convertedToDollar(price){
    return price.toString().includes('♇♇') ? 10 * Number(price[2]) : price
  }

  while(didSwap){
    didSwap = false
    for(let i = 0; i < catArt.length - 1; i++){
      let current = catArt[i]
      let next = catArt[i + 1]
      
      if(convertedToDollar(current.price) > convertedToDollar(next.price)){
        didSwap = true
        catArt[i] = next
        catArt[i + 1] = current
      }
    }
  }
  return catArt
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
  if( typeof array[0] === 'string'){
    return sortWordsA(array)
  } else {
    return sortNumsA(array)
  }
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
