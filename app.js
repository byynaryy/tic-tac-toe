class Game {
    constructor(p1, p2) {
        this.player1 = p1;
        this.player2 = p2;
        this.mark = p1;
        this.grid = [["", "", ""],["", "", ""], ["", "", ""]];
    }


    play(id) {
        console.log("id is: "+id);
        this.populateGrid(id);
        console.log(this.checkForWinner(this.horizontal, this.vertical, this.diagonal));
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


    checkForWinner(f, g, h) {
        if(f(this.grid)) {
            return "winner is: "+this.mark; 
        }else if(g(this.grid)) {
            return "winner is: "+this.mark; 
        }else if(h(this.grid)) {
            return "winner is: "+this.mark; 
        }
    }


    horizontal(grid) {
        if(grid[0][0] != "" && grid[0][1] != "" && grid[0][2] != "") { 
            return grid[0][0] == grid[0][1] && grid[0][0] == grid[0][2];
        }else if(grid[1][0] != "" && grid[1][1] != "" && grid[1][2] != "") { 
            return grid[1][0] == grid[1][1] && grid[1][0] == grid[1][2]; 
        }else if(grid[2][0] != "" && grid[2][1] != "" && grid[2][2] != "") { 
            return grid[2][0] == grid[2][1] && grid[2][0] == grid[2][2]; 
        }
    }
    
    
    vertical(grid) {
        if(grid[0][0] != "" && grid[1][0] != "" && grid[2][0] != "") { 
            return grid[0][0] == grid[1][0] && grid[0][0] == grid[2][0];
        }else if(grid[0][1] != "" && grid[1][1] != "" && grid[2][1] != "") { 
            return grid[0][1] == grid[1][1] && grid[0][1] == grid[2][1]; 
        }else if(grid[0][2] != "" && grid[1][2] != "" && grid[2][2] != "") { 
            return grid[0][2] == grid[1][2] && grid[0][2] == grid[2][2]; 
        }
    }
    
    
    diagonal(grid) {
        if(grid[0][0] != "" && grid[1][1] != "" && grid[2][2] != "") { 
            return grid[0][0] == grid[1][1] && grid[0][0] == grid[2][2];
        }else if(grid[0][2] != "" && grid[1][1] != "" && grid[2][0] != "") { 
            return grid[0][2] == grid[1][1] && grid[0][2] == grid[2][0]; 
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











