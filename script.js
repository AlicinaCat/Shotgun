class Player {
    constructor(name, shots) {
        this.name = name;
        this.shots = shots;
    }

    reload() {
        console.log(this.shots);
        return this.shots += 1;
    }

    shoot() {
        console.log(this.shots);
        if (this.shots > 0)
            return this.shots -= 1;
    }

    block() {

    }

    shotgun() {
        return this.name + " won!";
    }

    random() {
        let choice = Math.floor(Math.random() * 3);
        console.log("choice: " + choice);
        if (choice == 0) {
            this.reload();
        } else if (choice == 1) {
            this.block();
        } else if (choice == 2) {
            this.shoot();
        }
    }
}

function check() {
    if (player.shots == 3) {
        console.log(player.shotgun());
        return true;
    } else if (computer.shots == 3) {
        console.log(computer.shotgun())
        return true;
    } else {
        return false;
    }
}

function turn(choice) {
    var gameOver = check();
    console.log(gameOver);

    if (!gameOver) {

        console.log("choice: " + choice);
        if (choice == 0) {
            player.reload();
        } else if (choice == 1) {
            player.block();
        } else if (choice == 2) {
            player.shoot();
        }

        computer.random();

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
