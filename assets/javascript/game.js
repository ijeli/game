window.onload = function () {



var wins = 0;
var losess = 0;
var lives  = 6;
var myGuesses = "";

var wordBank = ["head", "foot", "head", "finger", "leg" ];
var dashBank = ["____", "______", "___"];


var word = document.getElementById("theWord");

var dashScreen = document.getElementById("theDash");




var currentWord = "leg"
//wordBank[Math.floor(Math.random() * wordBank.length)];
var arrayCurrentWord = Array.from(currentWord);

console.log(currentWord);

var threeArray = Array.from(dashBank[2]);
var fourArray = Array.from(dashBank[0]);
var sixArray = Array.from(dashBank[1]);


for (var x = 0; x < arrayCurrentWord.length; x++) {

    console.log (arrayCurrentWord[x]);    
    //var letters = document.createElement("span");
    //letters.innerHTML = " - " ;
    //word.appendChild(letters);

};

//This is where the Dashes came from



if (currentWord === "leg") {

    var leg1 = document.createElement ("span");
    leg1.setAttribute ("id", "leg1");
    leg1.innerHTML = " _ ";
    dashScreen.appendChild(leg1);

    var leg2 = document.createElement ("span");
    leg2.setAttribute ("id", "leg2");
    leg2.innerHTML = " _ ";
    dashScreen.appendChild(leg2);

    var leg3 = document.createElement ("span");
    leg3.setAttribute ("id", "leg3");
    leg3.innerHTML = " _ ";
    dashScreen.appendChild(leg3);

}


document.onkeypress = function userInput (event) {
    if (currentWord === "leg") {
        if (event.key === "l") {
            alert("L selected");
            var leg1Replace = document.getElementById("leg1");
            leg1Replace.style.backgroundColor = "red";
            leg1Replace.innerHTML = "L";
        }
    }

    if (currentWord === "leg") {
        if (event.key === "e") {
            alert("E selected");
            var leg1Replace = document.getElementById("leg2");
            leg1Replace.style.backgroundColor = "blue";
            leg1Replace.innerHTML = "E";
        }
    }

    if (currentWord === "leg") {
        if (event.key === "g") {
            alert("G selected");
            var leg1Replace = document.getElementById("leg3");
            leg1Replace.style.backgroundColor = "purple";
            leg1Replace.innerHTML = "G";
        }
    }
}






    




}