// Description
// Test the user's memory with this simple little game. This will also put your skills up to the test!

// Instructions
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


// - After 15 seconds, ask them to enter each number in order ✅



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
// - i need to store the numbers entered in the prompt to an array to compare


// - i need to compare the arrayOfNumbers with the 


// Challenge 1
// When asking the user for the numbers, add ordinality to each number you ask. i.e.:
// - Enter the 1st number
// - Enter the 2nd number
// Etc...

// Challenge 2
// Turn your whole program into a function that will allow you to change the number of numbers 
// displayed and asked for by just entering the desired number as an argument when calling the function





//// messing around with code that works

function getRandomNumber(max) {
    
    arrayOfNumbers = []

    for(i = 0; i < 4; i++){

    let randomNumber = Math.floor(Math.random() * max)
    
    arrayOfNumbers.push(randomNumber)
}

alert("Remember these 4 numbers please. \nClick OK when you are ready to play. \n" + arrayOfNumbers)
setTimeout(function(){ let myNumbers = prompt("Enter the 4 numbers you previously saw on the screen..." ); }, 5000);

}



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