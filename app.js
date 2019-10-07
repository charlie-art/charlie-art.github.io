var health = 100;
var hits = 0;
var player2Health = 100;
var player2Hits = 0;


function slap() {
    health -= 1;
    hits += 1;
    player2Health -= 3;
    player2Hits += 2;
    update();
}
function kick() {
    health -= 5;
    hits += 1;
    player2Health -= 5;
    player2Hits += 5;
    update();
}

function punch() {
    health -= 10;
    hits += 1;
    player2Health -= 10;
    player2Hits += 6;
    update();
}
function reset() {
    health = 100;
    hits = 0;
    player2Health = 100;
    player2Hits = 3;
    update();
}
function update() {
    document.getElementById("player1HealthDisplay").innerText = health;
    document.getElementById("player1HitsDisplay").innerText = hits;
    document.getElementById("player2HealthDisplay").innerText = player2Health;
    document.getElementById("player2HitsDisplay").innerText = player2Hits;
}