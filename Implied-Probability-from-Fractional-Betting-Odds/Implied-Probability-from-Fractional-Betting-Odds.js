

function oddsConverter(odds) {
    let valores = odds.reduce((acum, curr)=>{
        let numeros = curr.split("/")
        acum.push(Number(numeros[1])/(Number(numeros[0]) + Number(numeros[1]))*100)
        return acum
    }, [])
    return `${Math.max(...valores).toFixed(1)}`.endsWith('.0') ? `${Math.max(...valores).toFixed(0)}%` : `${Math.max(...valores).toFixed(1)}%`
}

function oddsConverter2(odds) {
    odds.reduce((acum, curr, i)=>{
        let numeros = curr.split("/");
        (Number(numeros[1])/(Number(numeros[0]) + Number(numeros[1]))*100) > acum[i-1] ? acum.push(Number(numeros[1])/(Number(numeros[0]) + Number(numeros[1]))*100) : "";
        
        return acum
    }, [])
    console.log(acum)
}
// console.log(oddsConverter(['9/1', '20/1', '1/3', '20/1', '1/5']))
console.log(oddsConverter2(['9/1', '20/1', '1/3', '20/1', '1/5']))

oddsConverter()
