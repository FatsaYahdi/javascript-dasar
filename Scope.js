let counter = 0; //global

function hitMe() {
    counter++; // local 
}
hitMe();
hitMe();
// console.log(counter);

function first() {
    let firstVariable = "First";

    function second() {
        console.log(firstVariable);
    }

    second();
}

first();
