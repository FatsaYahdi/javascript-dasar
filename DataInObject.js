const person = {
    firstName : "Jawa",
    lastName : "Sunda",
    address : {
        street : ">_<",
        city : "OwO",
        country : "Bekasi"
    },
    hobby : "gtw",
    channel : "nhkn1984"
};

const {firstName, lastName, address : {country, city, street}, ...others} = person;

// const firstName = person.firstName;
// const lastName = person.lastName;
// const street = person.address.street;
// const city = person.address.city;
// const country = person.address.country;
// const hobby = person.hobby;
// const channel = person.channel;



console.log(firstName);
console.log(lastName);
console.log(country);
console.log(city);
console.log(street);
console.log(others);
// console.log(city);
// console.log(country);
// console.log(hobby);
// console.log(channel);