class Person {
    constructor(personName, personAge) {
        this.personName = personName;
        this.personAge = personAge;
    }

    getPersonInfo() {
        return `Name: ${this.personName}. Age: ${this.personAge}`;
    }

}

class Car extends Person {
    constructor(personName, personAge, carName, carModel, carYear, carNumber) {
        super(personName, personAge);
        this.carName = carName;
        this.carModel = carModel;
        this.carYear = carYear;
        this.carNumber = carNumber;
    }
    
    getCarInfo() {
        return `Car: ${this.carName}. Model: ${this.carModel}. Year: ${this.carYear}. Number: ${this.carNumber}. Owner: ${this.getCarOwner()}`;
    }
    
    getCarOwner() {
        if (this.personAge > 18) {
            return this.personName;
        } return "Too young!";
    }
}

let person1 = new Person('Sasha', 23);
let car1 = new Car(person1.personName, person1.personAge, 'Lexus', 'IS 250', 2008, 'BH4774EO');
console.log(person1.getPersonInfo());
console.log(car1.getCarInfo());

let person2 = new Person('Ira', 20);
let car2 = new Car(person2.personName, person2.personAge, 'Audi', 'RS Q8', 2020, 'BH2304EO');
console.log(person2.getPersonInfo());
console.log(car2.getCarInfo());

let person3 = new Person('Vanya', 17);
let car3 = new Car(person3.personName, person3.personAge, 'BMW', 'M3', 2005, 'BH0302EO');
console.log(person3.getPersonInfo());
console.log(car3.getCarInfo());

let person4 = new Person('Stas', 19);
let car4 = new Car(person4.personName, person4.personAge, 'Mercedes', 'E 270', 2004, 'BH6869EO');
console.log(person4.getPersonInfo());
console.log(car4.getCarInfo());


