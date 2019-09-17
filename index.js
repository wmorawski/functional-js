function fn (x, y, ...args) {
    // either args and arguments are Iterable!
    for (const arg of arguments) {
        console.log(arg) // 1, 3, 4
    }
    return args;
}

console.log(fn(1,3,4)) // [4]