//Exercise 1: Ask for a Visa in progamming(using PROMISE)

let askEmbassy = true;
let requestVisa = new Promise((resolve, reject) => {
  let result = "Congrats! You have got a visa";
  if (askEmbassy) {
    console.log(result)
  } else {
    let error = new Error("Sorry! You didn't got a visa");
    console.log(error)
  }
})

//Exercise 2:
//Write a function testNum that takes a number as an argument and returns a 
//Promise that tests if the value is less than or greater than the value 10.

let testNumTen = (num) => {
  chechromise = new Promise ((resolve, reject) => {
    if (num>10){
      resolve (num + " is greater than 10, success!!")
    } else {
      reject (num + " is less han 10, rejected!!")
    }
  })
  return chechromise
  }
  testNumTen(76).then(result => console.log(result))
  .catch(error => console.log(error))
  
  //Exercise 3:
    //Write two functions that use Promises that you can chain! 
    //The first function, makeAllCaps(), will take in an array of words and capitalize them, 
    //and then the second function, sortWords(), will sort the words in alphabetical order.
    //If the array contains anything but strings, it should throw an error.
  
  const arrayOfWords = ['cucumber', 'tomatos', 'avocado']
  const complicatedArray = ['cucumber', 44, true]
  
  const makeAllCaps = (array) => {
     return new Promise((resolve, reject) => {
       
      let capsArray = array.map(word => {
       
        if(typeof word === 'string'){
          return word.toUpperCase()
        } else {
          reject('Error: Not all items in the array are strings!')
        }
      })
      resolve(capsArray)
    })
  }
   
   const sortWords = (array) => {
     return new Promise((resolve, reject) => {
       if(array) {
         array.forEach((el) => {
           if(typeof el !== 'string'){
             reject('Error: Not all items in the array are strings!')
           }
         })
         resolve(array.sort());
       } else {
         reject('Error: Something went wrong with sorting words.') 
       }
   })
  } 
    
  
  makeAllCaps(arrayOfWords)
    .then(sortWords)
    .then((result) => console.log(result))
    .catch(error => console.log(error))
    
  makeAllCaps(complicatedArray)
    .then(sortWords)
    .then((result) => console.log(result))
    .catch(error => console.log(error))
  
  