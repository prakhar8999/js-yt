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
