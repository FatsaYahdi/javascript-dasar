let data = {};
if (typeof data === "number") {
    console.log("Number")
} else if (typeof data === "string") {
    console.log("String");
} else if (typeof data === "boolean") {
    console.log("Boolean");
} else if (typeof data === "object") {
    console.log("Object");
}