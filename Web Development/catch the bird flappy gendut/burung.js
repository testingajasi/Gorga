//1. Set variable
const showScore = document.querySelector(".scoreGame")
var bird = document.getElementById("player")
var score = 0
var time = 0
//2. Move bird in a random position
function randomMove() {
  var x = Math.floor(Math.random()* 481);
  var y = Math.floor(Math.random() * 1052);
bird.style.top = x + "px"
bird.style.top = y + "px"
}
//3. Loop random move
var transition = setInterval(function () {
    randomMove();
    time++;
    if (time == 10){
        if (score >= 5){
            document.body.style.backgroundImage = "url(image/win.jpg)"
            reset();
        }else{
            document.body.style.backgroundImage = "url(image/lose.png)"
            reset();
        }
    }
}, 1000);
//4. Click event listener
bird.onclick = function () {
    score++;
    showScore.innerHTML = `${score}` ;
};
function reset() {
    //perintah untuk menghentikan perulangan
    clearInterval(transition);
    bird.style.display = "none";
    document.getElementById("scoreMain").style.display = "none"
}