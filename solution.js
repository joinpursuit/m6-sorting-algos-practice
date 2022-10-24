
const { catArt, someNums, someProducts, someWords } = require('./data/data.js');

// sort numbers in ascending order
const sortNumsA = (array) => {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < array.length-1 ; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
      }
      
    }
  }
  return array;
};


// sort numbers in descending order
const sortNumsD = (array) => {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] < array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
      }
    }
  }
  return array;
};

// sort words in ascending order case sensitive
const sortWordsA = (words) => {
  let swapped = true
  while(swapped){
    swapped = false
    for(let i = 0; i < words.length-1; i++){
 
      if(words[i]> words[i+1]){
        [words[i], words[i+1]] = [words[i+1],words[i] ]
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
 
      if(words[i].toLowerCase() < words[i+1].toLowerCase()){
        [words[i], words[i+1]] = [words[i+1],words[i] ]
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
 
      if(products[i].name.toLowerCase() > products[i+1].name.toLowerCase()){
        [products[i], products[i+1]] = [products[i+1],products[i] ]
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
      
      if(1*products[i].price > 1*products[i+1].price ){
        [products[i], products[i+1]] = [products[i+1], products[i]]
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
      
      if(1*products[i].price < 1*products[i+1].price ){
        [products[i], products[i+1]] = [products[i+1], products[i]]
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
      
      if(1*products[i].price > 1*products[i+1].price ){

        [products[i], products[i+1]] = [products[i+1], products[i]]
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
    
      if(products[i].designedBy > products[i+1].designedBy){
        [products[i], products[i+1]] = [products[i+1], products[i]]
        swapped = true
      }
    }
  }
  return products
};

function calculatePrice(price){
  
  if (typeof price === "string") {
    if(price.includes("♇")){
      return Number(price.slice(2) * 10)
    }
  }
  // if(isNaN(Number(price))) return Number(price.slice(2)*10)
  return Number(price)
}

// sort catArt by price
const catArtSortByPriceA = (products) => {
  let swapped = true
  while(swapped){
    swapped = false
    for(let i = 0; i < products.length-1; i++){
      
      let currentPrice = calculatePrice(products[i].price)
      let nextPrice = calculatePrice(products[i+1].price)
      if(currentPrice > nextPrice){
        [products[i], products[i+1]] = [products[i+1], products[i]]
        swapped = true
      }
    }
  }
  return products
};



// Create your own sort function
// it should sort in ascending order
// it should work for numbers or words (case sensitive)
// create your own sort algorithm
// or try to implement bubble sort
// or try to implement merge sort
// or look up another common sort algorithm (i.e. quicksort, ) and try your own implementation
// Bonus add another argument that would allow the function to be used for ascending or descending order



  //quicksort method
const mySortFunction = (origArray,order='asc') => {

   if (origArray.length <= 1) { 
   	return origArray;
   } else {
 
   	var left = [];
   	var right = [];
   	var newArray = [];
   	var pivot = origArray.pop();
   	var length = origArray.length;
 
   	for (var i = 0; i < length; i++) {
      if(order==='asc') {
   		  if (origArray[i] <= pivot) {
   			left.push(origArray[i]);
   		   } else {
   			right.push(origArray[i]);
   		  }
   	 }else if(order==='desc'){
       if (origArray[i] >= pivot) {
   			left.push(origArray[i]);
   		   } else {
   			right.push(origArray[i]);
   		  }
       }
     }
   	return newArray.concat(mySortFunction(left), pivot, mySortFunction(right));
   }
  }

//    const _mergeArrays = (a, b,order) => {
//     const c = []
  
//     while (a.length && b.length) {
//       if(order==='asc') c.push(a[0] > b[0] ? b.shift() : a.shift())
//       if(order==='desc') c.push(a[0] < b[0] ? b.shift() : a.shift())
//     }
  
//     //if we still have values, let's add them at the end of `c`
//     while (a.length) {
//       c.push(a.shift())
//     }
//     while (b.length) {
//       c.push(b.shift())
//     }
  
//     return c
//   }
  
  

// const mySortFunction = (array,order='asc') => {
// if (array.length < 2) return array
//     const middle = Math.floor(array.length / 2)
//     const a_l = array.slice(0, middle)
//     const a_r = array.slice(middle,array.length)
//     const sorted_l = mySortFunction (a_l)
//     const sorted_r = mySortFunction (a_r)
   
//     return _mergeArrays(sorted_l, sorted_r,order)
    
// };
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

