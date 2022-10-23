const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (someNums) => {
  for (let i = 0; i < someNums.length - 1; i++) {
    for (let j = 0; j < someNums.length - 1 - i; j++) {
      if (someNums[[j]] > someNums[j + 1])
        [someNums[j], someNums[j + 1]] = [someNums[j + 1], someNums[j]];
    }
  }
  return someNums;
};

// sort numbers in descending order
const sortNumsD = (someNums) => {
   for (let i = 0; i < someNums.length - 1; i++) {
     for (let j = 0; j < someNums.length - 1 - i; j++) {
       if (someNums[[j]] < someNums[j + 1])
         [someNums[j], someNums[j + 1]] = [someNums[j + 1], someNums[j]];
     }
   }
   return someNums;
};

// sort words in ascending order case sensitive
const sortWordsA = (someWords) => {
  for (let i = 0; i < someWords.length - 1; i++) {
    for (let j = 0; j < someWords.length - 1 - i; j++) {
      if (someWords[[j]] > someWords[j + 1])
        [someWords[j], someWords[j + 1]] = [someWords[j + 1], someWords[j]];
    }
  }
  return someWords;
};

// sort words in descending order case insensitive
const sortWordsD = (someWords) => {
    for (let i = 0; i < someWords.length - 1; i++) {
      for (let j = 0; j < someWords.length - 1 - i; j++) {
        if (someWords[[j]].toLowerCase() < someWords[j + 1].toLowerCase())
          [someWords[j], someWords[j + 1]] = [someWords[j + 1], someWords[j]];
      }
    }
    return someWords;
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - 1 - i; j++) {
        if (array[[j]].name.toLowerCase() > array[j + 1].name.toLowerCase())
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
    return array;
};

// sort products by price, ascending order
const sortProductPriceA = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - 1 - i; j++) {
        if (array[[j]].price > array[j + 1].price)
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
    return array;
};

// sort products by price, descending order
const sortProductPriceD = (array) => {
   for (let i = 0; i < array.length - 1; i++) {
     for (let j = 0; j < array.length - 1 - i; j++) {
       if (array[[j]].price < array[j + 1].price)
         [array[j], array[j + 1]] = [array[j + 1], array[j]];
     }
   }
   return array;
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (array) => {
   for (let i = 0; i < array.length - 1; i++) {
     for (let j = 0; j < array.length - 1 - i; j++) {
       if (array[[j]].price > array[j + 1].price){
         [array[j], array[j + 1]] = [array[j + 1], array[j]]
       }else if (array[[j]].price === array[j + 1].price){
        if (array[[j]].name.toLowerCase() > array[j + 1].name.toLowerCase())
         [array[j], array[j + 1]] = [array[j + 1], array[j]]
     }
  }
}
  return array;
};

// sort catArt by designed by
const catArtSortDesginedByA = (array) => {
     for (let i = 0; i < array.length - 1; i++) {
       for (let j = 0; j < array.length - 1 - i; j++) {
         if (array[[j]].designedBy > array[j + 1].designedBy)
           [array[j], array[j + 1]] = [array[j + 1], array[j]];
       }
     }
     return array;
};

// sort catArt by price
const catArtSortByPriceA = (arr) => {
  const converter = (price) => {
    if (typeof price === "number") {
      return price;
    } else if (price * 1 == price) {
      return price;
    } else {
      return price.split("").splice(2).join() * 10;
    }
  };
  let swapping = true;

  while (swapping) {
    swapping = false;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].price)
        if (converter(arr[i].price) > converter(arr[i + 1].price)) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          swapping = true;
        }
    }
  }
  return arr;
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
  let swapping = true;

  while (swapping) {
    swapping = false;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i])
        if (arr[i] > arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          swapping = true;
        }
    }
  }
  return arr;
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
