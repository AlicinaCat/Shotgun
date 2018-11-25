class Player {
    constructor(name, shots) {
        this.name = name;
        this.shots = shots;
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

    shotgun() {
        console.log(this.name + " won!");
        return true;
    }

    random() {
        let choice = Math.floor(Math.random() * 3);
        console.log("choice: " + choice);
        if (choice == 0) {
            this.reload();
            return choice;
        } else if (choice == 1) {
            this.block();
            return choice;
        } else if (choice == 2) {
            this.shoot();
            return choice;
        }
    }

    increaseCounter() {
        let name = this.name;
        switch (name) {
            case "Computer":
                console.log("default character");
                let computerCounter = document.getElementById('computer-counter');
                let present = document.createElement('img');
                present.src = "pictures/present-icon.png";
                computerCounter.appendChild(present).width = "30";
                break;
            default:
                console.log(this.name);
                let playerCounter = document.getElementById('player-counter');
                let icon = document.createElement('img');
                icon.src = "pictures/present-icon.png";
                playerCounter.appendChild(icon).width = "30";
                break;
        }
    }

    decreaseCounter() {
        let name = this.name;
        switch (name) {
            case "Computer":
                console.log("default character");
                let computerCounter = document.getElementById('computer-counter');
                computerCounter.removeChild(computerCounter.childNodes[computer.shots]);
                break;
            default:
                console.log(this.name);
                let playerCounter = document.getElementById('player-counter');
                playerCounter.removeChild(playerCounter.childNodes[player.shots]);
                break;
        }
    }
}

function check() {
    if (player.shots == 3) {
        return player.shotgun();
    } else if (computer.shots == 3) {
        return computer.shotgun();
    } else {
        return false;
    }
}

function turn(choice) {
    var gameOver = check();
    console.log(gameOver);
    let computerChoice;

    if (!gameOver) {
        console.log("choice: " + choice);
        if (choice == 0) {
            computerChoice = computer.random();
            if (computerChoice == 2 && computer.shots + 1 > 1)
                computer.shotgun();
            else
                player.reload();
        } else if (choice == 1) {
            player.block();
            computer.random();
        } else if (choice == 2) {
            computerChoice = computer.random();
            console.log('computer chose: ' + computerChoice);
            if (computerChoice == 0)
                player.shotgun();
            else
                player.shoot();
        }

        console.log("Player " + player.name + " has " + player.shots + " shots");
        console.log("Player " + computer.name + " has " + computer.shots + " shots");
    }
}

var player = new Player('Alicina', 0);
console.log("Player 1 name is " + player.name + ", available shots: " + player.shots);

var computer = new Player('Computer', 0);
console.log("Player 2 name is " + computer.name + ", available shots: " + computer.shots);


var wrapButton = document.getElementById('wrap');
wrapButton.addEventListener('click', function () {
    turn(0);
});

var throwButton = document.getElementById('throw');
throwButton.addEventListener('click', function () {
    turn(2);
});

var blockButton = document.getElementById('block');
blockButton.addEventListener('click', function () {
    turn(1);
});