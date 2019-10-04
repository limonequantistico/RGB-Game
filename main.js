// var movies = [
// //     {
// //         title: "movie1",
// //         rating: "5 steb",
// //         hasWatched: "saw"
// //     },
// //     {
// //         title: "movie2",
// //         rating: "2 steb",
// //         hasWatched: "did not see"
// //     },
// //     {
// //         title: "movie3",
// //         rating: "4 stebbeb",
// //         hasWatched: "saw"
// //     }];
// //
// // movies.forEach(function (movie) {
// //     console.log("You " + movie.hasWatched + "  " + movie.title + " with the rating of " + movie.rating);
// // });

var colors = generateRandomArray(6);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var pickedColor = randomColor();
colorDisplay.textContent = pickedColor;


for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener('click', function () {
        var clickedColor = this.style.backgroundColor;

        if (clickedColor === pickedColor){
            console.log("yep");
            messageDisplay.textContent = "Correct! Refresh to play again";
            changeColors(clickedColor);
            document.querySelector(".crimson").style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Nope, try again"
        }
    })
}

function changeColors(color) {
    for (var i = 0; i < colors.length; i++){
        squares[i].style.backgroundColor = color;
    }
}
function randomColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomArray(num) {
    var array = [];
    for (var i = 0; i < num; i++){
        array.push(generateRandomColors());
    }
    return array;
}
function generateRandomColors() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb("+ red + ", " + green + ", " + blue + ")";
}