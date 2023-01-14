const person = {
    firstName : "Jawa",
    lastName : "sunda"
};

const result = "firstName" in person;
console.log(`${result}`);

const pers = [1,2,3,4,5];

const rs = "0" in pers;
console.log(`${rs}`);
