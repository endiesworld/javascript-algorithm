

function cyclicRotation(A, K){
    let newArray = [] ;
    let tripCount = 0 ;
    let shift = K ;
    let newLength = A.length ;

    if( K <= 0 || A.length <= K){
        return A ;
    }

    for(let i = 0 ; i < A.length ; i++){
        newLength = A.length + i ;
        if( (newLength-K ) < A.length){
            tripCount++ ;
        }
        else{
            shift = A.length + tripCount ;
        }
        newArray.push(A[newLength -  shift])
    }

    return newArray ;
}

module.exports = {cyclicRotation} ;