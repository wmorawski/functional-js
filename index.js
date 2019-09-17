function foo(a) {
    return a * 2;
}
// Function is an Object

function bar(b) {
    return b * 3;
}

console.log(foo(bar(2))) // 12