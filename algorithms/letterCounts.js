
function lettersCounter(string){
    let inputedString = string.replace(/[\s,.+]/g,'').toLowerCase().split('') ;
    let letterCounter = {} ;
  
    inputedString.forEach(element => {
        if(letterCounter[element]){
            letterCounter[element] = ++letterCounter[element] ;
        }
        else{
            letterCounter[element] = 1
        }
    });

    return letterCounter ;
}

function lettersCounter2(string){
    let letterCounter = {} ;
    let formatedString = string.toLowerCase() ;
    for(let element of formatedString){
        if(/[a-z0-9]/.test(element)){
            letterCounter[element] = ++letterCounter[element] || 1 ;
        }
    };
    return letterCounter ;
}

function lettersCounter3(string){
    let letterCounter = {} ;
    let formatedString = string.toLowerCase() ;
    for(let element of formatedString){
        if(checkAlphanumeric(element)){
            letterCounter[element] = ++letterCounter[element] || 1 ;
        }
    };
    return letterCounter ;
}


function checkAlphanumeric(char){
    let code = char.charCodeAt(0) ;
    if((code > 47 && code < 58) || //numeric (0-9)
        (code > 96 && code <123 )) { // lower alpha (a-z)
        return true  ;
    }

    return false ;
}

module.exports = lettersCounter3