# Tarjetas Responsivas con Bootstrap Grid

**Objetivo:**  
Crear una página con un grid de tarjetas que cambie su distribución según el tamaño del dispositivo.

En móviles (xs, sm): una tarjeta por fila.  
> [ Tarjeta 1 ]  
[ Tarjeta 2 ]  
[ Tarjeta 3 ]  
[ Tarjeta 4 ]

En tablets (md): dos tarjetas por fila.
> [ Tarjeta 1 ]  [ Tarjeta 2 ]  
[ Tarjeta 3 ] [ Tarjeta 4 ]

En escritorio (lg en adelante): tres tarjetas por fila, la cuarta en una fila (ocupando toda la anchura)
> [ Tarjeta 1 ]  [ Tarjeta 2 ] [ Tarjeta 3 ]  
 [ ------------ Tarjeta 4 -------------]

## Avanzado:
Haz que la tarjeta 4 aparezca sólo en escritorio.  
Si quieres, para que quede más limpio puedes estirar la tarjeta 3 en modo md:
> [ Tarjeta 1 ]  [ Tarjeta 2 ]  
[ ------ Tarjeta 3 ----- ]

## Código de soporte
Para dar estilos a las columnas:
```
<style>
  .row [class^=col] {
    padding-top: .75rem;
    padding-bottom: .75rem;
    background-color: <COLOR1>;
    border: 1px solid <COLOR2>;
    color: <COLOR3>;
  }
</style>
```
Para ver qué dispositivo estamos viendo:
```
<div class="container text-center mt-3 mb-3">
  <div class="row">
    <div class="col-12 d-block d-sm-none">XS</div>
    <div class="col-12 d-none d-sm-block d-md-none">SM</div>
    <div class="col-12 d-none d-md-block d-lg-none">MD</div>
    <div class="col-12 d-none d-lg-block d-xl-none">LG</div>
    <div class="col-12 d-none d-xl-block d-xxl-none">XL</div>
    <div class="col-12 d-none d-xxl-block">XXL</div>
  </div>
</div>
```
