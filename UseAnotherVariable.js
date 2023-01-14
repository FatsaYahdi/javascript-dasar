const person = {
    firstName : "jawa",
    middleName : "sunda",
    lastName : "batak"
}


let {
    firstName: namaDepan,
    middleName: namaTengah = "Jawa",
    lastName: namaBelakang } = person;
    
console.log(namaDepan);
console.log(namaTengah);
console.log(namaBelakang);