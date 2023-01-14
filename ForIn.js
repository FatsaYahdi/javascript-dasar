const person = {
    firstName : "awok",
    middleName : "awk",
    lastName : "asd"
};

for (const property in person) {
    console.log(`Property ${property} : ${person[property]}`);
}

const names = ["one", "two", "three"];

for (const index in names) {
    console.log(`Index ${index} : ${names[index]}`)
}