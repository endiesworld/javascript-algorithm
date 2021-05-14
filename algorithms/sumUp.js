const inquirer = require('inquirer') ;

/**
 * Sum of all numbers from 1 up to the including number.
 */

// Method One

const questions = [
    
    {
        type: 'list',
        name: 'sumUp',
        message: "This operation is for the sum-up of any number entered",
        choices: [
            new inquirer.Separator(' = chose your prefered Method = '),
            {
                name: 'loopMethod'
            },
            {
                name:'mathMethod'
            }
        ]
    },

    {
        type: 'number',
        name: 'data',
        message: "Enter the number you want to sum-up ",
    },
]

function loopFunction(n){
    let sum = 0 ;
    for(let i = 1 ; i<= n ; i++){
        sum += i
    }
    return sum ;
}

function mathFunction(n){
    return n*(n+1) / 2 ;
}

const approach = {
    loopMethod : (number) => loopFunction(number), 
    mathMethod : (number) => mathFunction(number)

}

function operation(){
    inquirer.prompt(questions)
    .then(answers => {
        let method = answers.sumUp ;
        let number =  answers.data ;
        console.log(`The sum-up for the number entered is: ${approach[method]( number)}`)
    })
}

// function sumUpnumber(number){
//  return approach.loopMethod(number)
// }

module.exports = operation ;