
function uniqCounter(arr){
     let lookUp ={} ;
     let uniqCounter = 0 ;
    for (let element of arr){
        if(!(lookUp[element])){
            uniqCounter++ ;
            lookUp[element] = 1 ;
        }
        else {lookUp[element] = ++lookUp[element] };
    }
    return uniqCounter ;
}

module.exports = {uniqCounter}