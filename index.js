"use strict";
let x = 1;
function hello(firstName) {
    console.log('Hello ' + firstName);
}
hello('shankar');
console.log(x);
function sum(a, b) {
    return a + b;
}
let ans = sum(1, 2);
console.log(ans);
function legal(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
legal(2);
