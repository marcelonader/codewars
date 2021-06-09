// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes

// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!


//METODO 1

function duplicateEncode(word){
    let words = word.toLowerCase().split('');
    let wordConverted = [];
    for(element of words){
       words.lastIndexOf(element) != words.indexOf(element) ? wordConverted.push(')') : wordConverted.push('(') 
    } 
    return wordConverted.join('')

}

console.log(duplicateEncode('recede'))

//METODO 2

function duplicateEncode(word){
    let wordConverted = [];
    for(element of word.toLowerCase()){
       word.lastIndexOf(element) != word.indexOf(element) ? wordConverted.push(')') : wordConverted.push('(') 
    } 
    return wordConverted.join('')
}

console.log(duplicateEncode('Success'))