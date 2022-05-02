function Person(name, job, age) {
    this.name = name; 
    this.job = job;
    this.age = age;
    
    this.fetchJob = function() {
        console.log (this.name+ " is a "+ this.job)
    }
    this.fetchJob();
}
let brad = new Person("Brad", "Back end Developer");
