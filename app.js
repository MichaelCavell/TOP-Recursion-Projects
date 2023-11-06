//Assignment 1
//1.1
function fibs(n) {
    const result = [];

    for (let i = 0; i < n; i++) {
        if (i <= 1) {
            result.push(i);
        } else {
            const nextFib = result[i - 1] + result[i - 2];
            result.push(nextFib);
        }
    }
    console.log(result);
}

fibs(8);

//1.2
function fibsRec(n, result = []) {
    if (n === 0) {
        return result;
    }
    
    if (result.length <= 1) {
        result.push(result.length);
      } else {
        const nextFib = result[result.length - 1] + result[result.length - 2];
        result.push(nextFib);
      }
    
      return fibsRec(n - 1, result);
    }

    console.log(fibsRec(8));

//Assignment 2
function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    const middle = Math.floor(array.length / 2);
    const leftHalf = array.slice(0, middle);
    const rightHalf = array.slice(middle);
      
    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);
      
    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const unsortedArray = [8, 4, 2, 7, 1, 3, 6, 5];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray);