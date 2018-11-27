// Player class

class Player {
    constructor(name) {
        this.name = name;
        this.shots = 0;
    }

    reload() {
        console.log(this.shots);
        this.increaseCounter();
        return this.shots += 1;
    }

    shoot() {
        console.log(this.shots);
        if (this.shots > 0) {
            this.decreaseCounter();
            return this.shots -= 1;
        }
    }

    block() {

    }

    gameOver() {
        console.log(this.name + " won!");
        gameOver = true;
        showShotgun();
    }

    increaseCounter() {
        console.log(this.name);
        let playerCounter = document.getElementById('player-counter');
        let icon = document.createElement('img');
        icon.src = "pictures/present-icon.png";
        playerCounter.appendChild(icon).width = "30";


    }

    decreaseCounter() {
        console.log(this.name);
        let playerCounter = document.getElementById('player-counter');
        playerCounter.removeChild(playerCounter.childNodes[player.shots]);
    }
}

// Computer class

class Computer extends Player {
    constructor() {
        super();
        this.name = 'Computer';
    }

    gameOver() {
        console.log(this.name + " won!");
        gameOver = true;
        window.location.href = "loser.html";
    }

    decreaseCounter() {
        console.log("default character");
        let computerCounter = document.getElementById('computer-counter');
        computerCounter.removeChild(computerCounter.childNodes[computer.shots]);
    }

    increaseCounter() {
        console.log("default character");
        let computerCounter = document.getElementById('computer-counter');
        let present = document.createElement('img');
        present.src = "pictures/present-icon.png";
        computerCounter.appendChild(present).width = "30";
    }

    random() {
        let choice = Math.floor(Math.random() * 3);
        console.log("choice: " + choice);
        if (choice == 0) {
            this.reload();
            girlWrap();
            return choice;
        } else if (choice == 1) {
            this.block();
            girlBlock();
            return choice;
        } else if (choice == 2) {
            if (computer.shots > 0) {
                this.shoot();
                girlThrow();
                return choice;
            } else
                this.random();
        }
    }
}

// Game dynamic

var gameOver = false;

function check() {
    if (player.shots == 3) {
        player.gameOver();
    } else if (computer.shots == 3) {
        computer.gameOver();
    } else {
        return false;
    }
}

function turn(choice) {


    console.log(gameOver);
    let computerChoice;

    if (!gameOver) {
        console.log("choice: " + choice);
        if (choice == 0) {
            boyWrap();
            computerChoice = computer.random();
            if (computerChoice == 2) {
                computer.gameOver();
                gameOver = true;
            }
            else
                player.reload();
        } else if (choice == 1) {
            boyBlock();
            player.block();
            computer.random();
        } else if (choice == 2) {
            if (player.shots > 0) {
                boyThrow();
                computerChoice = computer.random();
                console.log('computer chose: ' + computerChoice);
                if (computerChoice == 0 && player.shots > 0)
                    player.gameOver();
                else
                    player.shoot();
            } else { alert("You have no presents to throw!") }

        }

        console.log("Player " + player.name + " has " + player.shots + " shots");
        console.log("Player " + computer.name + " has " + computer.shots + " shots");
    }

    check();
}

var player = new Player('Alicina');
console.log("Player 1 name is " + player.name + ", available shots: " + player.shots);

var computer = new Computer();
console.log("Player 2 name is " + computer.name + ", available shots: " + computer.shots);

