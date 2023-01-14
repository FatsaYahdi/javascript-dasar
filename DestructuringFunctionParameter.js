// function displayPerson({firstName, middleName, lastName}) {
//     console.log(firstName);
//     console.log(middleName);
//     console.log(lastName);
// }

// const person = {
//     firstName : "jawa",
//     middleName : "sunda",
//     lastName : "batak"
// };
// displayPerson(person);

// function sum([first, second]) {
//     return first + second;
// }

// console.log(sum([10,10]));
// console.log(sum([20,10]));

// const names = ["jawa","sunda"];
// const [firstName, middleName, lastName = "awok"] = names;

// console.log(firstName);
// console.log(middleName);
// console.log(lastName);

const person = {
    firstName : "jawa",
    lastName : "sunda"
};

const {firstName, middleName = "Jahaha", lastName} = person;

console.log(firstName);
console.log(middleName);
console.log(lastName);