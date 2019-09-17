function foo(a, b) {
    return a + b;
}

function bar(a, b) {
    return function(c) {
        return a + b + c; // "Unlimited" depth
    }
}

console.log(foo(2, 4))
// console.log(a) - a is not defined! (NOT IN SCOPE)

console.log(bar(2, 4)(5)) // 11