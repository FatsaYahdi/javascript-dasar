const person = {
    name: "Jawa",
    sayHello: (name) => {
        console.log(`Hi ${name}`);
    }
}

person.sayHello("icikiwir");

// const person = {
//     name: "Jawa",
//     sayHello: (name) => {
//         console.log(this);
//         console.log(`Hi ${name} my name is ${this.name}`);
//     }
// };

// person.sayHello("icikiwir");