function generateHashtag (str) {
    if(str == '' || str == null || str == undefined){
        return false
    } else {
    let textArray = str.split(' ');
    let newArray = ['#'];
    if(textArray.join('') == ''){
        return false
    } else {
        textArray.forEach((value)=>{
          value == '' ? "" : newArray.push(value[0].toUpperCase() + value.substring(1))
    })
    }
    return newArray.join('').length > 140 ? false : newArray.join('')
    }
}