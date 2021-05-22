
function selectionSort(A) {
    let sortedArray = [] ;
    let minValue = 0 ;
    let greatValue = 0 ;
    for(let i = 0 ; i < A.length ; i++ ){
        minValue = A[i] ;
        for(let j = i + 1 ; j < A.length ; j++){
            if (minValue > A[j]){
                greatValue = minValue ;
                minValue = A[j] ;
                A[j] = greatValue ;
            }
        }
        sortedArray.push(minValue)

    }
    return sortedArray ;
}

module.exports = {selectionSort}