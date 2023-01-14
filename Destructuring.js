const names = ["Menyatu", "Mendua", "Meniga", "Menempati","Melima"];
const [firstName, middleName, lastName, ...others] = names;
// const firstName = names[0];
// const middleName = names[1];
// const lastName = names[2];

console.log(firstName);
console.log(middleName);
console.log(lastName);
console.log(others);