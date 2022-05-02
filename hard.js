function outer() {
    function inner() {
        let pii = {name: "John Doe", ssn: 123456789}
        let name = pii["name"]
        let ssn = pii["ssn"]
        console.log(name);
    }
inner();

}
outer();