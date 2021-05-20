
function frogJmp( X, Y, D){
    let numberJump = 0 ;
    
    if( X > Y){
        return null ;
    }
    if( X === Y){
        return 0;
    }
    if( D === Y){
        return 1;
    }
    
    numberJump = Math.ceil((Y - X) / D) 
    return numberJump ;
}

module.exports = {frogJmp}