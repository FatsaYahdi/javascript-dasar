// without
const nilai = 42;
let ucapan;

if (nilai >= 75) {
    ucapan = "Lulus";
} else {
    ucapan = "Try Again";
}
console.log(`${ucapan}`);


// with
const n = 75;
const uc = n >= 75 ? "WOW" : "Gagal";
console.log(uc);