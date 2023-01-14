// without
let parameter;

let data = parameter;
if (data === undefined || data == null) {
    data = "Nilai Default";
}

console.log(data);

// with
let par;
let dat = par ?? "def";
console.log(dat)