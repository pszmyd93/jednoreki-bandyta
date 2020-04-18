class Stats {
    constructor() {
        this.games = [];

        this.addGame = (game) => {
            const newGame = game;
            this.games.push(newGame);
        }

        this.getWins = () => {
            const winsNumber = this.games.filter(game => game[1] == true).length;
            console.log(winsNumber);
            return winsNumber;
        }
        this.getLoses = () => {
            const losesNumber = this.games.filter(game => game[1] == false).length;
            console.log(losesNumber);
            return losesNumber;
        }
        this.getGames = () => {
            return this.games.length;
        }
    }
}