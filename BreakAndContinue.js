let counter = 1;
while (true) {
    console.log(counter);
    counter++;

    if (counter > 10) {
        break;
    }
}

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}