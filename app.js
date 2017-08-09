class Game {
    constructor(p1, p2) {
        this.player1 = p1;
        this.player2 = p2;
        this.winner = "";
        this.grid = [["", "", ""],["", "", ""], ["", "", ""]];
    }

    play(identity) {
        let mark = this.player1;
        let idList = ["#zero-zero", "#zero-one", "#zero-two", "#one-zero", "#one-one", "#one-two", "#two-zero", "#two-one", "#two-two"];
            let square = document.querySelector("#zero-zero");
            square.innerHTML = mark; 
    }


    quare(m, lst) {
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
let game = new Game(player1.getMark(), player2.getMark());



