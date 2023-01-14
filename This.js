// console.log(this);
// function testThis() {
//     console.log(this);
// }
// testThis();

const person = {
    name: "Jawa",
    sayHello: function (name) {
        // this = person
        console.log(`Hi ${name}, my name is ${this.name}`);
    }
}

person.sayHello("icikiwir");