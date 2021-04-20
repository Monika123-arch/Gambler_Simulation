//Constants
const STACK_AMOUNT = 100 ;
const BETTING_AMOUNT = 1 ;
const MONTHLY_DAYS =  20;
const monthCompute = 0;
let monthly_investment = 0
let monthly_stake = 0
let gambler_stack_win = STACK_AMOUNT + (STACK_AMOUNT / 2);
let gambler_stack_loose = STACK_AMOUNT / 2;
let luckiest_count = 0;
let unluckiest_count = 0;
var luckiest_days = [];
var unluckiest_days = [];

module.exports = {STACK_AMOUNT, BETTING_AMOUNT, MONTHLY_DAYS, 
                    gambler_stack_win, gambler_stack_loose, 
                    monthly_investment, monthly_stake,
                    luckiest_count, unluckiest_count, luckiest_days, unluckiest_days} 