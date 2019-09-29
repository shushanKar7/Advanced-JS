//Write a JavaScript function that reverse a number. 

function reverseNumber(n) {
    n = n + "";
    return n.split("").reverse().join("");
}
console.log(reverseNumber(123456789));

//Check whether a passed string is palindrome or not

let palindrome = (word) => {
    let firstWord = word.toUpperCase();
    let newWord = "";

    for (let i = word.length - 1; i >= 0; i--) {
        newWord += firstWord[i];
    }

    if (firstWord === newWord) {
        return true;
    } else {
        return false;
    }
}
console.log(palindrome("subbus"));
console.log(palindrome("subbun"));

//Returns a passed string with letters in alphabetical order

function alphabet_order(str) {

    return str.split('').sort().join('');
}

console.log(alphabet_order("shushan"));

//The first letter of each word of the string in upper case

function uppercase(str) {
    var array1 = str.split(' ');
    var newarray1 = [];

    for (var x = 0; x < array1.length; x++) {
        newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(2));
    }
    return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));

// Sorting by field(OBJECT)

let users = [{
        name: "John",
        age: 20,
        surname: "Johnson"
    },
    {
        name: "Pete",
        age: 18,
        surname: "Peterson"
    },
    {
        name: "Ann",
        age: 19,
        surname: "Hathaway"
    }
];

function byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
}

users.sort(byField('name'));
users.forEach(user => console.log((user.name)));

users.sort(byField('age'));
users.forEach(user => console.log((user.name)));

//centuryFromYear

let centuryFromYear = (year) => {
    let centuryCount = 0;
    while (year > 0) {
        year = year - 100;
        centuryCount = centuryCount + 1;
    }
    return centuryCount;
}
console.log(centuryFromYear(1601))

// 3. Repeat

let repeat = (str, count) => {
    let array = [];
    for (let i = 0; i < count;)
        array[i++] = str;
    return array.join('');
}
console.log(repeat('Ha!', 1));
console.log(repeat('Ha!', 2));
console.log(repeat('Ha!', 6));

//4. array sum

let sum = (array) => {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total = total + array[i];
    }
    return total;
}
console.log(sum([1, 5, 6, 8, 10]));