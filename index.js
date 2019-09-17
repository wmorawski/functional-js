function fn(x,y) {
    console.log(arguments) // { [Iterator], [Symbol(Symbol.iterator)]}
    return x + y;
}

console.log(fn(2, 4, 10)) 