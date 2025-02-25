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



```