const person = {
    firstName : "satu",
    middleName : "dua",
    lastName : "Niga"
};

with (person) {
    console.log(firstName);
    console.log(middleName);
    console.log(lastName);
}