function countingSort(A, K){
    let counterArray = [] ;
    let position = 0 ;
    for(let i = 0 ; i < K +1 ; i++ ){
        counterArray.push(0) ;
    }
    for (let i = 0 ; i< A.length ; i++){
        counterArray[A[i]] += 1;
    }
    console.log('counter : ' , counterArray)
    for(let i = 0 ; i < counterArray.length + 1 ; i++){
        for( let j = 0 ; j < counterArray[i]; j++){
            A[position] = i ;
            position++;
        }
    }

    return A ;
}

module.exports = {countingSort} ;