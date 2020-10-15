//A
let arr = ["Ana", 2, "Javi", 5, "Roberto", 7,"Vanessa", 10]

console.log(arr.filter(function(value) {
    return typeof value === 'string' 
}))

//B

let arr2 = ["Ana", 2, "Javi", 5, "Roberto", 7,"Vanessa", 10]

let numFilt = arr2.filter (function (num) {
    return num % 2 == 0;
});
console.log("Numeros impares " + numFilt);