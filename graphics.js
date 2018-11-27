
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
    image.src = "pictures/boy-throw.png";
}

function boyBlock() {
    var image = document.getElementById('boy');
    image.src = "pictures/boy-block.png";
}

function boyWrap() {
    var image = document.getElementById('boy');
    image.src = "pictures/boy-wrap.png";
}

function girlThrow() {
    var image = document.getElementById('girl');
    image.src = "pictures/girl-throw.png";
}

function girlBlock() {
    var image = document.getElementById('girl');
    image.src = "pictures/girl-block.png";
}

function girlWrap() {
    var image = document.getElementById('girl');
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
        window.location.href = "winner.html";
    });
}
