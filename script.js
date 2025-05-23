function createTable() {
  const table = document.getElementById("myTable");

  // Clear any existing table content
  table.innerHTML = "";

  // Prompt for number of rows and columns
  const rn = prompt("Input number of rows");
  const cn = prompt("Input number of columns");

  // Validate input
  const numRows = parseInt(rn);
  const numCols = parseInt(cn);

  if (isNaN(numRows) || isNaN(numCols)) {
    return; // Do nothing on invalid input
  }

  if (numRows <= 0 || numCols <= 0) {
    alert("Number of rows and columns must be positive integers.");
    return;
  }

  // Generate the table
  for (let i = 0; i < numRows; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < numCols; j++) {
      const cell = document.createElement("td");
      cell.textContent = `Row-${i} Column-${j}`;
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
}
