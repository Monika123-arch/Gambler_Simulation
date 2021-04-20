const prompt = require('prompt-sync')({sigint: true});
let constant = require('./Gambler')
let monthCompute = require('./monthlyCount')
let compute = new monthCompute(constant)
// let lucky = require('./luckiestGame')
const LuckyGame = require('./luckiestGame')
let game = new LuckyGame
//let readline = require('readline-sync')
class Gamblar{
    // STACK_AMOUNT; BETTING_AMOUNT; MONTHLY_DAYS; monthly_investment; monthly_stake; gambler_stack_win; gambler_stack_loose
    constructor(){
        
    }
    randomCheck(){
        let rand = Math.floor(Math.random() * 10) % 2 + 1;
        return rand;
    }

    checkResult(){
        for (let day = 1; day <= constant.MONTHLY_DAYS; day++){
            let result = constant.STACK_AMOUNT;
            while (result > constant.gambler_stack_loose && result < constant.gambler_stack_win){
                if (this.randomCheck() == constant.BETTING_AMOUNT){
                    result = result + constant.BETTING_AMOUNT;
                }
                else{
                    result = result - constant.BETTING_AMOUNT;
                }
            }            
            // console.log(`Game Result of ${day} day is : ${result}`);
            switch(result){
                case ( constant.gambler_stack_loose ) :
                    console.log(`Result of day ${day} is Gambler loss $${result}`);
                    constant.unluckiest_days[++constant.unluckiest_count] = day; 
                    break;
                default :
                    console.log(`Result of day ${day} is Gambler Won $${result}`);
                    constant.luckiest_days[++constant.luckiest_count] = day;
                    break;
            }
            constant.monthly_investment += constant.STACK_AMOUNT;
            constant.monthly_stake += result;
        }
        game.LuckyGame();
        compute.compute();
       
        if(constant.monthly_stake > constant.monthly_investment){
            var user_decide = prompt('Press 1 to continue game : ')

            if(user_decide == 1){
                new Gamblar().checkResult();
            }
        }
    }
}

module.exports = new Gamblar();