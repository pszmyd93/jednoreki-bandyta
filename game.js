// link do gry: https://websamuraj.pl/examples/js/gra/ 
class Game {
    constructor() {
        this.bank = document.querySelector('.panel span.wallet');
        this.gamesNumber = document.querySelector('.score span.number');
        this.winsNumber = document.querySelector('.score span.win');
        this.losesNumber = document.querySelector('.score span.loss');
        this.ifWon = document.querySelector('.score span.result');
        this.divs = [...document.querySelectorAll('div.color')];
        this.inputValue = document.querySelector('.play #bid');
        this.wallet = new Wallet();
        this.stats = new Stats();

        document.querySelector('button#start').addEventListener('click', this.startGame.bind(this));


        this.render();
    }
    render(colors = ['gray', 'gray', 'gray']) {
        this.bank.textContent = this.wallet.getMoney();
        this.gamesNumber.textContent = this.stats.getGames();
        this.winsNumber.textContent = this.stats.getWins();
        this.losesNumber.textContent = this.stats.getLoses();

        this.divs.forEach((item, i) => {
            item.style.backgroundColor = colors[i];
        })

    }
    startGame() {
        // console.log(this)
        if (this.wallet.checkIfCanPlay(this.inputValue.value) == true && this.inputValue.value > 0) {
            this.draw = new Draw();
            const colors = this.draw.getDraw();
            const result = new Result(colors, this.inputValue.value);
            const getResult = result.getResult();
            this.stats.addGame(getResult)
            if (result.checkWin() == true) {
                this.ifWon.textContent = "Wygranko";
                this.wallet.addMoney(getResult[0]);
            } else {
                this.ifWon.textContent = "Przegranko";
                this.wallet.substractMoney(getResult[0]);
            }
            this.render(colors);
        }
    }
}