
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

module.exports = lettersCounter 