# Practica de manipulación del DOM
#### (a) Manipulación de los elementos div:
1. Obtener el elemento del DOM con la id **first-div**
2. Averigua qué clases tiene este elemento
3. Elimina la clase **blue-bg** de este elemento
4. Añade la clase **red-bg** al primer div
5. Devuelve la clase **blue-bg** al primer elemento.   
Usa `classList` para observar qué clases tien este elemento, explica porque pasa lo que pasa.
6. Usa `toggle` para eliminar la clase **red-bg** del primer elemento

7. Obten del DOM el elemento comn la id **special-div**
8. Muestra el HTML de este elemento usando `innerHTML`, y el texto con `innerText`.

#### (b) Manipulación de los elementos div:
1. Obten todas las filas con la clase **odd-row**
2. Muestra el HTML del segundo elemento obtenido
3. Accede a los hijos de la segunda fila usando el atributo `children`
4. Muestra el texto interno de la primera celda (`td`) de la segunda fila (`tr`)
5. Haz la modificación necesaria para que el nombre Carlos aparezca en negrita (`<b>`)
6. Repite el paso anterior para la primera celda de la tercera fila que has obtenido, **sin saber el contenido actual** de esta celda

### Solución:
#### (a) divs:
```
let firstDivEl = document.getElementById('first-div');
firstDivEl.classList;
firstDivEl.classList.remove('blue-bg');
firstDivEl.classList.add('red-bg');
firstDivEl.classList.toggle('red-bg');

let specialDivEl = document.getElementById('special-div');
specialDivEl.innerHTML
specialDivEl.innerText
```

#### (b) tabla:
```
let oddRowEls = document.getElementsByClassName('odd-row');
oddRowEls[1].innerHTML;
oddRowEls[1].children;
oddRowEls[1].children[0].innerText
oddRowEls[1].children[0].innerHTML = '<b>Carlos</b>'
oddRowEls[2].children[0].innerHTML = '<b>' + oddRowEls[2].children[0].innerText + '</b>'
```