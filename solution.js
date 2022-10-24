const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (someNums) => {
  return someNums.sort();
};

// sort numbers in descending order
const sortNumsD = (someNums) => {
  return someNums.sort((a, b) => {
    if (a > b) {
      return -1;
    } else {
      return 1;
    }
  });
};

// sort words in ascending order case sensitive
const sortWordsA = (someWords) => {
  return someWords.sort();
};

// sort words in descending order case insensitive
const sortWordsD = (someWords) => {
  return someWords.sort((a, b) => {
    if (a.toLowerCase() > b.toLowerCase()) {
      return -1;
    } else {
      return 1;
    }
  });
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (someProducts) => {
  return someProducts.sort((a, b) => {
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    } else {
      return -1;
    }
  });
};

// sort products by price, ascending order
const sortProductPriceA = (someProducts) => {
  return someProducts.sort((a, b) => {
    if (Number(a.price) === Number(b.price)) {
      return 1;
    } else if (a.price > b.price) {
      return 1;
    } else {
      return -1;
    }
  });
};

// sort products by price, descending order
const sortProductPriceD = (someProducts) => {
  return someProducts.sort((a, b) => {
    if (Number(a.price) === Number(b.price)) {
      return 1;
    } else if (a.price < b.price) {
      return 1;
    } else {
      return -1;
    }
  });
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (someProducts) => {
  return someProducts.sort((a, b) => {
    if (Number(a.price) === Number(b.price)) {
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      } else {
        return -1;
      }
    } else if (a.price > b.price) {
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      } else {
        return -1;
      }
    } else {
      return -1;
    }
  });
};

// sort catArt by designed by
const catArtSortDesginedByA = (catArt) => {
  return catArt.sort((a, b) => {
    if (a.designedBy.toLowerCase() === b.designedBy.toLowerCase()) {
      return 1;
    } else if (a.designedBy.toLowerCase() > b.designedBy.toLowerCase()) {
      return 1;
    } else {
      return -1;
    }
  });
};

// sort catArt by price
const catArtSortByPriceA = (catArt) => {
  const convertPrice = (price) => {
    if (typeof price === "string") {
      if (price[0] == "♇") {
        return price[price.length - 1] * 10;
      }
      return price * 1;
    }
    return price;
  };

  return catArt.sort((a, b) => {
    if (convertPrice(a.price) === convertPrice(b.price)) {
      return 1;
    } else if (convertPrice(a.price) > convertPrice(b.price)) {
      return 1;
    } else {
      return -1;
    }
  });
};

// Create your own sort function
// it should sort in ascending order
// it should work for numbers or words (case sensitive)
// create your own sort algorithm
// or try to implement bubble sort
// or try to implement merge sort
// or look up another common sort algorithm (i.e. quicksort, ) and try your own implementation
// Bonus add another argument that would allow the function to be used for ascending or descending order
const mySortFunction = (sortArr, sortOrder) => {
  let swapped = true;

  if (sortOrder === "ascending") {
    while (swapped) {
      swapped = false;
      for (let i = 0; i < sortArr.length - 1; i++) {
        if (sortArr[i] > sortArr[i + 1]) {
          swapped = true;
          let temp = sortArr[i + 1];
          sortArr[i + 1] = sortArr[i];
          sortArr[i] = temp;
        }
      }
    }
  } else if (sortOrder === "descending") {
    while (swapped) {
      swapped = false;
      for (let i = 0; i < sortArr.length - 1; i++) {
        if (sortArr[i] < sortArr[i + 1]) {
          swapped = true;
          let temp = sortArr[i + 1];
          sortArr[i + 1] = sortArr[i];
          sortArr[i] = temp;
        }
      }
    }
  } else {
    while (swapped) {
      swapped = false;
      for (let i = 0; i < sortArr.length - 1; i++) {
        if (sortArr[i] > sortArr[i + 1]) {
          swapped = true;
          let temp = sortArr[i + 1];
          sortArr[i + 1] = sortArr[i];
          sortArr[i] = temp;
        }
      }
    }
  }

  return sortArr;
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
