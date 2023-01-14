const person = {
    firstName: "jawa",
    lastName: "jawir",
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(val) {
        const array = val.split(" ");
        this.firstName = array[0];
        this.lastName = array[1];
    }
}
person.fullName = "Jawa Sunda";
// console.log(person.fullName);
console.log(person.firstName);
console.log(person.lastName);