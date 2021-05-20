// Variables: COUNTER-fLAG, CURRENTCOUNT, MAXIMUMCOUNT

// STEP-1: Divide N by 2 
//STEP-2: Check if the remainder is 1 or 0
    // if the remainder is 1
        // check if the COUNTER-fLAG is on.
            //if COUNTER-fLAG is on alternate the COUNTER-FLAG state, put is off and compare CURRENTCOUNT to existing MAXIMUMCOUNT, save the maximum, and empty CURRENTCOUNT. 
    
    // else-if the remainder is 0
        //check if the COUNTER-fLAG is on
            //if COUNTER-fLAG is on, increase CURRENTCOUNT by 1
            
// repeat step 1        

function binaryGap(N){
    let counterFlag = {
        state: false,
        operationStrated: false
    } ;
    let currentCount = 0 ;
    let maxCount = 0 ;
    let remainder ;
    let operand = N;

    while( operand >1) {
        remainder = operand %  2 ;
        if(remainder === 1){
            counterFlag.operationStrated = true ;
            counterFlag.state = true
            maxCount = Math.max(maxCount , currentCount) ;
            currentCount = 0 ;
        }
        else if(remainder === 0 && counterFlag.state && counterFlag.operationStrated){
                currentCount++ ;
        }
        operand = Math.floor(operand / 2 );

    }
     maxCount = Math.max(maxCount , currentCount) ;
    return maxCount

}

module.exports = {binaryGap}