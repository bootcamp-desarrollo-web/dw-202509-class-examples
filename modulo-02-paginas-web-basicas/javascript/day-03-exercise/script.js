// Este mensaje saltaría al cargar la página (descomenta para verlo funcionar)
// alert('Hola');

function clickBox(boxId) {
    let boxEl = document.getElementById(boxId);

    // Importante!! Asegurar que el elemento existe.
    // En caso contrario, imprimimos un error y salimos de la función
    if (!boxEl) {
        console.error('Could not find element with id ' + boxId);
        return;
    }

    // La función toggle alterna la presencia de la clase en el elemento
    boxEl.classList.toggle('clickedBoxBg');   
}