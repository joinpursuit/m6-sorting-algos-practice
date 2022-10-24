const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (nums) => {
  let isSorted = false;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        isSorted = false;
        let temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
      }
    }
  }

  //since in the test 10 comes before 2, so I assume it is sort by char order
  return nums;
};

// sort numbers in descending order
const sortNumsD = (nums) => {
  let isSorted = false;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] < nums[i + 1]) {
        isSorted = false;
        let temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
      }
    }
  }

  return nums;
};

// sort words in ascending order case sensitive
const sortWordsA = (words) => {
  let isSorted = false;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < words.length - 1; i++) {
      if (words[i] > words[i + 1]) {
        isSorted = false;
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
  let isSorted = false;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < words.length - 1; i++) {
      if (words[i].toLowerCase() < words[i + 1].toLowerCase()) {
        isSorted = false;
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
  let isSorted = false;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < products.length - 1; i++) {
      if (products[i].name.toLowerCase() > products[i + 1].name.toLowerCase()) {
        isSorted = false;
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
  let isSorted = false;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < products.length - 1; i++) {
      if (products[i].price > products[i + 1].price) {
        isSorted = false;
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
  let isSorted = false;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < products.length - 1; i++) {
      if (products[i].price < products[i + 1].price) {
        isSorted = false;
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
  let isSorted = false;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < products.length - 1; i++) {
      if (products[i].price > products[i + 1].price) {
        isSorted = false;
        let temp = products[i];
        products[i] = products[i + 1];
        products[i + 1] = temp;
      } else if (products[i].price === products[i + 1].price) {
        if (products[i].name > products[i + 1].name) {
          isSorted = false;
          let temp = products[i];
          products[i] = products[i + 1];
          products[i + 1] = temp;
        }
      }
    }
  }

  return products;
};

// sort catArt by designed by
const catArtSortDesginedByA = (catArts) => {
  let isSorted = false;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < catArts.length - 1; i++) {
      if (catArts[i].designedBy > catArts[i + 1].designedBy) {
        isSorted = false;
        let temp = catArts[i];
        catArts[i] = catArts[i + 1];
        catArts[i + 1] = temp;
      }
    }
  }

  return catArts;
};

function convertPrice(price) {
  price = price.toString();
  if (price.includes("♇♇")) {
    return 10 * parseFloat(price.slice(2));
  }

  return parseFloat(price);
}

// sort catArt by price
const catArtSortByPriceA = (catArts) => {
  let isSorted = false;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < catArts.length - 1; i++) {
      if (convertPrice(catArts[i].price) > convertPrice(catArts[i + 1].price)) {
        isSorted = false;
        let temp = catArts[i];
        catArts[i] = catArts[i + 1];
        catArts[i + 1] = temp;
      }
    }
  }

  return catArts;
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
  if (typeof arr[0] === "number") {
    let isSorted = false;
    while (!isSorted) {
      isSorted = true;
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          isSorted = false;
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
        }
      }
    }
  } else if (typeof arr[0] === "string") {
    let isSorted = false;
    while (!isSorted) {
      isSorted = true;
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          isSorted = false;
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
        }
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
