const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (nums) => {
  let swapped = false
  for(let i = 0; i < nums.length - 1; i++){
    if(nums[i].toString() >= nums[i + 1].toString()){
      swapped = true;
      [nums[i], nums[i+1]] = [nums[i + 1], nums[i]]
    } //nums[i] -> current position
    //nums[i+1] -> next index to the right
  } /*used toString due to tests */

  return swapped ? sortNumsA(nums) : nums;
};

//looping from first index to last index without worrying about undefined. hence, arr.length-1

// sort numbers in descending order
const sortNumsD = (nums) => {
let swapped = true //check if we swapped

while(swapped){
swapped = false //havent swapped anything yet
  for (let i = 0; i < nums.length - 1; i++){
  if(nums[i] < nums[i+1]){
  //swap
  swapped = true
  let temp = nums[i]; // storing index
  nums[i] = nums[i + 1]; // index equals next number in arr
  nums[i + 1] = temp; 
  }
}
};
return nums //return array
}
// sort words in ascending order case sensitive
const sortWordsA = (words) => {
  let swapped = true;

  while(swapped){
    swapped = false;
    for(let i = 0; i < words.length - 1; i++){
      if(words[i] > words[i+1]){
        swapped = true;
        [words[i], words[i+1]] = [words[i + 1], words[i]]
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
      if(words[i].toLowerCase() < words[i+1].toLowerCase()){
        swapped = true;
        [words[i], words[i+1]] = [words[i + 1], words[i]]
      } 
    }
  }
  return words;
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (products) => {
  let swapped = true;
  while(swapped){
swapped = false; //false until we start swapping
for(let i = 0; i < products.length - 1; i++){
  if(products[i].name.toLowerCase() > products[i + 1].name.toLowerCase()){ //case insensitive
    swapped = true;
    [products[i], products[i + 1]] = [products[i + 1], products[i]]
  }
}
}
  return products;
};

// sort products by price, ascending order
const sortProductPriceA = (products) => {
  let swapped = true;
  while(swapped){
swapped = false; //false until we start swapping
for(let i = 0; i < products.length - 1; i++){
  if(products[i].price > products[i + 1].price){
    swapped = true;
    [products[i], products[i + 1]] = [products[i + 1], products[i]]
  }
}
}
return products //don't forget to return :P
};

// sort products by price, descending order
const sortProductPriceD = (products) => {
  let swapped = true;
  while(swapped){
    swapped = false;
    for(let i = 0; i < products.length - 1; i++){
      if(products[i].price < products[i +1].price){
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
  while(swapped){
swapped = false; //false until we start swapping
for(let i = 0; i < products.length - 1; i++){
  if(products[i].price > products[i + 1].price){
    swapped = true;
    [products[i], products[i + 1]] = [products[i + 1], products[i]]
  }
  else if(products.price === products[i+1].price){
    if(products[i].name > products[i+1].name){
      [products[i], products[i + 1]] = [products[i + 1], products[i]]
    }// if the prices are equal, sort by name, then swap
  }
}
}
return products
};

// sort catArt by designed by
const catArtSortDesginedByA = (catArt) => {
  let swapped = true;
  while(swapped){
    swapped = false;
    for(let i = 0; i < catArt.length - 1; i++){
      if(catArt[i].designedBy > catArt[i+1].designedBy){
         swapped = true;
        [catArt[i], catArt[i + 1]] = [catArt[i + 1], catArt[i]]
      }
    }
  }
  return catArt;
};

// sort catArt by price
const catArtSortByPriceA = (catArt) => {
  let swapped = true;
  while(swapped){
    swapped = false;
    for(let i = 0; i < catArt.length - 1; i++){
      let currentPrice = converter(catArt[i].price)
      let nextPrice = converter(catArt[i+1].price)
      if(currentPrice > nextPrice){
        swapped = true;
       [catArt[i], catArt[i + 1]] = [catArt[i + 1], catArt[i]]
     }
    }
  }
  return catArt //dont forget to return!!
};

//helper function
const converter = (price) => {
  let newPrice = Number(price);
  if(isNaN(newPrice)){
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
