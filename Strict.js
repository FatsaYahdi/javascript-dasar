function useSctrictMode() {
    'use strict';
    const person = {
        firstName : "jawa"
    };
    with (person) {
        console.log(firstName);
    }
}
useSctrictMode();