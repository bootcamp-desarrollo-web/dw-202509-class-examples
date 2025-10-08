document.addEventListener('DOMContentLoaded', () => {
    let counter = 0;
    document.getElementById('mainDiv').innerText = counter;

    // // PARTE 1:
    // // usar setTimeout para que el div cambie su color después de 1 segundo
    // setTimeout(() => {
    //     document.getElementById('mainDiv').classList.toggle('bg1');
    //     document.getElementById('mainDiv').classList.toggle('bg2');
    // }, 1000);

    // PARTE 2: 
    // usar setInterval para que el div alterne su color cada segundo 10 veces
    const intervalId = setInterval(() => {
        document.getElementById('mainDiv').classList.toggle('bg1');
        document.getElementById('mainDiv').classList.toggle('bg2');
        counter++;
        document.getElementById('mainDiv').innerText = counter;

        if (counter >= 10) {
            clearInterval(intervalId);
        }
    }, 1000);
})
