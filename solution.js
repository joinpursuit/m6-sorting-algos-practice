const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (nums) => {
  return nums.sort((a, b) => a - b);
};

// sort numbers in descending order
const sortNumsD = (nums) => {
  return nums.sort((a, b) => b - a);
};

// sort words in ascending order case sensitive
const sortWordsA = (words) => {
  return words.sort();
};

// sort words in descending order case insensitive
const sortWordsD = (words) => {
  let unsorted = true;
    while (unsorted){
      unsorted = false; 
      for (let i = 0; i < words.length -1; i++){
        let firstWrd = words[i].toLowerCase();
        let secondWrd = words[i + 1].toLowerCase();
        if (firstWrd < secondWrd) {
          [words[i], words[i + 1]] = [words[i + 1], words[i]];
          unsorted = true; 
      }
    }
    return words
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (products) => {
  let unsorted = true;
while (unsorted) {
  unsorted = false;
  for (let i = 0; i < products.length - 1; i++) {
    let firstWrd = products[i]['name'].toLowerCase();
    let secondWrd = products[i + 1]['name'].toLowerCase();
    if (firstWrd > secondWrd) {
      [products[i], products[i + 1]] = [products[i + 1], products[i]];
      unsorted = true;
    }
  }
}
return products;
};

// sort products by price, ascending order
const sortProductPriceA = (products) => {
  return products.sort(a, b => a.price - b.price);
};

// sort products by price, descending order
const sortProductPriceD = (products) => {
  return products.sort((a, b) => b.price - a.price);
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (arr) => {
  return sortProductPriceA(sortProductNamesA(arr));
};

// sort catArt by designed by
const catArtSortDesginedByA = (arr) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    for (let i = 0; i < arr.length - 1; i++) {
      let firstWrd = arr[i]['designedBy'];
      let secondWrd = arr[i + 1]['designedBy'];
      if (firstWrd > secondWrd) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        unsorted = true;
      }
    }
  }
  return arr;
};

// sort catArt by price
const myCatArtSortByPriceA = (price) => {
  let fixThatPrice = (price) => {
    if (typeof price === "string") {
      if (price[0] == "♇") {
        return price[price.length - 1] * 10;
      }
      return price * 1;
    }
    return price;
  };
  let swapping = true;
	while (swapping) {
		swapping = false;
		for (let n = 0; n < arr.length - 1; n++) {
			if (fixThatPrice(arr[n].price) > fixThatPrice(arr[n + 1].price)) {
				[arr[n], arr[n + 1]] = [arr[n + 1], arr[n]];
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
const mySortFunction = (canvas) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    for (let i = 0; i < canvas.length - 1; i++) {
      if (canvas[i] > canvas[i + 1]) {
        [canvas[i], canvas[i + 1]] = [canvas[i + 1], canvas[i]]
        unsorted = true;
      }
    }
  }
  return canvas; 
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