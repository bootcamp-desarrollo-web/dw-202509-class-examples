import { useState } from 'react'
import Boom from './components/Boom'

function App() {
  const [counter, setCounter] = useState(1)

  return (
    <div className="container">
      <div className="button-wrapper">
          <button onClick={() => setCounter((counter) => counter + 1)}>
            +1
          </button>
      </div>
      <div className="boom-wrapper">
        <Boom counter={counter}/>
      </div>
    </div>
  )
}

export default App
