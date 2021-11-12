// function iqTest(numbers){
//     const numMap = numbers.split(' ').map(el=>el % 2 == 0)
//     const numFilter = numMap.filter(el=>el)
//     return numFilter.length > 1 ? numMap.indexOf(false) + 1 : numMap.indexOf(true) +1
// }

function iqTest(numbers){
    const numMap = numbers.split(' ').map(el=>el % 2 == 0)
    return numMap.indexOf(true) == numMap.lastIndexOf(true) ? numMap.indexOf(true)+1 : numMap.indexOf(false)+1
}

console.log(iqTest("2 4 7 8 10"))

