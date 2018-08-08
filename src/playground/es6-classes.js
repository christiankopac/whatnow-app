class Person {
  constructor(firstName = 'Anonymous', lastName = 'Anonymous') {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getGreeting() {
    return `Hi ${this.firstName}!` || 'Hi!'
  }
  getDescription() {
    return `${this.firstName}'s last name is ${this.lastName}`;
  }
};

class Student extends Person {
  constructor(firstName, lastName, fieldOfstudy = 'does not study'){
    super(firstName, lastName)
    this.fieldOfstudy = fieldOfstudy;
  }
  hasfieldOfStudy() {
    return !!this.fieldOfstudy
  }
  getDescription() {
    let description = super.getDescription();
    return `${description} field of study is ${this.fieldOfstudy}`
  }
}

class Traveller extends Person {
  constructor(firstName, lastName, homeLocation) {
    super(firstName,lastName);
    this.homeLocation = homeLocation
  }
  getGreeting() {
    let greeting = super.getGreeting();
    return `${greeting} ${this.firstName} lives in ${this.homeLocation}`
  }
}

const me = new Student('Christian', 'Kopac', 'Software Engineer');

console.log(me);
console.log(me.getGreeting());
console.log(me.getDescription());
console.log(me.hasfieldOfStudy());


const other = new Student('Juan', 'Ramos');

console.log(other);
console.log(other.getGreeting());
console.log(other.getDescription());
console.log(other.hasfieldOfStudy());


const viajero = new Traveller('Bepe', 'Grillo', 'Roma');

console.log(viajero);
console.log(viajero.getGreeting());
console.log(viajero.getDescription());
