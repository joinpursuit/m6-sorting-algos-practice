const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = () => {
  let sortAsc = true;

  while (sortAsc) {
    sortAsc = false;

    for (let i = 0; i < someNums.length - 1; i++) {
      const first = someNums[i];
      const next = someNums[i + 1];

      if (first > next) {
        [someNums[i], someNums[i + 1]] = [next, first]
        sortAsc = true;
      }
    }
  }
  return someNums;
};

// sort numbers in descending order
const sortNumsD = () => {
  let sortAsc = true;

  while (sortAsc) {
    sortAsc = false;

    for (let i = 0; i < someNums.length - 1; i++) {
      const first = someNums[i];
      const next = someNums[i + 1];

      if (first < next) {
        [someNums[i], someNums[i + 1]] = [next, first]
        sortAsc = true;
      }
    }
  }
  return someNums;

};

// sort words in ascending order case sensitive
const sortWordsA = () => {
  let sortAsc = true;

  while (sortAsc) {
    sortAsc = false;

    for (let i = 0; i < someWords.length - 1; i++) {
      const first = someWords[i];
      const next = someWords[i + 1];

      if (first > next) {
        [someWords[i], someWords[i + 1]] = [next, first]
        sortAsc = true;
      }
    }
  }
  return someWords;

};

// sort words in descending order case insensitive
const sortWordsD = () => {

  let sortAsc = true;

  while (sortAsc) {
    sortAsc = false;

    for (let i = 0; i < someWords.length - 1; i++) {
      const first = someWords[i].toLowerCase();
      const next = someWords[i + 1].toLowerCase();

      if (first < next) {
        [someWords[i], someWords[i + 1]] = [next, first]
        sortAsc = true;
      }
    }
  }
  return someWords;
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = () => {
  let sortAsc = true;

  while (sortAsc) {
    sortAsc = false;

    for (let i = 0; i < someProducts.length - 1; i++) {
      const first = someProducts[i];
      const next = someProducts[i + 1];

      if (first.name > next.name) {
        [someProducts[i], someProducts[i + 1]] = [next, first]
        sortAsc = true;
      }
    }
  }
  return someProducts;

};

// sort products by price, ascending order
const sortProductPriceA = () => {
  let sortAsc = true;

  while (sortAsc) {
    sortAsc = false;

    for (let i = 0; i < someProducts.length - 1; i++) {
      const first = someProducts[i];
      const next = someProducts[i + 1];

      if (first.price > next.price) {
        [someProducts[i], someProducts[i + 1]] = [next, first]
        sortAsc = true;
      }
    }
  }
  return someProducts;
};

// sort products by price, descending order
const sortProductPriceD = () => {

  let sortAsc = true;

  while (sortAsc) {
    sortAsc = false;

    for (let i = 0; i < someProducts.length - 1; i++) {
      const first = someProducts[i];
      const next = someProducts[i + 1];

      if (first.price < next.price) {
        [someProducts[i], someProducts[i + 1]] = [next, first]
        sortAsc = true;
      }
    }
  }
  return someProducts;
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = () => {
  let sortAsc = true;

  while (sortAsc) {
    sortAsc = false;

    for (let i = 0; i < someProducts.length - 1; i++) {
      const first = someProducts[i];
      const next = someProducts[i + 1];

      if (first.price > next.price) {
        [someProducts[i], someProducts[i + 1]] = [next, first]
        sortAsc = true;
      }
    }
  }
  return someProducts;
};

// sort catArt by designed by
const catArtSortDesginedByA = () => {
  let sortAsc = true;

  while (sortAsc) {
    sortAsc = false;

    for (let i = 0; i < catArt.length - 1; i++) {

      const first = catArt[i];
      const next = catArt[i + 1];

      if (first.designedBy > next.designedBy) {
        [catArt[i], catArt[i + 1]] = [next, first]
        sortAsc = true;
      }
    }
  }
  return catArt;

};

// sort catArt by price
const catArtSortByPriceA = () => {
  let sortAsc = true;
  // console.log(catArt[2].price.charAt(0))
  while (sortAsc) {
    sortAsc = false;
    for (let i = 0; i < catArt.length - 1; i++) {
      let first = catArt[i].price;
      let next = catArt[i + 1].price;

      // if(first === "♇♇3"){
      //   first =  10 * parseFloat(first.slice(2))
      //   // console.log(first)
      // } else
      // if(first === "♇♇5"){
      //   first =  10 * parseFloat(first.slice(2))
      //   // console.log(first)
      // } else
      // if(first === "♇♇7"){
      //   first =  10 * parseFloat(first.slice(2))
      //   // console.log(first)
      // }
      console.log(`${first} <--- at iteration ${i}
        ${next} <---- at iteration ${i + 1}
      `)
       
      if (Number(first) > Number(next)) {
        [catArt[i], catArt[i + 1]] = [next, first]
        sortAsc = true;
      }
    }
  }
  // console.log(catArt)
  return catArt;
};



// Create your own sort function
// it should sort in ascending order
// it should work for numbers or words (case sensitive)
// create your own sort algorithm
// or try to implement bubble sort
// or try to implement merge sort
// or look up another common sort algorithm (i.e. quicksort, ) and try your own implementation
// Bonus add another argument that would allow the function to be used for ascending or descending order
const mySortFunction = () => {
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
