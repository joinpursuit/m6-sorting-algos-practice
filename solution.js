const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = () => {
  let unsorted = true;
  while(unsorted){
    unsorted = false;
    for(let i = 0; i < someNums.length-1; i++){
      if(someNums[i] > someNums[i+1]){
        [someNums[i],someNums[i+1]] = [someNums[i+1], someNums[i]]
        unsorted = true;
      }
    }
  }
  return someNums


};

// sort numbers in descending order
const sortNumsD = () => {
  let unsorted = true;
  while(unsorted){
    unsorted = false;
    for(let i = 0; i < someNums.length-1; i++){
      if(someNums[i] < someNums[i+1]){
        [someNums[i],someNums[i+1]] = [someNums[i+1], someNums[i]]
        unsorted = true;
      }
    }
  }
  return someNums
};

// sort words in ascending order case sensitive
const sortWordsA = () => {
  let unsorted = true;
  while(unsorted){
    unsorted = false;
    for(let i = 0; i < someWords.length-1; i++){
      if(someWords[i] > someWords[i+1]){
        [someWords[i],someWords[i+1]] = [someWords[i+1], someWords[i]]
        unsorted = true;
      }
    }
  }
  return someWords
};

// sort words in descending order case insensitive
const sortWordsD = () => {
  let unsorted = true;
  while(unsorted){
    unsorted = false;
    for(let i = 0; i < someWords.length-1; i++){
      if(someWords[i].toLowerCase() < someWords[i+1].toLowerCase()){
        [someWords[i],someWords[i+1]] = [someWords[i+1], someWords[i]]
        unsorted = true;
      }
    }
  }
  // console.log(someWords)
  return someWords
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = () => {
  let unsorted = true;
  while(unsorted){
    unsorted = false;
    for(let i = 0; i < someProducts.length-1; i++){
      if(someProducts[i].name > someProducts[i+1].name){
        [someProducts[i],someProducts[i+1]] = [someProducts[i+1], someProducts[i]]
        unsorted = true;
      }
    }
  }
  return someProducts
}

// sort products by price, ascending order
const sortProductPriceA = () => {
  let unsorted = true;
  while(unsorted){
    unsorted = false;
    for(let i = 0; i < someProducts.length-1; i++){
      if(someProducts[i].price > someProducts[i+1].price){
        [someProducts[i],someProducts[i+1]] = [someProducts[i+1], someProducts[i]]
        unsorted = true;
      }
    }
  }
  return someProducts

};

// sort products by price, descending order
const sortProductPriceD = () => {
  let unsorted = true;
  while(unsorted){
    unsorted = false;
    for(let i = 0; i < someProducts.length-1; i++){
      if(someProducts[i].price < someProducts[i+1].price){
        [someProducts[i],someProducts[i+1]] = [someProducts[i+1], someProducts[i]]
        unsorted = true;
      }
    }
  }
  return someProducts
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = () => {
  let unsorted = true;
  while(unsorted){
    unsorted = false;
    for(let i = 0; i < someProducts.length-1; i++){
      if(someProducts[i].price > someProducts[i+1].price){
        [someProducts[i],someProducts[i+1]] = [someProducts[i+1], someProducts[i]]
        unsorted = true;
      }
    }
  }
  return someProducts
};

// sort catArt by designed by
const catArtSortDesginedByA = () => {
  let unsorted = true;
  while(unsorted){
    unsorted = false;
    for(let i = 0; i < catArt.length-1; i++){
      if(catArt[i].designedBy > catArt[i+1].designedBy){
        [catArt[i],catArt[i+1]] = [catArt[i+1], catArt[i]]
        unsorted = true;
      }
    }
  }
  return catArt
};

// sort catArt by price
const catArtSortByPriceA = () => {
  let unsorted = true;

  while(unsorted){
    unsorted = false;
    
    for(let i = 0; i < catArt.length-1; i++){
      let price = catArt[i].price
      let price1 = catArt[i+1].price
      let converter = 0
      let converter1 = 0

      if(Number.isNaN(Number(price))){
              converter = 10 * Number(catArt[i].price.slice(2))
              // console.log(catArt[i])
            }else if(typeof price === 'string'){
              converter = Number(catArt[i].price)
            }else{
              converter = price
            }

      if(Number.isNaN(Number(price1))){
              converter1 =  10 * Number(price1.slice(2))
              // console.log(catArt[i])
      }else if(typeof price1 === 'string'){
             converter1= Number(price1)
      }else{
        converter1 = price1
      }

      if(converter > converter1){
        [catArt[i],catArt[i+1]] = [catArt[i+1], catArt[i]]
        unsorted = true;
      }
    }
  }
  console.log(catArt)
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
  let unsorted = true;
  while(unsorted){
    unsorted = false;
    for(let i = 0; i < array.length-1; i++){
      if(array[i] > array[i+1]){
        [array[i],array[i+1]] = [array[i+1], array[i]]
        unsorted = true;
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
