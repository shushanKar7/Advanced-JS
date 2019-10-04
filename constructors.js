// Simple constructers
function Employee(name, surname, age, profession) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.profession = profession;
    this.fullName = () => {
      return this.name + " " + this.surname
    }
  }
  let employee = new Employee("Shushan", "Karapetyan", 22, "Future Developer")
  console.log(employee.fullName())
  console.log(employee.age)
  console.log(employee.profession)
  
  function Employee1() {
    Employee1.prototype.firstName = "Shushan"
    Employee1.prototype.lastName = "Karapetyan"
    Employee1.prototype.startDate = new Date()
    Employee1.prototype.fullName = () => {
      return this.firstName + " " + this.lastName
    }
  }
  let employee1 = new Employee1()
  console.log(employee1.fullName())
  console.log(`You have started your work on: ${employee1.startDate}`)
  
  //ENUMERATING PROPERTIES
  function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
      console.log("draw")
    }
  }
  
  let circle = new Circle(10)
  // use for in loop to enumerate
  for (let key in circle) {
    if (typeof circle[key] !== "function")
      console.log(key, circle[key])
  }
  // use Object.keys to get all keys
  let keys = Object.keys(circle)
  console.log(keys)
  // use in operator to check for existence of property/method
  if ("radius" in circle) {
    console.log("Circle has a radius.")
  }
  
  //Constructer that generates new objects with unique IDs
  function Unique() {
    this.num = Math.floor(Math.random() * 100)
  }
  let uniqueNum = new Unique()
  console.log(`Here is generated uniqueID: ${uniqueNum.num}`);