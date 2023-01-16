const btn = document.querySelector('.random__click');
const bg = document.querySelector('.random');
const enter = document.querySelector('.random__enter-value');
const arrayColors = ['black', 'silver', 'gray', 'white', 'maroon', 'red', 'purple', 'fuchsia', 'green', 'lime', 'olive', 'yellow', 'navy', 'blue', 'teal', 'aqua'];


// Генерация рандомных числовых значений
function randomValue (min, max) {
  return Math.round(Math.random() * (max - min) + min);
}


// Генерация цвета типа #hex
function hexColor () {
  return `# ${(Math.random().toString(16)).substring(2,8).toUpperCase()}`;
}


// Генерация цвета типа RGB
function rgbColor () {
  return `rgb( ${randomValue (0, 255)}, ${randomValue (0, 255)}, ${randomValue (0, 255)} )`;
}


// Генерация цвета типа текст
function primaryColor() {
  return randomValue (0, arrayColors.length);
}


function randomColor () {

  // Вызов с аргументами внутри переменной
  const index = randomValue(1,3);

  // Определяемый цвет
  let color;

  if ( index == 1) {
    color = hexColor();
  }
  else if (index == 2) {
    color = rgbColor();
  }
  else {
    color = arrayColors[primaryColor()];
  }

  bg.style = `background-color:  ${color}`;
  enter.innerHTML = color;

}


btn.addEventListener("click", randomColor);