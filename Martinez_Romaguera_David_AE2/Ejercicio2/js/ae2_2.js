let dataArray = [45,69,32,90,69]

function average(dataArray) {
    console.log(dataArray.reduce((a, b) => (a + b), 0) / dataArray.length)
}
average(dataArray)