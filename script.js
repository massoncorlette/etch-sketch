
// Giving the function argument a default value 16 if there is no provided argument
function gridFlex (size = 16) {
  const gridDiv = document.querySelector('.screen')
  // using nested loop, on every instance of row made, inner loop appends 16 cells
  for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('grid');
    gridDiv.appendChild(row);

    for (let j = 0; j < 16; j++) {
      const cell = document.createElement('div');
      cell.classList.add('.gridRows');
      row.appendChild(cell);
    }
  }

}

gridFlex();