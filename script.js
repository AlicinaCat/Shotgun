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
            reload();
        } else if (choice == 1) {
            block();
        } else if (choice == 2) {
            shoot();
        }
    }
}

function turn(choice) { 
    console.log("choice: " + choice);
    if (choice == 0) {
        player.reload();
    } else if (choice == 1) {
        player.block();
    } else if (choice == 2) {
        player.shoot();
    }

}

var player = new Player('Alicina', 0);
console.log("Player 1 name is " + player.name + ", available shots: " + player.shots);

var computer = new Player('Computer', 0);
console.log("Player 2 name is " + computer.name + ", available shots: " + computer.shots);


var wrapButton = document.getElementById('wrap');
wrapButton.addEventListener('click', function() {
    turn(0);
});

var throwButton = document.getElementById('throw');
throwButton.addEventListener('click', function() {
    turn(2);
});
