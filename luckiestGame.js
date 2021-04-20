let constant = require('./Gambler')

class LuckyGame{
    constructor(){ }
    LuckyGame(){
        process.stdout.write("Luckiest Days : ")
        for(var count = 1 ; count < constant.luckiest_days.length ; count++){
            console.log(", "+constant.luckiest_days[count]);
        }
        process.stdout.write("\nUnluckiest Days : ")
        for(var count = 1 ; count < constant.unluckiest_days.length ; count++){
             console.log(", "+constant.unluckiest_days[count]);
        }
    }
}
module.exports = LuckyGame;