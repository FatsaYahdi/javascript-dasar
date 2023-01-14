let person = {};
let say;

if (person.address !== undefined && person.address !== null) {
    say = person.address.country;
}
console.log(say);

console.log(person?.address?.country);