// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// function digital_root(n) {
//     let arrayN = n.toString().split('')
//     let arrayNumber = []
    
//     while(arrayN.length > 1) {
        
//         for(element of arrayN){
//             arrayNumber.push(Number(element))
//         } 
//         resultado = arrayNumber.reduce((previous, current) => previous + current)
//         arrayN = resultado.toString().split('')
//         arrayNumber = []
    
//     }
//     return Number(arrayN)
    
// }

//ou

function digital_root(n) {
    let result = (n.toString().split('').map(value=>Number(value)).reduce(((previous, current) => previous + current)).toString().split('')).map(value=>Number(value)).join('')
    n >= 10 ? result = digital_root(result) : '';
    return result
}

console.log(digital_root(132189))

