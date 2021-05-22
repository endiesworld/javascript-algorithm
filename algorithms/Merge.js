function merge1(A, B){
    let lengthA = A.length ;
    let lengthB = B.length ; 
    let Aposition = 0 ;
    let Bposition = 0 ;
    let totalLength = lengthB + lengthA ;
    let mergedArray = [] ;
   
    for (let i = 0 ; i<totalLength  ; i++){

        if( Aposition < lengthA && Bposition < lengthB){

            if(A[Aposition] < B[Bposition]) {
                mergedArray[i] = A[Aposition] ;
                Aposition++ ;
            }

            else if(A[Aposition] > B[Bposition]) {
                mergedArray[i] = B[Bposition] ;
                Bposition++ ;
            }

            else {
                mergedArray[i] = B[Bposition] ;
                Bposition++ ;
            }
        }

        else if(Aposition < lengthA && !(Bposition < lengthB)){
            mergedArray[i] = A[Aposition] ;
            Aposition++ ;
        }

        else if(!(Aposition < lengthA) && Bposition < lengthB){
            mergedArray[i] = B[Bposition] ;
            Bposition++ ;
        }
    }

    return mergedArray ;
    }

    function merge2(A, B){
        let lengthA = A.length ;
        let lengthB = B.length ; 
        let Aposition = 0 ;
        let Bposition = 0 ;
        let totalLength = 0 ;
        let mergedArray = [] ;

        while(Aposition < lengthA && Bposition < lengthB){
            if(A[Aposition] < B[Bposition]) {
                mergedArray[totalLength] = A[Aposition] ;
                Aposition++ ;
                totalLength++ ;
            }

            else if(A[Aposition] > B[Bposition]) {
                mergedArray[totalLength] = B[Bposition] ;
                Bposition++ ;
                totalLength++; 
            }

            else {
                mergedArray[totalLength] = B[Bposition] ;
                Bposition++ ;
                totalLength ++ ;
            }
        }

        for( let i = Aposition ; i < lengthA ; i++){
            mergedArray[totalLength] = A[i] ;
            totalLength++ ;
        }

        for( let i = Bposition ; i < lengthB ; i++){
            mergedArray[totalLength] = B[i] ;
            totalLength++ ;
        }

        return mergedArray 
    }
    

    module.exports = {merge1, merge2}