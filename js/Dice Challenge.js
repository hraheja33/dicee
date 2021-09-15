let random1 = Math.floor((Math.random() * 6) + 1); //Generate number 1 - 6

let randomImageSource1 = "./images/dice" + random1 + ".png"; // Generate source for image 1 - 6 based on random number

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1); //changing source of the img tag (1)

let random2 = Math.floor(Math.random() * 6) + 1; //Generate another number 1 - 6

let randomImageSource2 = "./images/dice" + random2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (random1 > random2) {
    document.getElementById("title").innerHTML = "Player 1 wins!🚩";
} else if (random2 > random1) {
    document.getElementById("title").innerHTML = "Player 2 wins!🚩";
} else {
    document.getElementById("title").innerHTML = "Draw!";
}