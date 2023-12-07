const box1 = document.getElementById('box-1');
const box2 = document.getElementById('box-2');
const button1 = document.getElementById('button-1');
const button2 = document.getElementById('button-2');

let changeColorOnClick = () => {
    
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    box1.style.backgroundColor = randomColor;
  }

button1.addEventListener('click', changeColorOnClick);

let alternateColorOnClick = () => {
    const num = 5;
    if (box2.style.backgroundColor == 'white') {
        box2.style.backgroundColor = 'black';
    } else {
        box2.style.backgroundColor = 'white';
    }

}

button2.addEventListener('click', alternateColorOnClick);