function Person(name, job, age) {
    this.name = name; 
    this.job = job;
    this.age = age;
}
let john = new Person("John Doe", "Developer", 36);
let brad = new Person("Brad", "Programmer", 26);

console.log(john.name, john.job, john.age);
console.log(brad.name, brad.job, brad.age);

