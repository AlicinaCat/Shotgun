function Player(name, shots) {
    this.name = name;
    this.shots = shots;
}

Player.prototype.reload = function() {
    return this.shots += 1;
}

Player.prototype.shoot = function() {
    return this.shots -= 1;
}

Player.prototype.block = function() {

}

Player.prototype.shotgun = function() {
    return this.name + " won!";
}

let player = new Player('Alicina', 0)
console.log("Player name is " + player.name + ", available shots: " + player.shots);

player.reload();
console.log(player.shots);
player.reload();
console.log(player.shots);
player.shoot();
console.log(player.shots);
console.log(player.shotgun());

