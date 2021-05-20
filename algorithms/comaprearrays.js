
function compareArrays (arrayA, arrayB){
    if(!(arrayA.length === arrayB.length)){
        return 'False, arrays sieze does not match '
    }
    let dilutedArrayA = [...arrayB] ;
    let check = true ;
    let indexholder ;
    for(let element of arrayA){
        indexholder = dilutedArrayA.indexOf(element*element)
        if(indexholder > -1){
            dilutedArrayA.splice(indexholder, 1, ) ;
        }
        else{
            check = false ;
        }
    }
    return check ;
}

function same(arrayA, arrayB){
     if(!(arrayA.length === arrayB.length)){
        return 'False, arrays sieze does not match '
    }
    let frequencyCounterA ={} ;
    let frequencyCounterB ={} ;
    for (let element of arrayA){
        frequencyCounterA[element] = ++frequencyCounterA[element] || 1 ;
    }
    for (let element of arrayB){
        frequencyCounterB[element] = ++frequencyCounterB[element] || 1 ;
    }
    for(let key in frequencyCounterA){
        if(!(key ** 2 in frequencyCounterB)){
            return false ;
        }
        if(frequencyCounterB[key ** 2] !== frequencyCounterA[key]){
            return false ;
        }
    }

    return true
}

module.exports = {compareArrays, same} ;