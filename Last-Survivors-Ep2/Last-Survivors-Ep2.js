function lastSurvivors(str){
    let arr = [...str]
    return analizeLettersEquals(arr)
}

function analizeLettersEquals(arr){
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for(let i = 0; i<arr.length; i++){
        let indexMod = arr.indexOf(arr[i], i + 1)
        if(indexMod !== -1){
            arr.splice(indexMod, 1)
            let indexAlphabet = alphabet.indexOf(arr[i])
            arr[i] = alphabet[indexAlphabet + 1] != undefined ? alphabet[indexAlphabet + 1]: 'a' //next letter of the alphabet
            analizeLettersEquals(arr)
        }
    }
    return arr.join('')
}