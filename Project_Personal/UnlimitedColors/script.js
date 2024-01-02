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