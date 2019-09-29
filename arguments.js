 //  Sorting function arguments
 
 function getSortedNumbers() {
    for (let i = 0; i < arguments.length; i++) {
        for (let j = 0; j < arguments.length; j++) {
            if (arguments[j] >= arguments[j + 1]) {
                let a = arguments[j];
                arguments[j] = arguments[j + 1]
                arguments[j + 1] = a;
            }
        }
    }
    return arguments;
}
console.log(getSortedNumbers(12, 87463, -1, 3687, 45, 5.5, 7.64));
​
//  Finding Prime Numbers

function isPrime() {
    let n = Array.from(...arguments),
        newArr = [];
    for (let i = 0; i < n.length; i++) {
        let counter = 0;
        if (n[i] === 1) {
            newArr.push(n[i]);
        }
        for (let y = 2; y < n[i]; y++) {
            if (n[i] % y === 0) {
                counter++;
            }
            if (y == n[i] - 1) {
                if (counter === 0) {
                    newArr.push(n[i]);
                }
            }
        }
    }
    return newArr;
}
console.log(isPrime([10, 7, 35, 86, 5]));

//   Finding The Longest Strng

function isLongist() {
    let arr = [...arguments]
    newArr = [];
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (counter < arr[i].length) {
            counter = arr[i].length;
        }
    }
    for (let j = 0; j < arr.length; j++) {
        if (arr[j].length == counter) {
            newArr.push(arr[j]);
        }
    }
    if (newArr.length == 1) {
        return newArr[0]
    } else {
        return newArr
    }
  }
  console.log(isLongist("Great Britain", "United States of America", "San Marino"))