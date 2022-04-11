const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (nums) => {
  let swapped = false;
  for (let i = 0; i < nums.length - 1; i++){
    if (nums[i].toString() >= nums[i + 1].toString()){
      swapped = true;
      [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
    }
  }
  return swapped ? sortNumsA(nums) : nums;
};

// sort numbers in descending order
const sortNumsD = (nums) => {
  let swapped = true;

  //check if we swapped last loop;
  while(swapped){
    swapped = false;
    for (let i = 0; i < nums.length - 1; i++){
      //if we see something that needs to be swapped
      if (nums[i] <= nums[i + 1]){
        // we swap it
        swapped = true;
        let temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
      }
    }
  }
  //return it
  return nums;
};

// sort words in ascending order case sensitive
const sortWordsA = (words) => {
  let swapped = true;

  while(swapped){
    swapped = false;
    for(let i = 0; i < words.length - 1; i++){
      if(words[i] > words[i + 1]){
        swapped = true;
        [words[i], words[i + 1]] = [words[i + 1], words[i]];
      }
    }
  }

  return words;
};

// sort words in descending order case insensitive
const sortWordsD = (words) => {
  let swapped = true;

  while(swapped){
    swapped = false;
    for(let i = 0; i < words.length - 1; i++){
      if(words[i].toLowerCase() < words[i + 1].toLowerCase()){
        swapped = true;
        [words[i], words[i + 1]] = [words[i + 1], words[i]];
      }
    }
  }

  return words;
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (products) => {
  let swapped = true;
  while(swapped) {
    swapped = false;
    for (let i = 0; i < products.length - 1; i++){
      if ((products[i].name.toLowerCase()) > (products[i + 1].name.toLowerCase())){
        swapped = true;
        [products[i], products[i + 1]] = [products[i + 1], products[i]]
      }
    }
  }
  return products
};

// sort products by price, ascending order
const sortProductPriceA = (products) => {
  let swapped = true;
  while(swapped) {
    swapped = false;
    for (let i = 0; i < products.length - 1; i++){
      if (products[i].price > products[i + 1].price){
        swapped = true;
        [products[i], products[i + 1]] = [products[i + 1], products[i]]
      }
    }
  }
  return products
};

// sort products by price, descending order
const sortProductPriceD = (products) => {
  let swapped = true;
  while(swapped) {
    swapped = false;
    for (let i = 0; i < products.length - 1; i++){
      if (products[i].price < products[i + 1].price){
        swapped = true;
        [products[i], products[i + 1]] = [products[i + 1], products[i]]
      }
    }
  }
  return products
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (products) => {
  let swapped = true;
  while(swapped) {
    swapped = false;
    for (let i = 0; i < products.length - 1; i++){
      if (products[i].price > products[i + 1].price){
        swapped = true;
        [products[i], products[i + 1]] = [products[i + 1], products[i]]
      } else if (products[i].price === products[i + 1].price){
        if (products[i].name > products[i + 1].name){
          [products[i], products[i + 1]] = [products[i + 1], products[i]]
        }
      }
    }
  }
  return products
};

// sort catArt by designed by
const catArtSortDesginedByA = (catArt) => {
  let swapped = true;
  while(swapped) {
    swapped = false;
    for (let i = 0; i < catArt.length - 1; i++){
      if (catArt[i].designedBy > catArt[i + 1].designedBy){
        swapped = true;
        [catArt[i], catArt[i + 1]] = [catArt[i + 1], catArt[i]]
      }
    }
  }
  return catArt
};

// sort catArt by price
const catArtSortByPriceA = (catArt) => {
  let swapped = true;
  while(swapped) {
    swapped = false;
    for (let i = 0; i < catArt.length - 1; i++){
      let currentPrice = converter(catArt[i].price);
      let nextPrice = converter(catArt[i + 1].price);
      if (currentPrice > nextPrice){
        swapped = true;
        [catArt[i], catArt[i + 1]] = [catArt[i + 1], catArt[i]]
      }
    }
  }
  return catArt
};

//helper function to convert catArt Prices
const converter = (price) => {
  let newPrice = Number(price);
  if (isNaN(newPrice)){
    newPrice = Number(price.substr(2)) * 10
  }
  return newPrice;
}

// Create your own sort function
// it should sort in ascending order
// it should work for numbers or words (case sensitive)
// create your own sort algorithm
// or try to implement bubble sort
// or try to implement merge sort
// or look up another common sort algorithm (i.e. quicksort, ) and try your own implementation
// Bonus add another argument that would allow the function to be used for ascending or descending order
const mySortFunction = (nums, func) => {
  let swapped = false;
  const defaultFunc = (a, b) => {
    return a > b
  }
  func = func || defaultFunc;
  for (let i = 0; i < nums.length - 1; i++){
    if (func(nums[i], nums[i+1])){
      swapped = true;
      [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
    }
  }
  return swapped ? mySortFunction(nums, func) : nums;
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
