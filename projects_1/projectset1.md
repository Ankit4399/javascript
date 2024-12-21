## PROJECTS RELATED TO DOM
## click here
https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html

## project 1 => colorchanger
```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    if (e.target.id === 'grey') {
      body.style.backgroundColor = 'grey';
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = 'white';
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = 'blue';
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = 'yellow';
    }
  });
});
```
## project 2 => bmi claculator
```javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // stop the current action of form like get,postin url.

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height <= 0 || isNaN(height) || height == '') {
    result.innerHTML = 'please enter valid input';
  } else if (weight <= 0 || isNaN(weight) || weight == '') {
    result.innerHTML = 'please enter valid input';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    result.innerHTML = `<span>${bmi}</span>`;
  }
});

```
## project 3 => local time
```javascript
const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
// setinterval function is to run time automatically at interval of 1 sec
// 1000 is in ms
```
## project 4 => guess the number
```javascript

```