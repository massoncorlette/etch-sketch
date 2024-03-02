// Giving the function argument a default value 16 if there is no provided argument
function gridFlex (size = 16) {
  const gridDiv = document.querySelector('.screen')
  // using nested loop, on every instance of row made, inner loop appends 16 cells
  for (let i = 0; i < size; i++) {
    const row = document.createElement('div');
    row.classList.add('grid');
    gridDiv.appendChild(row);

    for (let j = 0; j < size; j++) {
      const cell = document.createElement('div');
      cell.classList.add('.gridRows');
      row.appendChild(cell);
    }
  }
}
gridFlex();

function gridResize(){
  const gridDiv = document.querySelector('.screen')
  let input = prompt("Enter Size Dimensions:");
  // getting rid of whole grid by setting the nodeList innerHTML to blank ''
  gridDiv.innerHTML = '';
  gridFlex(input);
}

const size_btn = document.querySelector('#size')

size_btn.addEventListener('click', gridResize);


//.addEventListener('dragover', function(event))
