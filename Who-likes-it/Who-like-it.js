function likes(names) {
    switch(names.length){
        case 0: return `no one likes this`
        break;
        case 1: return `${names[0]} likes this`
        break;
        case 2: return `${names[0]} and ${names[1]} like this`
        break;
        case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`
        break;
        default: 
            let array1 = names.slice(0,2)
            let array2 = names.slice(2)
            return `${array1.join(', ')} and ${array2.length} others like this`
    }
}

//Ou

// function likes(names) {
//     if(names.length == 0){
//         return `no one likes this`
//     } else if(names.length == 1){
//         return `${names[0]} likes this`
//     } else if(names.length == 2){
//         return `${names[0]} and ${names[1]} like this`
//     } else if(names.length == 3){
//         return `${names[0]}, ${names[1]} and ${names[2]} like this`
//     } else if(names.length >= 4){
//         let array1 = names.slice(0,2)
//         let array2 = names.slice(2)
//         return `${array1.join(', ')} and ${array2.length} others like this`
//     }
// }

//Ou


// function likes(...names) { //aceita nomes sem ser array
//     if(names.length == 0){
//         return `no one likes this`
//     } else if(names.length == 1){
//         return `${names[0]} likes this`
//     } else if(names.length == 2){
//         return `${names[0]} and ${names[1]} like this`
//     } else if(names.length == 3){
//         return `${names[0]}, ${names[1]} and ${names[2]} like this`
//     } else if(names.length >= 4){
//         let array1 = names.slice(0,2)
//         let array2 = names.slice(2)
//         return `${array1.join(', ')} and ${array2.length} others like this`
//     }
// }