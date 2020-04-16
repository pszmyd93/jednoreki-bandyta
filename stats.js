class Stats {
    constructor() {
        this.games = [];

        this.addGame = (bid = 1, result = true) => {
            const newGame = [bid, result];
            this.games.push(newGame);
        }

        this.getWins = () => {
            const winsNumber = this.games.filter(game => game[1] == true);
            console.log(winsNumber);
            return winsNumber;
        }
        this.getLoses = () => {
            const losesNumber = this.games.filter(game => game[1] == false);
            console.log(losesNumber);
            return losesNumber;
        }
        this.getGames = () => {
            return this.games.length;
        }
    }
}