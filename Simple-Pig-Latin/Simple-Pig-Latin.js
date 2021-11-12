function pigIt(str){
    let strArray = str.split(' ')
    let array = strArray.map(function(elemento) {
        return elemento.split('')
    }) //array com arrays internos, sendo estes referentes a cada caracter de cada uma das palavras da frase.
    let string = [];
    for(elemento of array){
        if(elemento == '!' || elemento == '.' || elemento == '...' || elemento == '?'){
            string.push(elemento.join('')) 
        } else {
        elemento.push(elemento[0] + 'ay')
        elemento.shift()
        string.push(elemento.join(''))        
    }}
    let resultado = string.join(' ')
    return resultado
}