function count (string) { 
    return [...string].reduce((acum, current)=>{
        acum[current] ? acum[current] += 1 : acum[current] = 1
        return acum}, { })
}

//ou

function count (string) { 
    if(string == ''){
        return {}
    } else {
        let objSet = new Set()
        for(let i = 0; i < string.length; i++){
            objSet.add(string[i])
        }
        let newArray = Array.from(objSet).join('')
        let obj = {}

        for(let i = 0; i < newArray.length; i++){

            let regExp = new RegExp(newArray[i], 'g');
            let result = string.match(regExp)
            newArray[i] == ' ' ? '' : obj[newArray[i]] = result.length
        }    
        return obj
    }
}
