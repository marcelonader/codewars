// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (like the name of this kata).

// Strings passed in will consist of only letters and spaces.
// Spaces will be included only when more than one word is present.

// Examples:
// spinWords("Hey fellow warriors") => "Hey wollef sroirraw" 
// spinWords("This is a test") => "This is a test" 
// spinWords("This is another test") => "This is rehtona test"




function spinWords(string){

    let stringToArray = string.split(" ")
    let result = [];
    stringToArray.forEach(element => {
        if(element.length >= 5){
            let newArray = element.split("")
           
            let arrayInversed = newArray.reverse()
                result.push(arrayInversed.join(""))
                return result
            
        } else {
            result.push(element)
            
            return result
        }
        
    })
    
    let resultString = result.join(" ")
    console.log(resultString)
    return resultString
}