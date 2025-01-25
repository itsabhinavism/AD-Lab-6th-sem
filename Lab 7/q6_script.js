function generateTable() {
    const rows = parseInt(document.getElementById('rowsInput').value, 10);
    const columns = parseInt(document.getElementById('columnsInput').value, 10);

    if (isNaN(rows) || isNaN(columns) || rows <= 0 || columns <= 0) {
        alert('Please enter valid positive numbers for rows and columns.');
        return;
    }

    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = '';

    const table = document.createElement('table');

    for (let i = 0; i < rows; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < columns; j++) {
            const cell = document.createElement('td');
            cell.textContent = `Row ${i + 1} Col ${j + 1}`;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    tableContainer.appendChild(table);
}
