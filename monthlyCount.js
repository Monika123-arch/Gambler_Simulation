let constant = require('./Gambler')
// let Gamblar = require('./Gamblar_Utils');

class MonthlyCompute{
    // monthly_investment; monthly_stake;
    constructor(){
        // super(monthly_investment, monthly_stake)
        // this.monthly_investment = constant.monthly_investment;
        // this.monthly_stake = constant.monthly_stake;
    }
    compute(){
        // let mon = new Gamblar(constant);
        
        if(constant.monthly_stake > constant.monthly_investment){
            let total = constant.monthly_stake - constant.monthly_investment ;
            console.log(`\nGambler Won $${total} in this month`)
        }
        else{
            let total =  constant.monthly_investment - constant.monthly_stake ;
            console.log(`\nGambler Loss $${ total } in this month`) 
        }
    }
}

module.exports = MonthlyCompute;