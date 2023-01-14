// const sayHello = (name) => {
//     const say = `Hello ${name}`;
//     console.log(say);
// }
// // const sayHello = (name) => console.log(`Hello ${name}`);
// sayHello("awok");

// const sum = (first, second) => first + second;
// console.log(sum(10,10));

// const sayHello = name => console.log(`Hello ${name}`);
// sayHello("jawa");

function giveMeName(callback) {
    callback("awok");
}

giveMeName((name) => console.log(`Hello ${name}`));