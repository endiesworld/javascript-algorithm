function frogRiverOne(X, A){
    
    let N = A.length  ;
    let answer = {
        left: false ,
        right: false
    }
    let left = 0 ; 
    let right = (A.length - 1) || 1 ;

    if( X < 1 || X > 100000 || A.length < 1 || A.length > 100000){
        return -1 ;
    }


    if( X === A[left]){
        return -1 ;
    }

    if( X === A[right]){
        return right ;
    }

    for(let i = 1; i <A.length - 1 ; i++){
        left = i ;
        right = N - (1+ i) ;
        if( X === A[left]){
        answer.left = true
        break ;
    }

    if( X === A[right]){
        answer.right = true;
        break ;
    }
    }

    if(answer.left && answer.right){
        return -1 ;
    }
    
    if(answer.left ){
        return left ;
    }

    else if(answer.right ){
        return right ;
    }
    return -1;
}

module.exports = {frogRiverOne}