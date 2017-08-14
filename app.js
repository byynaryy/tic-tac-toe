class Game {
    constructor(p1, p2) {
        this.player1 = p1;
        this.player2 = p2;
        this.mark = p1;
        this.grid = [["", "", ""],["", "", ""], ["", "", ""]];
    }


    play(id) {
        this.populateGrid(id);
        this.changePlayer();
        this.displayGrid();
    }


    populateGrid(id) {
        if(id == "zero-zero"  && this.grid[0][0] === "") {
            let square = document.querySelector("#zero-zero");
            square.innerHTML = this.mark; 
            this.grid[0][0] = this.mark;
        }else if(id == "zero-one" && this.grid[0][1] === "") {
            let square = document.querySelector("#zero-one");
            square.innerHTML = this.mark; 
            this.grid[0][1] = this.mark;
        }else if(id == "zero-two" && this.grid[0][2] === "") {
            let square = document.querySelector("#zero-two");
            square.innerHTML = this.mark; 
            this.grid[0][2] = this.mark;
        }else if(id == "one-zero" && this.grid[1][0] === "") {
            let square = document.querySelector("#one-zero");
            square.innerHTML = this.mark; 
            this.grid[1][0] = this.mark;
        }else if(id == "one-one" && this.grid[1][1] === "") {
            let square = document.querySelector("#one-one");
            square.innerHTML = this.mark; 
            this.grid[1][1] = this.mark;
        }else if(id == "one-two" && this.grid[1][2] === "") {
            let square = document.querySelector("#one-two");
            square.innerHTML = this.mark; 
            this.grid[1][2] = this.mark;
        }else if(id == "two-zero" && this.grid[2][0] === "") {
            let square = document.querySelector("#two-zero");
            square.innerHTML = this.mark; 
            this.grid[2][0] = this.mark;
        }else if(id == "two-one" && this.grid[2][1] === "") {
            let square = document.querySelector("#two-one");
            square.innerHTML = this.mark; 
            this.grid[2][1] = this.mark;
        }else if(id == "two-two" && this.grid[2][2] === "") {
            let square = document.querySelector("#two-two");
            square.innerHTML = this.mark; 
            this.grid[2][2] = this.mark;
        }
    }


    changePlayer() {
        if(this.mark == this.player1) {
            return this.mark = this.player2;
        }else {
            return this.mark = this.player1;
        }
    }


    displayGrid() {
        for(let i = 0; i < this.grid.length; i++) {
            for(let j = 0; j < this.grid[i].length; j++) {
                console.log("display i: "+i+" j: "+j+" = "+this.grid[i][j]);
            }
        }
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
console.log(player1.getMark())
console.log(player2.getMark())
let game = new Game(player1.getMark(), player2.getMark());











