function Player(name, shots) {
    this.name = name;
    this.shots = shots;
}

Player.prototype.reload = function() {
    console.log(this.shots);
    return this.shots += 1;
}



Player.prototype.shoot = function() {
    console.log(this.shots);
    if (this.shots > 0)
        return this.shots -= 1;
}

Player.prototype.block = function() {
}

Player.prototype.shotgun = function() {
    return this.name + " won!";
}

Player.prototype.check = function() {
    if (player.shots == 3)
        return player.shotgun();
    else if (computer.shots == 3)
        return computer.shotgun(); 

}

Player.prototype.random = function() {
    let choice = Math.floor(Math.random() * 3);
    console.log("choice: " + choice);
    if (choice == 0) {
        computer.reload();
    } else if (choice == 1) {
        computer.block();
    } else if (choice == 2) {
        computer.shoot();
    }
}

var player = new Player('Alicina', 0);
console.log("Player 1 name is " + player.name + ", available shots: " + player.shots);

var computer = new Player('Computer', 0);
console.log("Player 2 name is " + computer.name + ", available shots: " + computer.shots);


var wrapButton = document.getElementById('wrap');
wrapButton.addEventListener('click', player.reload);

var throwButton = document.getElementById('throw');
throwButton.addEventListener('click', player.shoot);
