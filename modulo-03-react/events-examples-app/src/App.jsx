function App() {
  // Esta función recibe un argumento opcional y lanza un alert
  function sayHello(username) {
    let helloStr = 'Hello'
    // Si el argumento es un string, lo concatenamos a helloStr
    if (typeof username === 'string') {
      helloStr += ` ${username}`
    }
    alert(helloStr)
  }

  return (
    <div className="container">
      <div onClick={sayHello}>onClick</div>
      <div onClick={() => {sayHello('Johny')}}>onClick</div>
      <div onMouseOver ={() => {sayHello('Clara')}}>onMouseOver</div>
    </div>
  )
}

export default App
