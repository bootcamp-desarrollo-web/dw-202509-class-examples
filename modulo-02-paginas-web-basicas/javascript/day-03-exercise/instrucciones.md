# Practica de manipulación del DOM
El objetivo de este ejercicio es practicar:
1. Creación de html con elementos div
2. Maquetación del html con css externo con flexbox  
(puedes mirar como referencia https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

#### Pasos:
1. Crea un HTML que tenga 4 cuadrados grandes (divs entre 100px-200px) con números dentro. Los números tienes que estar centralizados y en tamaño grande (referencia: ***html-01.pdf**)

2. Usa un css con flexbox para maquetar el html. Las cajas tienen que estar centralizadas, y con cierta distancia (por ejemplo 100px) desde el borde superior de la pantalla.

3. Usa el css para que cuando el ratón pase por encima de una caja que su color de fondo cambie (cuando el ratón sale de la caja vuelve a ser blanca) (referencia: ***html-02.pdf**)  
Extra: cuando el ratón entra a la zona de la caja, haz que el cursor cambie a una mano (como que fuera un enlace)

4. Integra un fichero js externo que al cargar la página salte un alert con el texto "Hola"

5. Añade el código necesario (html y js) para que el alert aparezca cuando se clica alguna de las cajas.

6. Modifica el código para que cuando se clique una caja, que en el alert aparezca el número que está dentro de la caja

7. Añade una clase con otro color de fondo, y una id para cada uno de los 4 divs.  
Modifica la función javascript para que cuando se clique una caja, en vez de que salte un alert, que la caja tenga la nueva clase (y por lo tanto tenga otro color de fondo). Cuando se vuelva a clicar esta caja, su color tiene que volver al blanco inicial.