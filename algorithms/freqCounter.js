function anagramA(stringA, stringB){
     if(!(stringA.length === stringB.length)){
        return 'False, arrays sieze does not match '
    }
    let frequencyCounterA ={} ;
    let frequencyCounterB ={} ;
    for (let element of stringA){
        frequencyCounterA[element] = ++frequencyCounterA[element] || 1 ;
    }
    for (let element of stringB){
        frequencyCounterB[element] = ++frequencyCounterB[element] || 1 ;
    }
    for(let key in frequencyCounterA){
        if(!(key  in frequencyCounterB)){
            return false ;
        }
        if(frequencyCounterB[key] !== frequencyCounterA[key]){
            return false ;
        }
    }

    return true
}


function anagramB(stringA, stringB){
     if(!(stringA.length === stringB.length)){
        return 'False, arrays sieze does not match '
    }
    let lookUp ={} ;
    
    for (let element of stringA){
        lookUp[element] = ++lookUp[element] || 1 ;
    }

    for (let element of stringB){
        if(!lookUp[element]){
            return false ;
        }
        else{
            --lookUp[element] ;
        }
    }
  

    return true
}

module.exports = {anagramA, anagramB} ;