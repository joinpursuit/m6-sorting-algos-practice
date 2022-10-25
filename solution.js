const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (someNums) => {
  for(let i = 0; i < someNums.length; i++){
       for(let j = 0; j < ( someNums.length - i -1 ); j++){
        if(someNums[j] > someNums[j+1]){
          let temp = someNums[j]
          someNums[j] = someNums[j + 1]
          someNums[j+1] = temp
        }
      }
    }
    return someNums
   }


// sort numbers in descending order
const sortNumsD = (someNums) => {
  for(let i = 0; i < someNums.length; i++){
    for(let j = 0; j < ( someNums.length - i -1 ); j++){
     if(someNums[j] < someNums[j+1]){
       let temp = someNums[j]
       someNums[j] = someNums[j + 1]
       someNums[j+1] = temp
     }
   }
 }
 return someNums
}


// sort words in ascending order case sensitive
const sortWordsA = (someWords) => {
  for(let i = 0; i < someWords.length; i++){
    for(let j = 0; j < ( someWords.length - i -1 ); j++){
     if(someWords[j] > someWords[j+1]){
       let temp = someWords[j]
       someWords[j] = someWords[j + 1]
       someWords[j+1] = temp
     }
   }
 }
 return someWords
}


// sort words in descending order case insensitive
const sortWordsD = (someWords) => {
  for(let i = 0; i < someWords.length; i++){
    for(let j = 0; j < ( someWords.length - i -1 ); j++){
     if(someWords[j].toLowerCase() < someWords[j+1].toLowerCase()){
       let temp = someWords[j]
       someWords[j] = someWords[j + 1]
       someWords[j+1] = temp
     }
   }
 }
 return someWords
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (someProducts) => {
  for(let i = 0; i < someProducts.length; i++){
    for(let j = 0; j < ( someProducts.length - i -1 ); j++){
     if(someProducts[j].name > someProducts[j+1].name){
       let temp = someProducts[j]
       someProducts[j] = someProducts[j + 1]
       someProducts[j+1] = temp
     }
   }
 }
 return someProducts
}


// sort products by price, ascending order
const sortProductPriceA = (someProducts) => {
  for(let i = 0; i < someProducts.length; i++){
    for(let j = 0; j < ( someProducts.length - i -1 ); j++){
     if(someProducts[j].price > someProducts[j+1].price){
       let temp = someProducts[j]
       someProducts[j] = someProducts[j + 1]
       someProducts[j+1] = temp
     }
   }
 }
 return someProducts
};

// sort products by price, descending order
const sortProductPriceD = (someProducts) => {
  for(let i = 0; i < someProducts.length; i++){
    for(let j = 0; j < ( someProducts.length - i -1 ); j++){
     if(someProducts[j].price < someProducts[j+1].price){
       let temp = someProducts[j]
       someProducts[j] = someProducts[j + 1]
       someProducts[j+1] = temp
     }
   }
 }
 return someProducts
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - 1 - i; j++) {
        if (array[[j]].price > array[j + 1].price) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        } else if (array[[j]].price === array[j + 1].price) {
          if (array[[j]].name.toLowerCase() > array[j + 1].name.toLowerCase())
            [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }
    return array;
  };



// sort catArt by designed by
const catArtSortDesginedByA = (catArt) => {
  for(let i = 0; i < catArt.length; i++){
    for(let j = 0; j < ( catArt.length - i -1 ); j++){
     if(catArt[j].designedBy > catArt[j+1].designedBy){
       let temp = catArt[j]
       catArt[j] = catArt[j + 1]
       catArt[j+1] = temp
     }
   }
 }
 return catArt
}


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

const mySortFunction = (arr) => {
  if(arr.length <= 1) {
    return arr
  }
  
  const pivot = arr[arr.length-1]
  const leftArr = [];
  const rightArr = [];
  for(const el of arr.slice(0, arr.length-1)) {
    el < pivot ? leftArr.push(el) : rightArr.push(el);
  }
 
  if (leftArr.length > 0 && rightArr.length > 0) {
    return [...mySortFunction(leftArr), pivot, ...mySortFunction(rightArr)]
  } else if (leftArr.length > 0) {
    return [...mySortFunction(leftArr), pivot];
  } else {
    return [pivot, ...mySortFunction(rightArr)]
  }
}



 

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
