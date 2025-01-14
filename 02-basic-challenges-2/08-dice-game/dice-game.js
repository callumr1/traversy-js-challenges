function diceGameSimulation(sims) {
    const gameResults = [];
    let i = 0;
    while(i < sims){
        gameResults.push(new DiceGame().playGame());
        i++
    }

    return gameResults;
}

// I like classes :)
class DiceGame {

    playGame() {
        let dice1 = this.rollDice();
        let dice2 = this.rollDice();
        let sum = dice1 + dice2;
        let result = this.gameResult(dice1 + dice2);

        return {
            dice1,
            dice2,
            sum,
            result
        }
    }

    rollDice(){
        return Math.floor(Math.random() * 6) + 1
    }

    gameResult(sum){
        let wins = [7, 11];
        let loses = [2, 3, 12]
        if(wins.includes(sum)){
            return "win"
        } else if (loses.includes(sum)){
            return "lose"
        } else {
            return "roll again"
        }
    }
}

module.exports = diceGameSimulation;
