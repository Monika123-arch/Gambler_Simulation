let constant = require('./Gambler')

class Gamblar{
    constructor(){ }

    randomCheck(){
        let rand = Math.floor(Math.random() * 10) % 2 + 1;
        return rand;
    }

    checkResult(){
        let result = constant.STACK_AMOUNT;
        while (result > (constant.STACK_AMOUNT / 2) && result < (constant.STACK_AMOUNT + (constant.STACK_AMOUNT / 2))){
            if (this.randomCheck() == constant.BETTING_AMOUNT){
                result = result + constant.BETTING_AMOUNT;
                // console.log(`Score: ${result}`);
            }
            else{
                result = result - constant.BETTING_AMOUNT;
                // console.log(`Score: ${result}`);
            }
            console.log(`Game Result ${result}`);
        }
    }
}

module.exports = new Gamblar();