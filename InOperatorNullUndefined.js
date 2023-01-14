const person = {
    lastName : undefined
};
const result = "lastName" in person;
console.log(`${result}`);

const names = [null, "jawa", null];
const rs = 0 in names;
console.log(`${rs}`);