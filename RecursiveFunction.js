function factorial(value) {
    let result = 1;
    for (let i = 0; i <= value; i++) {
        result *= i;
    }
    return result;
}

function factorialRecursive(value) {
    if (value === 1) {
        return 1;
    } else {
        return value * factorialRecursive(value - 1);
    }
}