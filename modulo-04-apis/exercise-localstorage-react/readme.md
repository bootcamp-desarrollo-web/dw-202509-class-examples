## Práctica con localStorage

Este ejemplo muestra como podemos usar localStorage para guardar los datos de un formulario.  
La idea es que aunque el usuario cierre el navegador, los datos que se han introducido en el formulario 
no se puierdan, y al iniciar el navegador de nuevo el usuario vuelva a verlos.

## ¡Pruébalo tú!

Primero inicia el servidor (`npm run dev`) para ver que realmente los datos introducidos en el formulario no se pierden.  

¿Todos?

Pues no...  
El campo *mensaje* no participa en esta lógica, ni se recoge para poder enviarlo al servidor.  
Intenta aplicar los cambios necesarios para que este campo funcione como los dos anteriores.