const { catArt, someNums, someProducts, someWords } = require("./data/data.js");
const {  mergeSort, swap, mergeSortDec} = require("./utilities")

// sort numbers in ascending order

const sortNumsA = (arr) => {

  // merge merge
  return mergeSort(arr)

};

// sort numbers in descending order
const sortNumsD = (arr) => {

  // merge merge merrrrge
  return mergeSortDec(arr)

};

// sort words in ascending order case sensitive
const sortWordsA = (arr) => {

  let swapped = true;

  while(swapped) {
    swapped = false;
    for (let i = 0; i< arr.length; i++ ) {
      let uppered = arr[i]
      let uppered2 = arr[i+1]

      if (uppered > uppered2){
         swap(arr, i, i+1)
         swapped = true;
      }
    }
  }
  return arr


};
  
// sort words in descending order case insensitive
const sortWordsD = (arr) => {

  return arr.sort((a,b) => b.localeCompare(a))

};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (arr) => {
  //why not use localeCompare for once? lol
  return arr.sort((a,b) => a.name.localeCompare(b.name))

};

// sort products by price, ascending order
const sortProductPriceA = (arr) => {

  let swapped = true;

  while(swapped) {
    swapped = false;
    for (let i = 0; i< arr.length-1; i++ ) {
   
      if (arr[i].price > arr[i+1].price){
         swap(arr, i, i+1)
         swapped = true;
      }
    }
  }
  return arr

};

// sort products by price, descending order
const sortProductPriceD = (arr) => {

  let swapped = true;

  while(swapped) {
    swapped = false;
    for (let i = 0; i< arr.length-1; i++ ) {
   
      if (arr[i].price < arr[i+1].price){
         swap(arr, i, i+1)
         swapped = true;
      }
    }
  }
  return arr

};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (arr) => {

  let swapped = true;

  while(swapped) {
    swapped = false;
    for (let i = 0; i< arr.length-1; i++ ) {
   
      if (arr[i].price > arr[i+1].price){
         swap(arr, i, i+1)
         swapped = true;
      }
      if (arr[i].price === arr[i+1].price && arr[i].name > arr[i+1].name) {

        swap(arr, i, i+1)
        swapped = true;
      }
    }
  }
  return arr

};

// sort catArt by designed by
const catArtSortDesginedByA = (arr) => {

  
  let swapped = true;

  while(swapped) {
    swapped = false;
    for (let i = 0; i< arr.length-1; i++ ) {
   
      if (arr[i].designedBy > arr[i+1].designedBy){
         swap(arr, i, i+1)
         swapped = true;
      }
    }
  }
return arr
};


const priceConvert = (num) => {

  if (num.toString().split("").includes("♇")) {
    num = num.toString()[2];
    let converted = Number(num) * 10;
    num = converted
  } 
  return Number(num) 
}

// sort catArt by price
const catArtSortByPriceA = (arr) => {

  let swapped = true;

  while(swapped) {
    swapped = false;

    for (let i = 0; i< arr.length-1; i++ ) {

      if (priceConvert(arr[i].price)> priceConvert(arr[i+1].price)){
         swap(arr, i, i+1)
         swapped = true;
      }
     
    }
  }

return arr


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

  let swapped = true;

  while(swapped) {
    swapped = false;
    for (let i = 0; i< arr.length-1; i++ ) {
   
      if (arr[i]> arr[i+1]){
         swap(arr, i, i+1)
         swapped = true;
      }
    }
  }
return arr
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
