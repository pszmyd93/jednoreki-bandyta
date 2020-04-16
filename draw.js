class Draw {
    constructor () {
        this.options = ['red', 'green', 'blue'];
        this.getDraw = () => {
            const result = [];
            for(let i = 0; i< this.options.length; i++) {
                const index = Math.floor(Math.random()*this.options.length);
                const color = this.options[index];
                result.push(color);
            }
            return result;
        }
    }
}