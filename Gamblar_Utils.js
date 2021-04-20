let constant = require('./Gambler')

class Gamblar{
    constructor(){ }

    randomCheck(){
        let rand = Math.floor(Math.random() * 10) % 2 + 1;
        return rand;
    }

    checkResult(){
        if (this.randomCheck() == constant.BETTING_AMOUNT){
            let result = constant.STACK_AMOUNT + constant.BETTING_AMOUNT;
            console.log(`Score: ${result}`);
        }
        else{
            let result = constant.STACK_AMOUNT - constant.BETTING_AMOUNT;
            console.log(`Score: ${result}`);
        }
    }
}

module.exports = new Gamblar();