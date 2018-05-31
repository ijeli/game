//word is randomly generated from wordbank
//dashes for the word appear on screen for every letter in the word 

//User picks a letter

//User keeps track of wins, losses, guesses, show all guesses 

//if user picks the wrong letter 
    // user loses one life
    // hangman gains one limb
        //head, body, arm, arm, leg, leg (6)
    //
// 

//if user picks correct letter  
    //letter appears
//

//when user guess full word
    //wins +1
    //lives reset
    //hangman reset
    //new word picked
//

//if user does not get full word    
    //all 6 limbs appear
    //user loses
    //lose meter +1
    //new game begins
//



window.onload = function () {



var wins = 0;
var losess = 0;
var lives  = 6;
var myGuesses = "";
var correct = 0;

var wordBank = ["head", "foot", "hand", "finger", "leg" ];
var dashBank = ["____", "______", "___"];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h",
    "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
    "t", "u", "v", "w", "x", "y", "z"
];


var word = document.getElementById("theWord");

var dashScreen = document.getElementById("theDash");



play = function () {

var currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
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

if (currentWord === "hand") {

    var hand1 = document.createElement ("span");
    hand1.setAttribute ("id", "hand1");
    hand1.innerHTML = " _ ";
    dashScreen.appendChild(hand1);

    var hand2 = document.createElement ("span");
    hand2.setAttribute ("id", "hand2");
    hand2.innerHTML = " _ ";
    dashScreen.appendChild(hand2);

    var hand3 = document.createElement ("span");
    hand3.setAttribute ("id", "hand3");
    hand3.innerHTML = " _ ";
    dashScreen.appendChild(hand3);

    var hand4 = document.createElement ("span");
    hand4.setAttribute ("id", "hand4");
    hand4.innerHTML = " _ ";
    dashScreen.appendChild(hand4);
}

if (currentWord === "head") {

    var head1 = document.createElement ("span");
    head1.setAttribute ("id", "head1");
    head1.innerHTML = " _ ";
    dashScreen.appendChild(head1);

    var head2 = document.createElement ("span");
    head2.setAttribute ("id", "head2");
    head2.innerHTML = " _ ";
    dashScreen.appendChild(head2);

    var head3 = document.createElement ("span");
    head3.setAttribute ("id", "head3");
    head3.innerHTML = " _ ";
    dashScreen.appendChild(head3);

    var head4 = document.createElement ("span");
    head4.setAttribute ("id", "head4");
    head4.innerHTML = " _ ";
    dashScreen.appendChild(head4);
}

if (currentWord === "foot") {

    var foot1 = document.createElement ("span");
    foot1.setAttribute ("id", "foot1");
    foot1.innerHTML = " _ ";
    dashScreen.appendChild(foot1);

    var foot23 = document.createElement ("span");
    foot23.setAttribute ("id", "foot23");
    foot23.innerHTML = " _ _ ";
    dashScreen.appendChild(foot23);

    var foot4 = document.createElement ("span");
    foot4.setAttribute ("id", "foot4");
    foot4.innerHTML = " _ ";
    dashScreen.appendChild(foot4);

}

if (currentWord === "finger") {

    var finger1 = document.createElement ("span");
    finger1.setAttribute ("id", "finger1");
    finger1.innerHTML = " _ ";
    dashScreen.appendChild(finger1);

    var finger2 = document.createElement ("span");
    finger2.setAttribute ("id", "finger2");
    finger2.innerHTML = " _ ";
    dashScreen.appendChild(finger2);

    var finger3 = document.createElement ("span");
    finger3.setAttribute ("id", "finger3");
    finger3.innerHTML = " _ ";
    dashScreen.appendChild(finger3);

    var finger4 = document.createElement ("span");
    finger4.setAttribute ("id", "finger4");
    finger4.innerHTML = " _ ";
    dashScreen.appendChild(finger4);

    var finger5 = document.createElement ("span");
    finger5.setAttribute ("id", "finger5");
    finger5.innerHTML = " _ ";
    dashScreen.appendChild(finger5);

    var finger6 = document.createElement ("span");
    finger6.setAttribute ("id", "finger6");
    finger6.innerHTML = " _ ";
    dashScreen.appendChild(finger6);
}



document.onkeypress = function userInput (event) {


    myGuesses = myGuesses + " " + event.key;


    if (currentWord === "leg") {

        if (event.key === "l") {
            var leg1Replace = document.getElementById("leg1");
            leg1Replace.innerHTML = "L";
            usedLetters.push = "l";
            correct = correct + 1;
        }

        else if (event.key === "e") {
            var leg2Replace = document.getElementById("leg2");
            leg2Replace.innerHTML = "E";
            correct = correct + 1;
        }

        else if (event.key === "g") {
            var leg3Replace = document.getElementById("leg3");
            leg3Replace.innerHTML = "G";
            correct = correct + 1;
        }

        else if (event.key !== "e" || "g" || "l" ) {
            lives = lives - 1
        }

        if (correct === 3) {
            wins = wins + 1;
            alert("LEG IS CORRECT!");
            dashScreen.innerHTML = "";
            correct = 0;
            play ();
            myGuesses = "";
            
        };

    }

    if (currentWord === "hand") {

        if (event.key === "h") {
            var hand1Replace = document.getElementById ("hand1");
            hand1Replace.innerHTML = "H";
            correct = correct + 1;
        }

        else if (event.key === "a") {
            var hand1Replace = document.getElementById ("hand2");
            hand1Replace.innerHTML = "A";
            correct = correct + 1;
        }
        
        else if (event.key === "n") {
            var hand1Replace = document.getElementById ("hand3");
            hand1Replace.innerHTML = "N";
            correct = correct + 1;
        }

        else if (event.key === "d") {
            var hand1Replace = document.getElementById ("hand4");
            hand1Replace.innerHTML = "D";
            correct = correct + 1;
        }

        else if (event.key !== "h" || "a" || "n" || "d") {
            lives = lives - 1
        }

        if (correct === 4) {
            wins = wins + 1;
            alert("HAND IS CORRECT!");
            dashScreen.innerHTML = "";
            
            correct = 0;
            play ();

            myGuesses = "";
        }
    }

    if (currentWord === "head") {

        if (event.key === "h") {
            var hand1Replace = document.getElementById ("head1");
            hand1Replace.innerHTML = "H";
            correct = correct + 1;
        }

        else if (event.key === "e") {
            var hand1Replace = document.getElementById ("head2");
            hand1Replace.innerHTML = "E";
            correct = correct + 1;
        }
        
        else if (event.key === "a") {
            var hand1Replace = document.getElementById ("head3");
            hand1Replace.innerHTML = "A";
            correct = correct + 1;
        }

        else if (event.key === "d") {
            var hand1Replace = document.getElementById ("head4");
            hand1Replace.innerHTML = "D";
            correct = correct + 1;
        } 

        else if (event.key !== "h" || "e" || "a" || "d") {
            lives = lives - 1
        }

        if (correct === 4) {
            wins = wins + 1;
            alert("HEAD IS CORRECT!");
            dashScreen.innerHTML = "";
            
            correct = 0;
            play ();

            myGuesses = "";
        }

    }

    if (currentWord === "foot") {

        if (event.key === "f") {
            var hand1Replace = document.getElementById ("foot1");
            hand1Replace.innerHTML = "F";
            correct = correct + 1;
        }

        else if (event.key === "o") {
            var hand1Replace = document.getElementById ("foot23");
            hand1Replace.innerHTML = "OO";
            correct = correct + 2;
        }
        
        else if (event.key === "t") {
            var hand1Replace = document.getElementById ("foot4");
            hand1Replace.innerHTML = "T";
            correct = correct + 1;
        }
        
        else if (event.key !== "f" || "o" || "t") {
            lives = lives - 1
        }

        if (correct === 4) {
            wins = wins + 1;
            alert("FOOT IS CORRECT!");
            dashScreen.innerHTML = "";
            
            correct = 0;
            play ();

            myGuesses = "";
        }

    }

    if (currentWord === "finger") {

        if (event.key === "f") {
            var finger1Replacement = document.getElementById ("finger1");
            finger1Replacement.innerHTML = "F";
            correct = correct + 1;
        }

        else if (event.key === "i") {
            var finger1Replacement = document.getElementById ("finger2");
            finger1Replacement.innerHTML = "I";
            correct = correct + 1;
        }
        
        else if (event.key === "n") {
            var finger1Replacement = document.getElementById ("finger3");
            finger1Replacement.innerHTML = "N";
            correct = correct + 1;
        }

        else if (event.key === "g") {
            var finger1Replacement = document.getElementById ("finger4");
            finger1Replacement.innerHTML = "G";
            correct = correct + 1;
        }

        else if (event.key === "e") {
            var finger1Replacement = document.getElementById ("finger5");
            finger1Replacement.innerHTML = "E";
            correct = correct + 1;
        }

        else if (event.key === "r") {
            var finger1Replacement = document.getElementById ("finger6");
            finger1Replacement.innerHTML = "R";
            correct = correct + 1;
        }

        else if (event.key !== "f" || "i" || "n" || "g" || "e" || "r") {
            lives = lives - 1
        }

        if (correct === 6) {
            wins = wins + 1;
            alert("FINGER IS CORRECT!");
            dashScreen.innerHTML = "";
            
            correct = 0;
            play ();

            myGuesses = "";
        }

    }


    var winsGame = document.getElementById("winGame");
    winGame.innerHTML = wins;

    var loseGame = document.getElementById("lossesGame");
    loseGame.innerHTML = losess;

    var livesMeter = document.getElementById("livesMeter");
    livesMeter.innerHTML = lives;

    var miGuesses = document.getElementById("guessLetters");
    miGuesses.innerHTML = myGuesses;



    if (lives == 0) {
        alert("ROUND LOSS")
        losess = losess + 1;
        lives = 6;
        correct = 0
        dashScreen.innerHTML = "";
        play ();

        myGuesses = "";
    }

    usedLetters = []




}

console.log ("this " + correct);

}

    document.getElementById("WORD").onclick = function () {

        dashScreen.innerHTML = "";
        
        correct = 0;
        play ();
        
        myGuesses = "";


    }

    document.getElementById("reset").onclick = function () {

        dashScreen.innerHTML = "";
        
        correct = 0;
        lives = 6;
        wins = 0;
        losses = 0;
        play ();

        myGuesses = "";
    }

    document.getElementById("start").onclick = function () {
        
        var winsGame = document.getElementById("winGame");
        winGame.innerHTML = wins;

        var loseGame = document.getElementById("lossesGame");
        loseGame.innerHTML = losess;

        var livesMeter = document.getElementById("livesMeter");
        livesMeter.innerHTML = lives;

        var miGuesses = document.getElementById("guessLetters");
        miGuesses.innerHTML = myGuesses;
        play ();
    }

            




    




}