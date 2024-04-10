//Define a class named Car

class Car {
  //Define the constructor for the class
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  //Method to display the description of the car
  displayDescription() {
    console.log(`This car is a ${this.year} ${this.brand} ${this.model}`);
  }

  //Method to calculate the age of the car
  calculateAge(currentYear) {
    return currentYear - this.year;
  }
}

//Create an instance of the Car class
const myCar = new Car("Tesla", "Model S", 2018);

//Use methods from the Car class
myCar.displayDescription();

//Calculate the age of the car in 2023
const carAge = myCar.calculateAge(2023);
console.log(`The car is ${carAge} years old`);

/**
 * Video
 */

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayName() {
    console.log(`my name is ${this.firstName} ${this.lastName}`);
  }
}

const john = new Person("John", "Doe");
console.log(john);

const anna = new Person("Anna", "Doe")
console.log(anna)