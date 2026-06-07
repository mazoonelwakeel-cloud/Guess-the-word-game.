
const categories = {
fruits:['apple','mango','guava','melon','lemon','peach','berry','grape'],
food:['pizza','paste','bread','donut','candy','steak','sushi','chips'],
animals:['tiger','zebra','horse','snake','shark','whale','eagle','mouse'],
objects:['chair','table','clock','phone','brush','knife','spoon','couch'],
cities:['cairo','paris','tokyo','miami','delhi','dubai','milan','turin'],
countries:['egypt','china','japan','spain','ghana','india','italy','syria']
};

let secretWord = "";
let attempts = 0;

function startGame(){
    const category = document.getElementById("category").value;
    const words = categories[category];

    secretWord = words[Math.floor(Math.random()*words.length)];
    attempts = 0;

    document.getElementById("categoryText").textContent =
        "Category: " + category;

    document.getElementById("output").textContent = "";
    document.getElementById("result").textContent = "";
    document.getElementById("guess").value = "";
    document.getElementById("playAgain").style.display = "none";
}

function makeGuess(){
    if(secretWord === ""){
        startGame();
    }

    const guess = document.getElementById("guess").value.toLowerCase();

    if(guess.length !== 5){
        alert("Please enter a 5-letter word.");
        return;
    }

    attempts++;

    let text = "";

    for(let i=0;i<secretWord.length;i++){

        if(secretWord[i] === guess[i]){
            text += guess[i] + " is correct and is in correct position\n";
        }

        else if(secretWord.includes(guess[i])){
            text += guess[i] + " is correct but not in correct position\n";
        }

        else{
            text += guess[i] + " is not correct\n";
        }
    }

    document.getElementById("output").textContent = text;

    if(guess === secretWord){
        document.getElementById("result").textContent =
        "Your guess is correct! Congratulations! You attempted for " + attempts;

        document.getElementById("playAgain").style.display = "inline-block";
    }
}

document.getElementById("guess").addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        makeGuess();
    }
});
