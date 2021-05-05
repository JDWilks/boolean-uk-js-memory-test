// code that sort of works - enter in this function

function askForGuesses(howmanyGuesses) {
 
    let correctNumberOfGuesses = 0

    for (i =0; i<4; i++){
    
        let answer = Number(prompt("Please enter your guess"))
    
        if (answer === arrayOfNumbers[0] || answer === arrayOfNumbers[1] || answer === arrayOfNumbers[2] || answer === arrayOfNumbers[3]){
        alert("you are correct")
        } else {
            alert("You didn't guess correct")
        }
    }
}

// then run this function

function getRandomNumber(max) {
    
    arrayOfNumbers = []

    for(i = 0; i < 4; i++){

    let randomNumber = Math.floor(Math.random() * max)
    
    arrayOfNumbers.push(randomNumber)
}

alert("Remember these 4 numbers please. \nClick OK when you are ready to play. \n" + arrayOfNumbers)
arrayOfGuessedNumbers = []
setTimeout(askForGuesses(4), 3000);
}


// the below is my brain trying to figure it out step by step...



// - Show the user 4 random numbers between 1 and 100

// generate 4 random numbers between 1 and 100

// the below generates 1 random number between 1 and 100 and puts in arrayOfNumber ✅

arrayOfNumbers = []

function getRandomNumber(max) {

        let randomNumber = Math.floor(Math.random() * max)
        
        arrayOfNumbers.push(randomNumber)
    }

// need to use a for loop to make 4 random numbers ✅
// create a prompt that shows the users 4 numbers ✅


function getRandomNumber(max) {
    
    arrayOfNumbers = []

    for(i = 0; i < 4; i++){

    let randomNumber = Math.floor(Math.random() * max)
    
    arrayOfNumbers.push(randomNumber)
}

alert("Remember these 4 numbers please. \nClick OK when you are ready to play. \n" + arrayOfNumbers)

}


// - After 15 seconds, ask them to enter each number in order ✅ although Rico says ❌ due to putting in 4 numbers in the same prompt

function getRandomNumber(max) {
    
    arrayOfNumbers = []

    for(i = 0; i < 4; i++){

    let randomNumber = Math.floor(Math.random() * max)
    
    arrayOfNumbers.push(randomNumber)
}

alert("Remember these 4 numbers please. \nClick OK when you are ready to play. \n" + arrayOfNumbers)
setTimeout(function(){prompt("Enter the 4 numbers you previously saw on the screen..." ); }, 5000);

}

// - Let them know how many they got right!
// - i need to store the numbers entered in the prompt to an array to compare - Rico says no ❌
// - the guessed numbers are currently stored in a array as a string ❌

function getRandomNumber(max) {
    
    arrayOfNumbers = []

    for(i = 0; i < 4; i++){

    let randomNumber = Math.floor(Math.random() * max)
    
    arrayOfNumbers.push(randomNumber)
}

alert("Remember these 4 numbers please. \nClick OK when you are ready to play. \n" + arrayOfNumbers)
arrayOfGuessedNumbers = []
setTimeout(function(){let myNumbers = prompt("Enter the 4 numbers you previously saw on the screen..." ); arrayOfGuessedNumbers.push(myNumbers)}, 5000);

}

//// messing around with above code that works that maybe wont after i've added stuff

// the below code takes in the fuction i've written called askedForGuesses although the settimeout doesn't work

function getRandomNumber(max) {
    
    arrayOfNumbers = []

    for(i = 0; i < 4; i++){

    let randomNumber = Math.floor(Math.random() * max)
    
    arrayOfNumbers.push(randomNumber)
}

alert("Remember these 4 numbers please. \nClick OK when you are ready to play. \n" + arrayOfNumbers)
arrayOfGuessedNumbers = []
setTimeout(askForGuesses(4), 3000);
}

//// rico said to use 4 individual prompts for the user guesses


function askForGuesses(howmanyGuesses) {
 
    let correctNumberOfGuesses = 0

    for (i =0; i<4; i++){
    
        let answer = Number(prompt("Please enter your guess"))
    
        if (answer === arrayOfNumbers[0] || answer === arrayOfNumbers[1] || answer === arrayOfNumbers[2] || answer === arrayOfNumbers[3]){
        alert("you are correct")
        } else {
            alert("You didn't guess correct")
        }
    }
}


  // Step 3: Count the correctNumberOfGuesses
// i'm not sure how to do this
// I think i need to use Map or filter but it took so long to get to this
// point i havn't had time to do this






// Challenge 1
// When asking the user for the numbers, add ordinality to each number you ask. i.e.:
// - Enter the 1st number
// - Enter the 2nd number
// Etc...

// Challenge 2
// Turn your whole program into a function that will allow you to change the number of numbers 
// displayed and asked for by just entering the desired number as an argument when calling the function

