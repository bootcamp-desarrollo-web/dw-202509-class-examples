# Ejercicio - prácticas de flexbox

En este ejercicio vas a implementar un html responsivo sencillo.

**Objetivo:**  
Crear una pequeña galería de cajas que se organizan con Flexbox en diferentes disposiciones.

Puedes usar esta página como referencia visual:  
https://css-tricks.com/snippets/css/a-guide-to-flexbox


1. Crea un fichero html (`index.html`)
2. Dentro de este fichero, tiene que haber un `div` con class *galeria*, y dentro de este `div` 12 elementos `div` con class *item* y un número.
3. Crea un fichero css, aplica font *sans-serif* al body y da estilos básicos a los elementos galeria e item (border, padding, text-align, background-color)
4. Convierte la galeria a un flexbox. Los elementos tienen que aparecer en una línea, si su anchura supera la anchura de la pantalla tienen que pasar a nuevas líneas.
5. Aplica diferentes valores de `justify-content` para ver cual más te gusta (`justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly`)
6. Haz que un par de cajas aparezcan en orden diferente usando order. Usa el pseudo-elemento `.item:nth-child(n)` para elegir el elemento desde el css
