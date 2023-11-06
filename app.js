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
