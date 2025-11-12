import React, { useEffect, useState } from "react"

function Timer() {
  const [seconds, setSeconds] = useState(0)

//   const now = Date.now();
//   console.log(now)

  useEffect(() => {
    console.log('In useEffect Timer')
    // Creamos un temporizador que suma 1 cada segundo
    const intervalId = setInterval(() => {
      setSeconds((s) => s + 1)
    }, 1000);

    // Limpieza: cuando el componente se desmonta, detenemos el temporizador
    return () => {
      clearInterval(intervalId)
    };
  }, [])
  return <div>Han pasado {seconds} segundos.</div>
}

export default Timer