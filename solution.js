const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (nums) => {
	let swapping = true;
	while (swapping) {
		swapping = false;
		for (let n = 0; n < nums.length - 1; n++) {
			if (nums[n] > nums[n + 1]) {
				[nums[n], nums[n + 1]] = [nums[n + 1], nums[n]];
				swapping = true;
			}
		}
	}
	return nums;
};

// sort numbers in descending order
const sortNumsD = (nums) => {
  return nums.sort((a, b) => b - a);
};

// sort words in ascending order case sensitive
const sortWordsA = (array) => {
  return array.sort();
};
	


// sort words in descending order case insensitive
const sortWordsD = (words) => {
	let swapping = true;
	while (swapping) {
		swapping = false;
		for (let n = 0; n < words.length - 1; n++) {
			if (words[n + 1].toUpperCase() > words[n].toUpperCase()) {
				[words[n], words[n + 1]] = [words[n + 1], words[n]];
				swapping = true;
			}
		}
	}
	return words;
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (arr) => {
	let swapping = true;
	while (swapping) {
		swapping = false;
		for (let n = 0; n < arr.length - 1; n++) {
			if (arr[n].name.toUpperCase() > arr[n + 1].name.toUpperCase()) {
				[arr[n], arr[n + 1]] = [arr[n + 1], arr[n]];
				swapping = true;
			}
		}
	}
	return arr;
};

// sort products by price, ascending order
const sortProductPriceA = (array) => {
  return array.sort((a, b) => a.price - b.price);
};

// sort products by price, descending order
const sortProductPriceD = (arr) => {
	let swapping = true;
	while (swapping) {
		swapping = false;
		for (let n = 0; n < arr.length - 1; n++) {
			if (arr[n + 1].price > arr[n].price) {
				[arr[n], arr[n + 1]] = [arr[n + 1], arr[n]];
				swapping = true;
			}
		}
	}
	return arr;
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (array) => {
  return array.sort((a, b) => a.price - b.price);
};


// sort catArt by designed by
const catArtSortDesginedByA = (arr) => {
	let swapping = true;
	while (swapping) {
		swapping = false;
		for (let n = 0; n < arr.length - 1; n++) {
			if (arr[n].designedBy > arr[n + 1].designedBy) {
				[arr[n], arr[n + 1]] = [arr[n + 1], arr[n]];
				swapping = true;
			}
		}
	}
	return arr;
};

// sort catArt by price
const catArtSortByPriceA = (arr) => {
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
const mySortFunction = (candles) => {
  let swapping = true;
	while (swapping) {
		swapping = false;
		for (let n = 0; n < candles.length - 1; n++) {
			if (candles[n] > candles[n+1]) {
				[candles[n], candles[n + 1]] = [candles[n + 1], candles[n]];
				swapping = true;
			}
		}
	}
	return candles;


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
