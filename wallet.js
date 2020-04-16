class Wallet {
    constructor(money = 100) {
        let _money = money;
        this.getMoney = () => _money;

        this.addMoney = (value) => {
            _money += value;
        }
        this.substractMoney = (value) => {
            _money -= value;
        }

        this.checkIfCanPlay = (value) => {
            if (_money < value) return false;
            return true;
        }
    }
}