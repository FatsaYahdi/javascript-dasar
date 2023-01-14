// function* createNames() {
//     yield "awok";
//     yield "jawa";
//     yield "kowa";
// };

// const names = createNames();
// for (const name of names) {
//     console.log(name);
// }

function* buatGanjil(value) {
    for (let i = 0; i <= value; i++) {
        if (i % 2 === 1) {
            yield i;
        }
        
    }
}

const ganjil =  buatGanjil(100);
// for (const angka of ganjil) {
//     console.log(angka);
// }
console.log(ganjil.next().value);
console.log(ganjil.next().value);
console.log(ganjil.next().value);
console.log(ganjil.next().value);
console.log(ganjil.next().value);