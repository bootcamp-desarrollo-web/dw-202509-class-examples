document.getElementById('my-btn').addEventListener('click', () => {
    // Crear un nuevo nodo tipo <tr>
    const newTr = document.createElement('tr');

    // Crear un nuevo nodo tipo <td>
    let tdLeft = document.createElement('td');
    // Añadir HTML a este nodo
    tdLeft.innerHTML = 'AA';
    // Asignar este nodo como hijo del <tr>
    newTr.appendChild(tdLeft);

    // Repito con otro nodo <td>
    const tdRight = document.createElement('td');
    tdRight.innerHTML = 'BB';
    newTr.appendChild(tdRight);

    // Para añadir la fila a la tabla, primero tengo que extraerla
    const tableEl = document.getElementById('my-table');
    // y luego asignar el nuevo nodo <tr> como hijo
    tableEl.appendChild(newTr);
});