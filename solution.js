const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (someNums) => {
  return someNums.sort(function (a, b) {
    return a - b;
  });
};

// sort numbers in descending order
const sortNumsD = (someNums) => {
  return someNums.sort(function (a, b) {
    return b - a;
  });
};

// sort words in ascending order case sensitive
const sortWordsA = (someWords) => {
  return someWords.sort();
  // console.log(someWords.sort())
};

// sort words in descending order case insensitive
const sortWordsD = (someWords) => {
  return someWords.sort(function (a, b) {
    if (a.toUpperCase() > b.toUpperCase()) return -1;
    if (a.toLowerCase() < b.toLowerCase()) return 1;
    return 0;
  });
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (someProducts) => {
  return someProducts.sort(function (a, b) {
    if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    return 0;
  });
};

// sort products by price, ascending order
const sortProductPriceA = (someProducts) => {
  return someProducts.sort(function (a, b) {
    if (a.price > b.price) return 1;
    if (a.price < b.price) return -1;
    return 0;
  });
};

// sort products by price, descending order
const sortProductPriceD = (someProducts) => {
  return someProducts.sort(function (a, b) {
    if (a.price > b.price) return -1;
    if (a.price < b.price) return 1;
    return 0;
  });
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (someProducts) => {
  //price
   return someProducts.sort(function (a, b) {
    if (a.price > b.price) return 1;
    if (a.price < b.price) return -1;
    return 0;
  })
};

// sort catArt by designed by
const catArtSortDesginedByA = (catArt) => {
  return catArt.sort(function (a, b) {
    if (a.designedBy > b.designedBy) return 1;
    if (a.designedBy < b.designedBy) return -1;
    return 0;
  })
};

// sort catArt by price
// const catArtSortByPriceA = (catArt) => {

  const convertToMeowa = (price) => {
    if(Number.isNaN(Number(price))){
      // price = price.slice(2)
      return (Number(price.slice(2)) * 10) 
    }
    return Number(price)
  }
  
  const catArtSortByPriceA = (catArt) => {
    return catArt.sort(function (a, b) {
      if (convertToMeowa(a.price) > convertToMeowa(b.price) ) return 1;
      if (convertToMeowa(a.price) < convertToMeowa(b.price) ) return -1;
      return 0;
    })
  };


// for (let i = 0; i < catArt.length; i++) {
//   if (typeof catArt[i].price !== "number" ) {// if its not a number 
//     //loop the string. so we can MAYBE covert the string into a number. or add the price with the SYMBOL.

  
//   }

//   // console.log(catArt[i].price)
// }



  //if (♇  + 10 price. )// you need to loop that .price string. 
  //temp price - so we can keep track of the convertion of the current ♇♇ string that we are looping through. 
  // might also needs to turn into a number so, we can compare. 
  //on the return - do we need to change back the symbol????;

//if price is a number - we can just compare. 
// else if price is NOT A NUMBR we need to LOOP the "price string" - and do the CONVERTION - if possible. 

// console.log(  Number(catArt[2].price === "number"))// can use this to check if its a number. 
// console.log(catArt[1].price)

  // console.log(
  //   catArt.sort(function (a, b) {
  //     if (a.price > b.price) return -1;
  //     if (a.price < b.price) return 1;
  //     return 0;
  //   })
  // ) 

// };

// Create your own sort function
// it should sort in ascending order
// it should work for numbers or words (case sensitive)
// create your own sort algorithm
// or try to implement bubble sort
// or try to implement merge sort
// or look up another common sort algorithm (i.e. quicksort, ) and try your own implementation
// Bonus add another argument that would allow the function to be used for ascending or descending order
const mySortFunction = (catArt) => {};

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
