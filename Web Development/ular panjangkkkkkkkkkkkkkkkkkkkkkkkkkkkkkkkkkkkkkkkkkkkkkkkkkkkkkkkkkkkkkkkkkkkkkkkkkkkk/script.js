// var canvas = document.getElementById("game");
// var  ctx = canvas.getContext("2d");
// var score = 0
// var count = 0
// var grid = 16
// var snake ={
//     x: 160,
//     y: 160,
//     dx : grid,
//     dy: 0,
//     cells: [],
//     maxCells: 4,
// };
// var apple ={
//     x: 320,
//     y: 320,
// };
// document.addEventListener("keydown", function (e) {
//     if (e.which === 37 && snake.dy === 0){
    
//         snake.dx = -grid;
//     snake.dy = 0;
// }
//     else if (e.which === 38 && snake.dy === 0){
//     snake.dy = 0;
// }  snake.dx = -grid;
//     else if (e.which === 39 && snake.dy === 0){
//         snake.dx = grid;
//     snake.dy = 0;
// }
//      else if (e.which === 40 && snake.dy === 0){
//     snake.dy = 0;
//     snake.dx = grid;
// }
// });
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }
// function loop() {
//     requestAnimationFrame(loop);
//     if ( ++count < 6){
//         return;
//     }
//     count = 0;
//     ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
//     snake.x += snake.dx;
//     snake.y += snake.dy;
//     if (snake.x < 0) {
//         snake.x = canvas.width - grid;
//     } else if (snake.x >= canvas.width){
//         snake.x = 0
//     }
//     snake.cells.unshift({ x: snake.x, y: snake.y});
//     if (snake.cells.length > snake.maxCells){
//         snake.cells.pop
//     }
//             if (snake.y < 0){
//                 snake.y = canvas.height - grid;
//             } else if (snake.y >= canvas.height){
//                 snake.y = 0;
//             }
//             ctx.fillStyle = "red";
//             ctx.fillRect(apple.x, apple.y, grid -1, grid -1);
//             ctx.fillStyle = "black";
//             snake.cells.forEach(function (cell,index) {
//                 ctx.fillRect(cell.x, cell.y, grid -1, grid -1);
//                 if (cell.x === apple.x && cell.y === apple.y) {
//                     score += 1;
//                     document.getElementById("score").innerHTML = score;
//                     snake.maxCells++;
//                     apple.x = getRandomInt(0, 25) * grid;
//                     apple.y = getRandomInt(0, 25) * grid;
//                 }
//                 for (var i = index + 1; i < snake.cells.length; i++){
//                     if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y){
//                         snake.x = 160;
//                         snake.y = 160;
//                         snake.cells = [];
//                         snake.maxCells = 4;
//                         snake.dx = grid;
//                         snake.dy = 0;
//                         apple.x = getRandomInt(0, 25) * grid;
//                         apple.y = getRandomInt(0, 25) * grid;
//                     }
//                 }
//             });
// }
// requestAnimationFrame(loop);
var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var score = 0;
var count = 0;
var grid = 16;

var snake = {
    x: 160,
    y: 160,
    dx: grid,
    dy: 0,
    cells: [],
    maxCells: 4,
};

var apple = {
    x: 320,
    y: 320,
};

document.addEventListener("keydown", function (e) {
    if (e.which === 37 && snake.dx === 0) { // Left
        snake.dx = -grid;
        snake.dy = 0;
    } else if (e.which === 38 && snake.dy === 0) { // Up
        snake.dy = -grid;
        snake.dx = 0;
    } else if (e.which === 39 && snake.dx === 0) { // Right
        snake.dx = grid;
        snake.dy = 0;
    } else if (e.which === 40 && snake.dy === 0) { // Down
        snake.dy = grid;
        snake.dx = 0;
    }
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function spawnApple() {
    apple.x = getRandomInt(0, canvas.width / grid) * grid;
    apple.y = getRandomInt(0, canvas.height / grid) * grid;

    // Check collision with snake
    for (var i = 0; i < snake.cells.length; i++) {
        if (apple.x === snake.cells[i].x && apple.y === snake.cells[i].y) {
            spawnApple(); // Respawn if it collides
            break;
        }
    }
}

function loop() {
    requestAnimationFrame(loop);
    if (++count < 6) {
        return;
    }
    count = 0;
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
    snake.x += snake.dx;
    snake.y += snake.dy;

    if (snake.x < 0) {
        snake.x = canvas.width - grid;
    } else if (snake.x >= canvas.width) {
        snake.x = 0;
    }

    snake.cells.unshift({ x: snake.x, y: snake.y });

    if (snake.cells.length > snake.maxCells) {
        snake.cells.pop(); // Corrected pop method
    }

    if (snake.y < 0) {
        snake.y = canvas.height - grid;
    } else if (snake.y >= canvas.height) {
        snake.y = 0;
    }

    ctx.fillStyle = "red";
    ctx.fillRect(apple.x, apple.y, grid - 1, grid - 1);
    ctx.fillStyle = "black";

    snake.cells.forEach(function (cell, index) {
        ctx.fillRect(cell.x, cell.y, grid - 1, grid - 1);

        if (cell.x === apple.x && cell.y === apple.y) {
            score += 1;
            document.getElementById("score").innerHTML = "Score: " + score;
            snake.maxCells++;
            spawnApple(); // Call the spawnApple function
        }

        for (var i = index + 1; i < snake.cells.length; i++) {
            if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
                // Reset the game
                snake.x = 160;
                snake.y = 160;
                snake.cells = [];
                snake.maxCells = 4;
                snake.dx = grid;
                snake.dy = 0;
                spawnApple(); // Call to reposition the apple
            }
        }
    });
}

spawnApple(); // Initial spawn of apple
requestAnimationFrame(loop);
