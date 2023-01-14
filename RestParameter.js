function sum(name, ...data) {
    let total = 0;
    for (const item of data) {
        total += item;
    }
    console.log(`total ${name} is ${total}`);
}

sum('oren',...[2,3,4,5,6,7,8]);
sum('jawa',...[5,5,6,7,5,6]);
sum('awok', ...[6,23,1,3]);