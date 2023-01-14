const nilai = "E" ;
switch (nilai) {
    case "A":
        console.log("Lulus dengan baik");
        break;
    case "B":
    case "C":
        console.log("Lulus");
        break;
    case "D":
        console.log("Gagal");
        break;
    default:
        console.log("Ulang");
        break;
}