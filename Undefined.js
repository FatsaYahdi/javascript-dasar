let name;
if (name === undefined) {
    console.log("UNDEFINED");
} else {
    console.log("DEFINED");
}

const names = ["satu","dua"];
names.push("awok")
if (names[2] === undefined) {
    console.log("Hello");
} else {
    console.log(`hello ${names[2]}`);
}

let person = {
    "name" : "aawd"
};

if (person.name === undefined) {
    console.log("Hello World");
} else {
    console.log(`Hello ${person.name}`)
}