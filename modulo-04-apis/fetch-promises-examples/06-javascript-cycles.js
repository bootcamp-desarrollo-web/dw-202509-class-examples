/**
 * JavaScript's event loop and task queue
 * (el bucle de eventos y la cola de tareas de JavaScript)
 * 
 * Instrucciones:
 * 1. Ejecuta este código (mejor copiarlo a un snippet y ejecutarlo en el navegador, para que la linea '* In bucle' se imprima
 *    una vez), observa el resultado y explica porque el mensaje 'In setTimeout callback' se imprime donde se imprime.
 * 2. Cambia el valor de LOOP_COUNT de 10 a 10000, ejecuta el código y explica qué ocurre
 * 
 * JavaScript es monohilo (single-threaded), lo que significa que ejecuta una cosa a la vez,
 * ya sea código o eventos.
 * El bucle for es sincrónico, por lo que bloquea el hilo hasta que termina.
 * Por otro lado, setTimeout es una función asincrónica, que se ejecuta sólo cuando la pila de llamadas
 * se vacía (y que haya pasado el tiempo indicado).
 * Por esta razón, aunque el retardo sea de 1ms, la función no se ejecutará hasta que termine el bucle.
 * Este comportamiento es bastante parecido al de las promesas.
 * 
 * Para más información:
 * https://medium.com/@ignatovich.dm/the-javascript-event-loop-explained-with-examples-d8f7ddf0861d
 */

const startTime = Date.now()
console.log('Start time: ', startTime)

const LOOP_COUNT = 10
// const LOOP_COUNT = 10000
setTimeout(() => {
    console.log('In setTimeout callback')
}, 1)

for (i = 0; i < LOOP_COUNT; ++i) {
    console.log('* In bucle')
}

const endTime = Date.now()
console.log('End time: ', endTime)
