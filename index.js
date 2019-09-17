// Standard
function foo() {
    console.log(10);
}

foo(); // 10

// IIFE
(function bar() {
    console.log(20);
}()); // 20

const result = (function foo() {
    return 10;
}());

console.log(result); // 10