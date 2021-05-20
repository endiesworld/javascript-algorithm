
function sumZero(arrayofNumbers){
    let left = 0 ;
    let right = arrayofNumbers.length - 1 ;
    while(right > left){
        let sum = arrayofNumbers[left] + arrayofNumbers[right] ;
        if(sum === 0){
            return [arrayofNumbers[left] , arrayofNumbers[right]]
        }
        else if(sum > 0){
            right-- ;
        }
        else if(sum < 0){
            left++;
        }
    }

    return undefined ;
}

module.exports = {sumZero} ;