const swap = (arr, i1, i2) => {

    const temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
  
  }
  
  const merge = (rightArr, leftArr) => {
  
    let i = 0;
    let j = 0;
    let results = [];
  
    // see if which one is less than which one and break the loop when we hit the end of one of the arrays
    while (i < rightArr.length && j < leftArr.length) {
      if (rightArr[i] < leftArr[j]) {
        results.push(rightArr[i])
        i++;
      } else {
        results.push(leftArr[j])
        j++;
      }
    }
    // if one of the arrays has leftovers 
    while(i < rightArr.length) {
      results.push(rightArr[i])
      i++;
    }
  
    while(j < leftArr.length) {
      results.push(leftArr[j])
      j++;
    }
    return results
  }
  
  const mergeSort = (arr) => {
  
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right =  mergeSort(arr.slice(mid));
  
    return merge(left, right);
  }



    
  const mergeDec = (rightArr, leftArr) => {
  
    let i = 0;
    let j = 0;
    let results = [];
  
    // see if which one is less than which one and break the loop when we hit the end of one of the arrays
    while (i < rightArr.length && j < leftArr.length) {
      if (rightArr[i] > leftArr[j]) {
        results.push(rightArr[i])
        i++;
      } else {
        results.push(leftArr[j])
        j++;
      }
    }
    // if one of the arrays has leftovers 
    while(i < rightArr.length) {
      results.push(rightArr[i])
      i++;
    }
  
    while(j < leftArr.length) {
      results.push(leftArr[j])
      j++;
    }

    return results
  }
  
  const mergeSortDec = (arr) => {
  
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSortDec(arr.slice(0,mid));
    let right =  mergeSortDec(arr.slice(mid));
  
    return mergeDec(left, right);
  }

  module.exports = {
   mergeSort,
   merge,
   swap,
   mergeDec,
   mergeSortDec,
  };
  