function oldSum() {
    let total = 0;
    for (const item of arguments) {
        total += item;
    }
    console.log(`${total}`);
}

oldSum(1,2,3,4,5,6,7,8,9,10);