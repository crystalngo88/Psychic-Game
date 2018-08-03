var hasSpaceBeenPressed = false;
    
      var array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      
      var wins = 0;
      var losses = 0;
      var guessesRemaining = 10;
      var guessedLetters = [];
      var computerLetter = array[Math.floor(Math.random()* array.length)];

//WRITE SOMETHING SO COMPUTER DOES NOT CHOOSE NEW LETTER UNTIL ALL 10 GUESSES ARE GONE
//Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)

//When the player wins, increase the Wins counter and start the game over again (without refreshing the page).

//When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).

    document.onkeyup = function(event) {



        var spaceBar = " ";
        var userGuess = event.key;
        if (userGuess === spaceBar){
            hasSpaceBeenPressed = true;   
        }

        if (hasSpaceBeenPressed === true){
        console.log('running onkeyup')
        var userGuessHTML= document.getElementById("user-text");
        userGuessHTML.textContent = userGuess.toLowerCase(); 
        
        
        console.log('computerLetter:', computerLetter);
        console.log('userGuess:', userGuess);



        if (userGuess === computerLetter) { 
            wins++;
            updateScore();
            alert("Correct!");
            computerLetter = array[Math.floor(Math.random()* array.length)];
            guessesRemaining = 10;
            guessedLetters = [];
        }
        else if (userGuess !== spaceBar && array.includes(userGuess)){
            var checked = checkLetter(userGuess);
            if(checked){
                alert("You picked this already.")
            }
            else {
                console.log('right before pushing, guessedLetters is', guessedLetters, 'and userGuess:', userGuess);
                guessedLetters.push(userGuess);
                console.log('right after pushing, guessedLetters is', guessedLetters, 'and userGuess:', userGuess);
                guessesRemaining--;
                updateScore();
            }
        }

        if(guessesRemaining === 0) {
            losses++;
            guessesRemaining = 10;
            guessedLetters = [];
            updateScore();
            alert("Game Over!");

        }
        
            console.log('wins:', wins);
            console.log('losses:', losses);
            console.log('guesses remaining:', guessesRemaining);

        }   
        }

    function updateScore (){
        document.querySelector("#Wins").innerHTML = wins;
        document.querySelector("#Losses").innerHTML = losses;
        document.querySelector("#guessesRemaining").innerHTML = guessesRemaining;
        document.querySelector("#guessedLetters").innerHTML = guessedLetters;
    }

    function checkLetter(letter){
        var output = false;
        for (var i = 0; i < guessedLetters.length; i++) {
            if (letter === guessedLetters[i]){
                // alert("You guessed that!")
                return true;
            }
        }

        return output;
    }
