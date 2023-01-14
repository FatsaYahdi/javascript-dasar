// function sayHello(firstName, lastName) {
//     const say = `Hello ${firstName} ${lastName}`;
//     return say;
// }
// console.log(sayHello("awok","jawa"));

function final(value) {
    if (value > 90) {
        return "A";
    } else if (value > 80) {
        return "B";
    } else if (value > 70) {
        return "C";
    } else if (value > 60) {
        return "D";
    } else {
        return "E";
    }
}
final(12);

function isContains(array, searchValue) {
    for (const element of array) {
        if (element === searchValue) {
            return true;
        }
    }
    return false;
}

console.log(isContains([1,2,3,4,5,6,7,8,9,10],11));