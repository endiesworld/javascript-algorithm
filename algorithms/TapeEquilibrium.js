function equilibrium (A){
     let sum = 0 ;
    let difference = 0 ;
    let tempMin = 0 ;
    let minimum = + Infinity;
    let outOfRange = false ;
    if(A.length < 2 || A.length > 100000){
        return null
    }

    for(let i = 0 ; i< A.length ; i++) {
        sum += A[i] ;   
        if ( A[i] < -1000 ||  A[i] > 1000){
            outOfRange = true ;
            break ;
        }
    };

    if(outOfRange){
        return null ;
    }

 for(let i = 0 ; i< A.length - 1; i++){
     difference += A[i] ;
     sum -= A[i] ;
     tempMin = Math.abs(difference - sum) ;
     minimum = Math.min(minimum, tempMin) ;
 }

 return minimum ;
 

}

module.exports = {equilibrium}