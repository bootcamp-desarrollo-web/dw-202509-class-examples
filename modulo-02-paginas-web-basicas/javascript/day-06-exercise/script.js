let rowsCounter = 1;

document.getElementById('my-btn').addEventListener('click', () => {
    // Crear un nuevo nodo tipo <tr>
    const newTr = document.createElement('tr');

    // Crear un nuevo nodo tipo <td>
    let tdLeft = document.createElement('td');
    // Añadir HTML a este nodo
    tdLeft.innerText = rowsCounter;
    rowsCounter++;
    // Asignar este nodo como hijo del <tr>
    newTr.appendChild(tdLeft);

    // Repito con otro nodo <td>
    const tdRight = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'delete';

    // deleteBtn.addEventListener('click', () => {
    //     console.log('Borrar!!');
    // });
    deleteBtn.addEventListener('click', deleteRow);

    tdRight.appendChild(deleteBtn);
    newTr.appendChild(tdRight);

    // Para añadir la fila a la tabla, primero tengo que extraerla
    const tableEl = document.getElementById('my-table');
    // y luego asignar el nuevo nodo <tr> como hijo
    tableEl.appendChild(newTr);
});

// Esta funcion recibe un evento evocado por el botón "borrar" y borra la fila de este botón
function deleteRow(event) {
    // event.target is the button
    const td = event.target.parentElement; // El <td> que tiene el botón
    const tr = td.parentElement;           // El <tr> que tiene el td
    tr.remove();                           // Borrar la fila
}