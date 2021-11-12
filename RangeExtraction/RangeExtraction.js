function solution(list){
    let arr=[];
    let arr2=[];
    for(let i=0;i<list.length;i++){
        let numeroAtual=list[i];
        let numeroSeguinte=list[i+1];
        let numeroAnterior=list[i-1];

        if(arr2.length>1){
            numeroAnterior===numeroAtual-1?arr2.push(numeroAtual):""; 
        }
        if(numeroSeguinte===numeroAtual+1){
            arr2.push(numeroAtual)
        } else {
            if(arr2.length>=3){
                arr.push([arr2[0]+'-'+arr2[arr2.length-1]])
                arr2=[]
            } else if(arr2.length>0 && arr2.length<3){
                arr.push(...arr2)
                arr.push([numeroAtual])
                arr2=[]
            } else {
                arr.push([numeroAtual])
                arr2=[]
            }
        }  
    }
    return arr.join(',')
}

console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));


//ou

function solution2(list){
    let arr=[];
    list.reduce((acm, crr, i)=>{
        if(acm.length>1){
            list[i-1]===crr-1?acm.push(crr):"";
        }
        if(list[i+1]===crr+1){
            acm.push(crr);
            return acm;
        } else {
            if(acm.length>=3){
                arr.push([acm[0]+'-'+acm[acm.length-1]])
                return acm=[]
            } else if(acm.length>0 && acm.length<3){
                arr.push(...acm)
                arr.push([crr])
                return acm=[]
            } else {
                arr.push([crr])
                return acm=[]
            }
        }  
    },[])  
    return arr.join(',')
    }

console.log(solution2([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));
