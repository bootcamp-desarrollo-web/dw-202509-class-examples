document.getElementById('my-first-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Metodo 1 - acceder al elemento por su id
  const nameInput = document.getElementById('name-input').value.trim();
  
  // Metodo 2 - acceder al input a través de 
  const surnameInput = e.target.surnameInput.value.trim();

  // Extraer el nodo donde va a aparecer el resultado
  const resultBox = document.getElementById('result-box');

  // Elegir entre puro texto / html
  // resultado.textContent = `Hola, ${nombre} ${apellido}`;
  resultBox.innerHTML = `Hola, <b>${nameInput} ${surnameInput}</b>`;

  // Mostrar caja de resultado
  resultBox.style.display = 'block';
});

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM completamente cargado y parseado");
  const nameInput = document.getElementById('name-input').focus();
});
