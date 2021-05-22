function maxCounter(N, A){
    let maxCounter = 0 ;
    let counter = [] ;
    let errorFlag = false ;

    if( N < 1 || N > 100000){
        return -1 ;
    }
    
    for(let i = 0 ; i < N ; i++){
        counter.push(0) ;
    }

    for(let i = 0 ; i <A.length ; i++){

        if (A[i] <= N && A[i] >= 1){
            counter[A[i] -1] = counter[A[i] -1] + 1 ;
            maxCounter = Math.max(maxCounter , counter[A[i] - 1]) ;
        }

        else if( A[i] === N + 1){
            for(let i = 0 ; i < N ; i++){
                counter[i] = maxCounter ;
            }
        }

        else {
            errorFlag = true ;
            break ;
        }
    }

    return errorFlag ? -1 : counter ;
}

module.exports = {maxCounter} ;