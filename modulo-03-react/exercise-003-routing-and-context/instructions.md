# React
## Ejercicio práctico - routing + context
En este ejercicio tendrás que implementar en React la parte del dashboard de una aplicación web.  
El HTML y CSS ya están dados.

1. Primero de todo tienes que desplegar una app de React, y asegurarte que funciona correctamente

2. A continuación incorpora el CSS y el HTML de dashboard en App.jsx, asegurándote que se ve correctamente en el navegador.

3. Crea componentes para las siguientes páginas:
   - Home
   - Dashboard
   - Profile
   - User  
  Incorpora en cada componente el código (de momento estático) relevante.

4. Instala la librería de enrutamiento, e implementa el siguiente mapeo de rutas, relacionándolas con los componentes de las páginas releantes:

   - /dashboard  
   Ruta padre que renderiza el componente Dashboard con la estructura general.

   - /dashboard/profile  
   Ruta hija estática que muestra la página de perfil de usuario (Profile component).

   - /dashboard/user/:id  
   Ruta hija dinámica que muestra detalles del usuario según el parámetro dinámico id (UserDetails component).

5. Crea en User.jsx una variable `users` con los datos de los usuarios (un array de objetos con id y nombre):

6. Extrae el usuario relevante usando el parámetro de la ruta dinmamica `/dashboard/user/:id` y muéstralo en el DOM

7. Crea en App.jsx una variable `loggedUser` con los datos id y nombre del usuario logeado.

8. Pasa `loggedUser` usando el contexto y muéstralo en la página `profile`
  
---
**¡Ya está!**  
Si has llegado hasta aquí, tienes los conocimientos suficientes para usar enrutamiento y contexto en aplicaciones React.  
💫 **¡ Enhorabuena !** 💫 
