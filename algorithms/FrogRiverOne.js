function frogRiverOne(X, A){
    let memory = {} ;
    let memoryCounter = 0 ;
    let index = 1 ;
    let N = A.length  ;

    if( X < 1 || X > 100000 || N < 1 || N > 100000){
        return -1 ;
    }
    

    if( X === 1 && A[0] === 1){
        return 0 ;
    }

     if( N === 1){
        return -1 ;
    }

     if( N < X){
        return -1 ;
    }
//(5, [1,3,1,4,2,3,5,4])
    for(let i = 0 ; i< N ; i++){
        index = i ;
        if(A[i] <= X && !(memory[A[i]])){
            
            memory[A[i]] = true ;
            memoryCounter++
            
        }
        if(memoryCounter === X){
            break ;
        }
    }
    if (memoryCounter < X){
        return -1
        
    }
 return index ;
}

module.exports = {frogRiverOne}

