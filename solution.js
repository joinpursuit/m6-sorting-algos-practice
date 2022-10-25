const { catArt, someNums, someProducts, someWords } = require('./data/data.js')

// sort numbers in ascending order
const sortNumsA = (arr) => {
  return arr.sort()
}

// sort numbers in descending order
const sortNumsD = (arr) => {
  return arr.sort((a, b) => b - a)
}

// sort words in ascending order case sensitive
const sortWordsA = (arr) => {
  return arr.sort()
}

// sort words in descending order case insensitive
const sortWordsD = (array) => {
  return array.sort(function (a, b) {
    if (a.toLowerCase() < b.toLowerCase()) {
      return 1
    }
    if (a.toLowerCase() > b.toLowerCase()) {
      return -1
    }
    return 0
  })
}

// sort products by name, ascending order case insensitive
const sortProductNamesA = (array) => {
  return array.sort(function (a, b) {
    if (a.name < b.name) {
      return -1
    }
    if (a.name > b.name) {
      return 1
    }
    return 0
  })
}

// sort products by price, ascending order
const sortProductPriceA = (array) => {
return array.sort((a,b)=> a.price -b.price)
}

// sort products by price, descending order
const sortProductPriceD = (array) => {
return array.sort((a, b) => b.price - a.price)
}

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (array) => {
  return array.sort((a, b) => a.price - b.price)
}

// sort catArt by designed by
const catArtSortDesginedByA = (array) => {
return array.sort(function (a, b) {
  if (a.designedBy < b.designedBy) {
    return -1
  }
  if (a.designedBy > b.designedBy) {
    return 1
  }
  return 0
})
}

// sort catArt by price
const catArtSortByPriceA = (array) => {
  return array.sort((a, b) =>{
   
  if (a.designedBy < b.designedBy) {
    return -1
  }
  if (a.designedBy > b.designedBy) {
    return 1
  }
  return 0
})
}

// Create your own sort function
// it should sort in ascending order
// it should work for numbers or words (case sensitive)
// create your own sort algorithm
// or try to implement bubble sort
// or try to implement merge sort
// or look up another common sort algorithm (i.e. quicksort, ) and try your own implementation
// Bonus add another argument that would allow the function to be used for ascending or descending order
const mySortFunction = (arr) => {
    let didISwap = true
    while (didISwap) {
      didISwap = false
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          didISwap = true
          let temp = arr[i + 1]
          arr[i + 1] = arr[i]
          arr[i] = temp
        }
      }
    }
    return arr
}

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
}
