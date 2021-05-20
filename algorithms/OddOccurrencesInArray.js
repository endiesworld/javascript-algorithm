
function solution(A){
    let myObject = {}  ;
    let oddValue = 0 ;
    let oddCount = 0
    let negativeFlag = false ;
    if(!(A.length % 2)){
        return null ;
    }

    A.forEach(element => {
       myObject[element] = myObject[element] + 1 || 1; 
       if(element < 1 ){
           negativeFlag = true ;
       }
    });

    for(const field in myObject){
        if(myObject[field] % 2){
            oddValue = field ;
            oddCount++ ;
        }
    }

    if(oddCount > 1){
        return null ;
    }

    if(negativeFlag){
        return null ;
    }

    return +oddValue ;
}

module.exports = {solution}