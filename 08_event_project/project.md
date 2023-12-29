# Projects related to EVENTS in JAVASCRIPT

## project link
[Click Here](https://stackblitz.com/)

# Solution Code
## project 1

```javascript

// const randomColor = function () {
//   const hex = '0123456789ABCDEF';
//   let color = '#';
//   for (let i = 0; i < 6; i++) {
//     color = color + hex[Math.floor(Math.random() * 16)];
//   }
//   return color;
// };
function randomColor() {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color = color + hex[Math.floor(Math.random() * 16)];
  }
  return color;
}
let intervalHoldvariable = null;
const startColorChange = function () {
  if (intervalHoldvariable == null) {
    intervalHoldvariable = setInterval(colorChange, 1000);
  }
  //intervalHoldvariable = setInterval(colorChange, 1000);
  function colorChange() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopColorChange = function () {
  clearInterval(intervalHoldvariable);
  intervalHoldvariable = null;
};

document.querySelector('#start').addEventListener('click', startColorChange);
document.querySelector('#stop').addEventListener('click', stopColorChange);

```

## project 2

```javascript

console.log('Project 5');

const insert = document.getElementById('insert');

window.addEventListener('keypress', (e) => {
  insert.innerHTML = `
  <div class="keyPressed">
  <table>
  <tr>
    <th>Key</th>
    <th>Key Code</th>
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
