//define the length of sub
//set starting position
//confirm that starting position + (sub -1) is less than the sieze of the array
//loop from starting, to starting position + sub

function maxSubArraySumA(arr, sub){
    let subLength = sub ;
    let maxValue = -Infinity ;
    let maxValueHolder = 0 ;
    let startPosition = 0 ; 
     if(arr.length < subLength){
        return null
    }
    
    while((startPosition + sub ) < arr.length ){
        for(let i = startPosition ; i < startPosition+ sub ; i++ ){
            maxValueHolder =  maxValueHolder + arr[i]
        }
        startPosition++ ;
        if(maxValueHolder > maxValue){
            maxValue = maxValueHolder
        }
        maxValueHolder = 0 ;
    }
    return maxValue ;
}

function maxSubArraySumB(arr, num){
    let maxSum = 0 ;
    let tempSum = 0 ;
    if(arr.length < num) return null ;
    for(let i = 0 ; i < num; i++){
        maxSum += arr[i] ;
    }
    tempSum = maxSum ;
    for (let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i] ;
        maxSum = Math.max(maxSum, tempSum) ;
    }
    return maxSum ;
}

module.exports = {maxSubArraySumA, maxSubArraySumB}