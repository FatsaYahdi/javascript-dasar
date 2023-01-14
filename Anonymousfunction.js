let say = function (name) {
    console.log(`${name}`);
}
// say("jawa");

function giveMeName(callback) {
    callback("awok");
}
giveMeName(function (name) {
    console.log(`${name}`);
});