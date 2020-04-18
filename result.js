class Result {
    constructor(draw, bid) {
        this.draw = draw;
        this.bid = bid;
        this.checkWin = () => {
            if (draw[0] == draw[1] && draw[0] == draw[2]) return true
            return false
        }
        this.getResult = () => {
            const check = this.checkWin();
            let cash = this.bid;
            if (check == true) {
                cash = this.bid * 3;
            }
            return [cash, check];
        }
    }
}