const person = {
    name: "Jawa",
    // sayHello: function (name) {
    //     console.log(`Hello ${name}`);
    // }
};
person.sayHello = function (name) {
    console.log(`Hello ${name}`);
};

person.sayHello("Awok");