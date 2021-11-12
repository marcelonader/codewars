import _ from lodash;

Array.prototype.sameStructureAs = function (arr) {
    _.zipWith(this, arr, (a,b)=>{
       return _.isArray(a) && _.isArray(b)
    })
}
console.log("olá")
let array1 =  [[ 1 ]]
let array2 = [[ [ ], [ ] ]]
console.log(array1.sameStructureAs(array2));