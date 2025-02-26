# Projects related to DOM

## Project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## project 1

``` javascript
const buttons = document.querySelectorAll('.button')
// console.log(buttons);
const body = document.querySelector("body")

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    }
    else if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
    else if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
    else if(e.target.id === 'black'){
      body.style.backgroundColor = e.target.id
    }
  })
});

```

# project 2
``` javascript

// <!-- form will be submitted in two ways either by get or by post -->
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `please give a valid height ${height}`;
  }
  // old technique = height != NaN
  // new technique = isNaN(height)
  // result.innerHTML = `${height}`;

  else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `please give a valid weight ${weight}`
  }

  else {
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    // show the result 
    result.innerHTML = `<span> ${bmi}</span>`
    
  }
});



```


# project 3
``` javascript
const clock = document.getElementById('clock')


// setInterval control the events , tells ki kitne interval mai event ko chlana hai
setInterval(function(){
  let date = new Date()
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString()
},1000);


```

# project 4
```javascript

let randomNumber = parseInt(Math.random()*100+1)

const submit = document.querySelector('#subt')
const userinp = document.querySelector('#guessField')
const guessslot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const loworHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true;

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess = parseInt(userinp.value)
    console.log(guess);
    validateguess(guess)
  })
}
function validateguess(guess){
// 
if(isNaN(guess)){
  alert('please enter a valid number')
}else if(guess<1){
  alert('please enter a number more than 1')
}else if(guess>100){
  alert('please enter a number less than 100')
}else{
  prevGuess.push(guess)
  if(numGuess === 11){
    displayGuess(guess)
    displaymess(`Game Over,Random number was ${randomNumber}`)
    endgame()
  }
  else{
   displayGuess(guess)
   checkGuess(guess)
  }

}
}
function checkGuess(guess){
  // 
  if(guess === randomNumber){
    displaymess('You guessed it right')
    endGame()
  }else if(guess< randomNumber){
    displaymess('Number is Too low')
  }else if(guess>randomNumber){
    displaymess('Number is Too high')
  }
}
function displayGuess(guess){
userinp.value = ''
guessslot.innerHTML += `${guess}, `
numGuess++
remaining.innerHTML = `${11-numGuess}`
}
function displaymess(message){
  // 
loworHi.innerHTML = `<h2>${message}</h2>`
}


function endgame(){
userinp.value = ''
userinp.setAttribute('disabled','')
p.classList.add('button')
p.innerHTML = '<h2 id = "newGame">Start new Game</h2>'
startOver.appendChild(p)
playGame = false
newGame()
}
function newGame(){
  const newGamebutton = document.querySelector('#newGame')
  newGamebutton.addEventListener('click',function(e){
    randomNumber = parseInt(Math.random()*100+1)
    prevGuess = []
    numGuess = 1
    guessslot.innerHTML = ''
    remaining.innerHTML = `${11-numGuess}`
    userinp.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
  })
}


```

# project 5
``` javascript 
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});


```

# project 6
``` javascript 
//generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);


```