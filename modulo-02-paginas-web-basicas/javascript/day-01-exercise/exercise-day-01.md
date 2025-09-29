# Ejercicio día 01: javascript

Objetivos de este ejercicio:
1. Practicar la estructura básica de una página HTML, organizando correctamente sus elementos.
2. Aplicar estilos visuales mediante CSS, mejorando la apariencia y presentación de la página.
3. Explorar la interacción entre JavaScript y el DOM, manipulando la visualiazión de distintos elementos mediante el uso de la función `document.getElementById`.

### Pasos del ejercicio:
1. Crea un html que tenga un elemento `<button>` y un elemento `<div>`:  
1.1 El texto del botón es "Cambia color"  
1.2 El texto del div es "Este es un div"

2. Añade un css para aplicar estilos:  
2.1 Font family + tamaño de texto (para todo el documento)  
2.2 color de fondo del div (verde) + borde

3. Integra un elemento javascript al final del fichero con una función `changeColor()`.  
Esta función tiene que extraer el div usando la función `document.getElementById` (para ello tendrás que añadir una id al div).  
Cuando se clica el botón, esta función se tiene que llamar (usando el atributo `<button onclick="changeColor()"`)


4. Añade una clase css con un color diferente de fondo de lo que has definido en 2.2 (azul)

5. La función `changeColor()` cambia el color del div al segundo color (azul)


### Avanzado
1. Añade definiciones css para embellecer el botón

2. Al clicar el botón el color del div vuelve al original (se alterna verde -> azul -> verde -> ...).
