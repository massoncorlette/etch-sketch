// Giving the function argument a default value 16 if there is no provided argument
function gridFlex (size = 16) {
  const gridDiv = document.querySelector('.screen')
  // using nested loop, on every instance of row made, inner loop appends 16 cells
  for (let i = 0; i < size; i++) {
    const row = document.createElement('div');
    row.classList.add('gridRows');
    gridDiv.appendChild(row);

    for (let j = 0; j < size; j++) {
      const cell = document.createElement('div');
      cell.classList.add('gridCells');
      row.appendChild(cell);
    }
  }
}
// function call to display the default 16x16 grid
gridFlex();

function gridResize(){
  const gridDiv = document.querySelector('.screen')
  let input = prompt("Enter Size Dimensions:");
  
  while (input > 100 || input < 2) {
    input = prompt("Allowed dimensions between 2x2-100x100:")
  }
  // getting rid of whole grid by setting the gridDiv innerHTML to blank ''
  gridDiv.innerHTML = '';
  gridFlex(input);
}

function gridReset() {
  const allCells = document.querySelectorAll('.screen .gridRows .gridCells');

  for (let i = 0; i < allCells.length; i++) {
    allCells[i].style.background = 'whitesmoke';
  }
}

function fillGrid() {
  const allCells = document.querySelectorAll('.screen .gridRows .gridCells');
  //for every index instance, add an event listener 'mouseenter' (e) referencing the event itself
  for (let i = 0; i < allCells.length; i++) {
    allCells[i].addEventListener('mouseenter', (e) => {
      e.target.style.background = 'black';
    });
  }
}

const size_btn = document.querySelector('#size')
size_btn.addEventListener('click', gridResize);

const reset_btn = document.querySelector('#reset')
reset_btn.addEventListener('click', gridReset);

const screen = document.querySelector('.screen')
screen.addEventListener('mouseenter', fillGrid)

