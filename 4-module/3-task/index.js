function highlight(table) {
  let rows = table.tBodies[0].rows;
  
  for(let row of rows) {

    let isAvailable = row.cells[3].dataset.available === 'true';
    let hasDataAttr = row.cells[3].hasAttribute('data-available');
    let isMale =      row.cells[2].textContent === 'm';
    let age =         row.cells[1].textContent;
    
    if (hasDataAttr) {
      row.classList.add( isAvailable ? 'available' : 'unavailable' );
    }
    if (!hasDataAttr) {
      row.hidden = true;
    }
    if (true) {
      row.classList.add( isMale ? 'male' : 'female' );
    }
    if (age < 18) {
      row.style.textDecoration = 'line-through';
    }
  }
}
