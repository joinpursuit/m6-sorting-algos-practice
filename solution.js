const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (numsArray) => {
  let swap = true;
  while (swap) {
    swap = false;
    for (let i = 0; i < numsArray.length - 1; i++) {
      if (numsArray[i] > numsArray[i + 1]) {
        swap = true;
        let temp = numsArray[i];
        numsArray[i] = numsArray[i + 1];
        numsArray[i + 1] = temp;
      }
    }
  }
  return numsArray;
};

// sort numbers in descending order
const sortNumsD = (numsArray) => {
  let swap = true;
  while (swap) {
    swap = false;
    for (let i = 0; i < numsArray.length - 1; i++) {
      if (numsArray[i] < numsArray[i + 1]) {
        swap = true;
        let temp = numsArray[i];
        numsArray[i] = numsArray[i + 1];
        numsArray[i + 1] = temp;
      }
    }
  }
  return numsArray;
};

// sort words in ascending order case sensitive
const sortWordsA = (words) => {
  let swap = true;
  while (swap) {
    swap = false;
    for (let i = 0; i < words.length - 1; i++) {
      if (words[i] > words[i + 1]) {
        swap = true;
        let temp = words[i];
        words[i] = words[i + 1];
        words[i + 1] = temp;
      }
    }
  }
  return words;
};

// sort words in descending order case insensitive
const sortWordsD = (words) => {
  let swap = true;
  while (swap) {
    swap = false;
    for (let i = 0; i < words.length - 1; i++) {
      if (words[i].toLowerCase() < words[i + 1].toLowerCase()) {
        swap = true;
        let temp = words[i];
        words[i] = words[i + 1];
        words[i + 1] = temp;
      }
    }
  }
  return words;
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (products) => {
  let swap = true;
  while (swap) {
    swap = false;
    for (let i = 0; i < products.length - 1; i++) {
      if (products[i].name > products[i + 1].name) {
        swap = true;
        let temp = products[i];
        products[i] = products[i + 1];
        products[i + 1] = temp;
      }
    }
  }
  return products;
};

// sort products by price, ascending order
const sortProductPriceA = (products) => {
  let swap = true;
  while (swap) {
    swap = false;
    for (let i = 0; i < products.length - 1; i++) {
      if (products[i].price > products[i + 1].price) {
        swap = true;
        let temp = products[i];
        products[i] = products[i + 1];
        products[i + 1] = temp;
      }
    }
  }
  return products;
};

// sort products by price, descending order
const sortProductPriceD = (products) => {
  let swap = true;
  while (swap) {
    swap = false;
    for (let i = 0; i < products.length - 1; i++) {
      if (products[i].price < products[i + 1].price) {
        swap = true;
        let temp = products[i];
        products[i] = products[i + 1];
        products[i + 1] = temp;
      }
    }
  }
  return products;
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (products) => {
  // console.log(products);
  sortProductPriceA(products);
  // sortProductNamesA(products);
  // console.log(products);
  return products;
};

// sort catArt by designed by
const catArtSortDesginedByA = (products) => {
  let swap = true;
  while (swap) {
    swap = false;
    for (let i = 0; i < products.length - 1; i++) {
      if (products[i].designedBy > products[i + 1].designedBy) {
        swap = true;
        let temp = products[i];
        products[i] = products[i + 1];
        products[i + 1] = temp;
      }
    }
  }
  return products;
};

const priceConvert = (price) => {
  if (typeof price === "string") {
    if (price.includes("♇♇")) {
      return Number(price.slice(2)) * 10;
    }
    return Number(price);
  } else {
    return price;
  }
};
// sort catArt by price
const catArtSortByPriceA = (products) => {
  let swap = true;
  while (swap) {
    swap = false;
    for (let i = 0; i < products.length - 1; i++) {
      let priceLeft = priceConvert(products[i].price);
      let priceRight = priceConvert(products[i + 1].price);
      if (priceLeft > priceRight) {
        swap = true;
        let temp = products[i];
        products[i] = products[i + 1];
        products[i + 1] = temp;
      }
    }
  }
  return products;
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
  array = array.map((item) => [item]);
  console.log(array);
  while (array.length > 1) {
    let newArray = [];
    for (let i = array.length - 1; i > 0; i -= 2) {
      let right = array.pop();
      let left = array.pop();
      let temp = [];
      while (left.length && right.length) {
        if (left[0] <= right[0]) {
          temp.push(left.shift());
        } else {
          temp.push(right.shift());
        }
      }
      newArray.push([...temp, ...left, ...right]);
    }
    if (array.length > 0) {
      array = [...array, ...newArray];
    } else {
      array = newArray;
    }
    console.log(array);
  }
  return array[0];
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
