const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
// const sortNumsA = (nums) => {
//   nums = nums.map((num) => `${num}`)
//   let swapped = true
//   while (swapped) {
//     swapped = false
//     for (let i = 0; i < nums.length; i++) {
//       if (nums[i] > nums[i+1]) {
//         let temp = nums[i]
//         nums[i] = nums[i+1]
//         nums[i+1] = temp
//         swapped = true
//       }
//     }
//   }
//   return nums.map((num) => +num)
// };

const mergeNumsA = (left, right) => {
  let sorted = [];
  while (left.length && right.length) {
    if (left[0].toString() < right[0].toString()) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }
  return [...sorted, ...left, ...right];
};

// sort numbers in ascending order (with strings in array)
const sortNumsA = (numsA) => {
  if (numsA.length <= 1) {
    return numsA;
  };
  let half = numsA.length / 2; 
  let left = numsA.splice(0, half);
  let right = numsA;
  
  return mergeNumsA(sortNumsA(left), sortNumsA(right));
};

// console.log(sortNumsA(someNums));

// sort numbers in descending order
const mergeNumsD = (left, right) => {
  let sorted = [];
  while (left.length && right.length) {
    if (left[0] > right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }
  return [...sorted, ...left, ...right];
};
    
const sortNumsD = (numsD) => {
  if (numsD.length <= 1) {
    return numsD;
  };
  let half = numsD.length / 2; 
  let left = numsD.splice(0, half);
  let right = numsD;
  
  return mergeNumsD(sortNumsD(left), sortNumsD(right));
};
    
// console.log(sortNumsD(someNums));
    
// sort words in ascending order case sensitive
const mergeWordsA = (left, right) => {
  let sorted = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    };
  }
  return [...sorted, ...left, ...right];
};

const sortWordsA = (wordsA) => {
  if (wordsA.length <= 1) {
    return wordsA;
  };
  let half = wordsA.length / 2; 
  let left = wordsA.splice(0, half);
  let right = wordsA;
  
  return mergeWordsA(sortWordsA(left), sortWordsA(right));
};

// // sort words in descending order case insensitive
// const sortWordsD = () => {};

// sort products by name, ascending order case insensitive
const mergeProductNamesA = (left, right) => {
  let sorted = [];
  while (left.length && right.length) {
    if (left[0].name < right[0].name) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    };
  };
  return [...sorted, ...left, ...right];
};

const sortProductNamesA = (productsA) => {
  if (productsA.length <= 1) {
    return productsA;
  };
  let half = productsA.length / 2; 
  let left = productsA.splice(0, half);
  let right = productsA;

  return mergeProductNamesA(sortProductNamesA(left), sortProductNamesA(right));
};

// // sort products by price, ascending order
// const mergeProductPriceA = (left, right) => {
//   let sorted = [];
//   while (left.length && right.length) {
//     if (left[0].price < right[0].price) {
//       sorted.push(left.shift());
//     } else {
//       sorted.push(right.shift());
//     };
//   };
//   return [...sorted, ...left, ...right];
// };

// const sortProductPriceA = (priceA) => {
//   if (priceA.length <= 1) {
//     return priceA;
//   };
//   let half = priceA.length / 2; 
//   let left = priceA.splice(0, half);
//   let right = priceA;

//   let result = mergeProductPriceA(sortProductPriceA(left), sortProductPriceA(right));
//   return result;
// };

// // console.log(sortProductPriceA(someProducts));

// // sort products by price, descending order
// const sortProductPriceD = () => {};

// // sort products by price, then by name, ascending order
// const sortProducsPriceNameA = () => {};

// // sort catArt by designed by
// const catArtSortDesginedByA = () => {};

// // sort catArt by price
// const catArtSortByPriceA = () => {};

// // Create your own sort function
// // it should sort in ascending order
// // it should work for numbers or words (case sensitive)
// // create your own sort algorithm
// // or try to implement bubble sort
// // or try to implement merge sort
// // or look up another common sort algorithm (i.e. quicksort, ) and try your own implementation
// // Bonus add another argument that would allow the function to be used for ascending or descending order
// const mySortFunction = () => {};

module.exports = {
  sortNumsA,
  sortNumsD,
  sortWordsA,
  // sortWordsD,
  sortProductNamesA,
  // sortProductPriceA,
  // sortProductPriceD,
  // sortProducsPriceNameA,
  // catArtSortDesginedByA,
  // catArtSortByPriceA,
  // mySortFunction,
};
