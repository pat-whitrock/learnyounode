function add(a, b) {
    return Number(a) + Number(b)
}

function sum(input) {
    return input.slice(2).reduce(add, 0)
}

console.log(sum(process.argv));
