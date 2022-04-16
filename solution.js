const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (arr) => {
  arr = arr.map((eachElement) => {
    return eachElement.toString();
  });
  //create a loop looking at each element
  for (let i = 0; i < arr.length; i++) {
    //create another loop to look at each index while resting at an index
    //while arr[i] = arr[0], i'm going to look through all the indexes of the arr
    for (let j = 0; j < arr.length; j++) {
      //check to see if the current index is greater than my next index
      if (arr[j] > arr[j + 1]) {
        // If the condition is true then swap them
        //then 5 is stored as temp
        var temp = arr[j];
        //replacing the value that is bigger with the value that is smaller
        //now my 1st index, originally 5 is 3
        arr[j] = arr[j + 1];
        //now my second index is now 5
        arr[j + 1] = temp;
      }
    }
  }
  arr = arr.map((eachElement) => {
    return Number(eachElement);
  });
  return arr;
};

// sort numbers in descending order
const sortNumsD = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      //if the
      if (arr[j] < arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

// sort words in ascending order case sensitive
const sortWordsA = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      //if the
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

// sort words in descending order case insensitive
const sortWordsD = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j].toLowerCase() < arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j + 1] !== undefined) {
        if (arr[j].name > arr[j + 1].name) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }
  return arr;
};

// sort products by price, ascending order
const sortProductPriceA = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j + 1] !== undefined) {
        if (arr[j].price > arr[j + 1].price) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }
  return arr;
};

// sort products by price, descending order
const sortProductPriceD = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j + 1] !== undefined) {
        if (arr[j].price < arr[j + 1].price) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }
  return arr;
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (arr) => {
  return sortProductPriceA(arr);
};

// sort catArt by designed by
const catArtSortDesginedByA = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j + 1] !== undefined) {
        if (arr[j].designedBy > arr[j + 1].designedBy) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }
  return arr;
};

// sort catArt by price
const catArtSortByPriceA = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j + 1] !== undefined) {
        if (typeof arr[j].price === "string" && arr[j].price.includes("♇")) {
          let newPrice = Number(arr[j].price.slice(2)) * 10;
          if (
            typeof arr[j + 1].price === "string" &&
            arr[j + 1].price.includes("♇")
          ) {
            let newSecondPrice = Number(arr[j + 1].price.slice(2)) * 10;
            if (newPrice > newSecondPrice) {
              let temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
            }
          } else if (newPrice > arr[j + 1].price) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
          }
        } else if (arr[j].price > arr[j + 1].price) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
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
const mySortFunction = () => {};

// console.log(sortNumsA(someNums));
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
