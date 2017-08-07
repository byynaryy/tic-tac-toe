class Game {
    constructor(p1, p2) {
        this.player1 = p1;
        this.player2 = p2;
        this.grid = [["", "", ""],["", "", ""], ["", "", ""]];
    }

    play() {
            var square = document.getElementById("zero-zero");
            console.log(square.Id);
    }





}


class Player {
    constructor(m) {
        this.mark = m;
    }

    getMark() {
        return this.mark;
    }
}


let player1 = new Player("X");
let player2 = new Player("O");
let player3 = "0";
console.log(typeof player3);
console.log(player1.getMark());
let game = new Game(player1, player2);
game.play();



