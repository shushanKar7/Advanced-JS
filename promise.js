// Ask for a Visa in progamming(using PROMISE)
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