function incrementString (strng) {
    if(isNaN(Number(strng[strng.length-1])))return(strng+=1)
    let number = (Number(strng.match(/\d/g).join(''))+1).toString().split('')
    while(number.length < strng.match(/\d/g).length) number.unshift('0');
    return strng.substring(0, strng.indexOf(strng.match(/\d/)))+number.join('')
}

//ou

function incrementString (strng) {
    if(isNaN(Number(strng[strng.length-1]))){
        return(strng+=1)
    }
    const stringText = strng.slice(0, strng.indexOf(strng.match(/\d/)));
    const stringNumber = strng.slice(strng.indexOf(strng.match(/\d/)));
    let stringParseNumber = Number(stringNumber)
    stringParseNumber++
    let arrayNumbers = stringParseNumber.toString().split('')
    while(stringNumber.length > arrayNumbers.length){
        arrayNumbers.unshift('0')
    }
    return stringText.concat(arrayNumbers.join(''))
}
