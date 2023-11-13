# Projects related to DOM

## project link
[Click Here](https://stackblitz.com/)

# Solution Code
## project 1

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  //console.log(button);
  button.addEventListener('click', function (e) {
    //console.log(e);
    //console.log(e.target);
    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        console.log(`BG Color Updated To ${e.target.id}`);
        break;
      case 'white':
        body.style.backgroundColor = e.target.id;
        console.log(`BG Color Updated To ${e.target.id}`);
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        console.log(`BG Color Updated To ${e.target.id}`);
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        console.log(`BG Color Updated To ${e.target.id}`);
        break;
      default:
        console.log('Invalid Choice');
    }
  });
});

```
## project 2

```javascript 

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  console.log(`Height is ${height}`);
  console.log(`Weight is ${weight}`);

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = 'Please give a valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = 'Please give a valid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
  }
});


```
