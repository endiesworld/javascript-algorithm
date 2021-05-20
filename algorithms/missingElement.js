function missingElement(A){
    let sieze = A.length - 1 ;
    let missingElement  ;
    let N =  A[0]; 
    if(N < 0 || N > 100000){
        return null ;
    }

    if(A.length <= 1){
        return  A.length + 1 ;
    }

    if(A[1] !== N + 1){
        return N + 1 ;
    }

    if(A[sieze] !== N + sieze){
        return N + sieze
    }

    for(let i = 1 ; i < A.length  ; i++){
        if( N + i !== A[i]){
            missingElement = N + i ;
            break ;
        }
    }
    return missingElement ;
}

function missingElement2(A){

    let obj = {};
    let min = 1;

   //iterate over all items in the array and store the value in a object;
    for (let i = 0, len=A.length; i < len; i++) {
        const num = A[i];
        if (num > 0) {
            obj[num] = true;
        }
    }
    //start with min===1 check if it's in the object
    // if it is if it's in the object then increment min and repeat until min not in object.
    while (obj[min]) {
        min++;
    }
    //this will return the smallest value not in array bigger or equal to 1
    return min;

}
module.exports = {missingElement, missingElement2} ;

