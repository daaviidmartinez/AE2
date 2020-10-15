let values = [45,6,54,23,65,76]

let num = 4;

function findGreaterThan(x, y) {
    return x.every((a) => ( a < y ))
}
console.log(findGreaterThan(values, num))