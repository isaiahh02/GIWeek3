//Constructor #4
 
function Person(name, job, age) { //Create the Person Constructor
    this.name = name;
    this.job = job;
    this.age = age;
}
 
let john1 = new Person('John Doe', 'Web Developer', 23);//Create a new instance/object of the Person constructor
console.log(john1.name, john1.job,john1.age);//Console log the object john1 created on line 15
 
function Programmer(name, job, age,languages) { //Create the Programmer Constructor
    Person.call(this,name,job,age); // Inherits the properties of Person identified using the 'this' keyword
    this.languages = languages; //Add additional properties
    this.busy = true;           //Add additional properties
}
 
let john2 = new Programmer('John Doe', 'Web Developer', 23,'JavaScript'); //Create a new instance/object of the Programmer constructor
console.log(john2.name, john2.job,john2.age,john2.languages);//Console log the object john2 created 

