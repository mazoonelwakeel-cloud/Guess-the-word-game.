const words={
fruits:['apple','mango','guava','melon','lemon','peach','berry','grape'],
food:['pizza','paste','bread','donut','candy','steak','sushi','chips'],
animals:['tiger','zebra','horse','snake','shark','whale','eagle','mouse'],
objects:['chair','table','clock','phone','brush','knife','spoon','couch'],
cities:['cairo','paris','tokyo','miami','delhi','dubai','milan','turin'],
countries:['egypt','china','japan','spain','ghana','india','italy','syria']
};

let secretWord='';
let attempts=0;

function startGame(){
 const category=document.getElementById('category').value;
 const list=words[category];
 secretWord=list[Math.floor(Math.random()*list.length)];
 attempts=0;
 document.getElementById('currentCategory').textContent='Category: '+category;
 document.getElementById('output').textContent='';
}

function makeGuess(){
 if(!secretWord){startGame();}
 const guess=document.getElementById('guess').value.toLowerCase();
 attempts++;
 let result='';

 for(let i=0;i<secretWord.length;i++){
   if(guess[i]===secretWord[i]) result += guess[i]+' correct position\n';
   else if(secretWord.includes(guess[i])) result += guess[i]+' wrong position\n';
   else result += guess[i]+' not correct\n';
 }

 if(guess===secretWord){
   result += '\nCongratulations! Attempts: '+attempts;
 }

 document.getElementById('output').textContent=result;
}
