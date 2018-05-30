window.onload = function () {



var wins = 0;
var losess = 0;
var lives  = 6;
var myGuesses = "";

var wordBank = ["head", "foot", "hand", "finger", "leg" ];
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
        }

        else if (event.key === "e") {
            var leg1Replace = document.getElementById("leg2");
            leg1Replace.innerHTML = "E";
        }

        else if (event.key === "g") {
            var leg1Replace = document.getElementById("leg3");
            leg1Replace.innerHTML = "G";
        }

        else if (event.key !== "e" || "g" || "l") {
            lives = lives - 1
        }
    }

    if (currentWord === "hand") {

        if (event.key === "h") {
            var hand1Replace = document.getElementById ("hand1");
            hand1Replace.innerHTML = "H";
        }

        else if (event.key === "a") {
            var hand1Replace = document.getElementById ("hand2");
            hand1Replace.innerHTML = "A";
        }
        
        else if (event.key === "n") {
            var hand1Replace = document.getElementById ("hand3");
            hand1Replace.innerHTML = "N";
        }

        else if (event.key === "d") {
            var hand1Replace = document.getElementById ("hand4");
            hand1Replace.innerHTML = "D";
        }

        else if (event.key !== "h" || "a" || "n" || "d") {
            lives = lives - 1
        }
    }

    if (currentWord === "head") {

        if (event.key === "h") {
            var hand1Replace = document.getElementById ("head1");
            hand1Replace.innerHTML = "H";
        }

        else if (event.key === "e") {
            var hand1Replace = document.getElementById ("head2");
            hand1Replace.innerHTML = "E";
        }
        
        else if (event.key === "a") {
            var hand1Replace = document.getElementById ("head3");
            hand1Replace.innerHTML = "A";
        }

        else if (event.key === "d") {
            var hand1Replace = document.getElementById ("head4");
            hand1Replace.innerHTML = "D";
        } 

        else if (event.key !== "h" || "e" || "a" || "d") {
            lives = lives - 1
        }

    }

    if (currentWord === "foot") {

        if (event.key === "f") {
            var hand1Replace = document.getElementById ("foot1");
            hand1Replace.innerHTML = "F";
        }

        else if (event.key === "o") {
            var hand1Replace = document.getElementById ("foot23");
            hand1Replace.innerHTML = "OO";
        }
        
        else if (event.key === "t") {
            var hand1Replace = document.getElementById ("foot4");
            hand1Replace.innerHTML = "T";
        }
        
        else if (event.key !== "f" || "o" || "t") {
            lives = lives - 1
        }

    }

    if (currentWord === "finger") {

        if (event.key === "f") {
            var finger1Replacement = document.getElementById ("finger1");
            finger1Replacement.innerHTML = "F";
        }

        else if (event.key === "i") {
            var finger1Replacement = document.getElementById ("finger2");
            finger1Replacement.innerHTML = "I";
        }
        
        else if (event.key === "n") {
            var finger1Replacement = document.getElementById ("finger3");
            finger1Replacement.innerHTML = "N";
        }

        else if (event.key === "g") {
            var finger1Replacement = document.getElementById ("finger4");
            finger1Replacement.innerHTML = "G";
        }

        else if (event.key === "e") {
            var finger1Replacement = document.getElementById ("finger5");
            finger1Replacement.innerHTML = "E";
        }

        else if (event.key === "r") {
            var finger1Replacement = document.getElementById ("finger6");
            finger1Replacement.innerHTML = "R";
        }

        else if (event.key !== "f" || "i" || "n" || "g" || "e" || "r") {
            lives = lives - 1
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
        alert("lose")
        var nextWord = wordBank[Math.floor(Math.random() * wordBank.length)];
        losess = losess + 1;
        lives = 9;
        myGuesses = "";
    }
}



            




    




}