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

    gameOver() {
        console.log(this.name + " won!");
        gameOver = true;
        if (this.name != "Computer")
            showShotgun();
        else 
            playerLost();
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
            }
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
    check();

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
            boyThrow();
            computerChoice = computer.random();
            console.log('computer chose: ' + computerChoice);
            if (computerChoice == 0 && player.shots > 0)
                player.gameOver();
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

function boyThrow() {
    var image = document.getElementById('boy');
    image.setAttribute("style", "width: 485px;");
    image.src = "pictures/boy-throw.png";
}

function boyBlock() {
    var image = document.getElementById('boy');
    image.setAttribute("style", "width: 300px;");
    image.src = "pictures/boy-block.png";
}

function boyWrap() {
    var image = document.getElementById('boy');
    image.setAttribute("style", "width: 300px;");
    image.src = "pictures/boy-wrap.png";
}

function girlThrow() {
    var image = document.getElementById('girl');
    image.setAttribute("style", "width: 485px;");
    image.src = "pictures/girl-throw.png";
}

function girlBlock() {
    var image = document.getElementById('girl');
    image.setAttribute("style", "width: 300px;");
    image.src = "pictures/girl-block.png";
}

function girlWrap() {
    var image = document.getElementById('girl');
    image.setAttribute("style", "width: 300px;");
    image.src = "pictures/girl-wrap.png";
}

function showShotgun() {
    let throwButton = document.getElementById('throw');
    throwButton.parentNode.removeChild(throwButton);
    let blockButton = document.getElementById('block');
    blockButton.parentNode.removeChild(blockButton);
    let wrapButton = document.getElementById('wrap');
    wrapButton.parentNode.removeChild(wrapButton);

    let list = document.getElementById('center');
    let shotgunButton = document.createElement('button');
    let buttonText = document.createTextNode('Merry Christmas!');
    shotgunButton.appendChild(buttonText);
    list.appendChild(shotgunButton);

    shotgunButton.addEventListener('click', function () {
    changeScreenWinner();
});
}

function playerLost() {
    let throwButton = document.getElementById('throw');
    throwButton.parentNode.removeChild(throwButton);
    let blockButton = document.getElementById('block');
    blockButton.parentNode.removeChild(blockButton);
    let wrapButton = document.getElementById('wrap');
    wrapButton.parentNode.removeChild(wrapButton);

    let list = document.getElementById('center');
    let title = document.createElement('h1');
    title.innerHTML = "You lost!";
    list.appendChild(title);
}

function changeScreenWinner() {
    let list = document.getElementById('center');
    let title = document.createElement('h1');
    title.innerHTML = "You won!";
    list.appendChild(title);
}

