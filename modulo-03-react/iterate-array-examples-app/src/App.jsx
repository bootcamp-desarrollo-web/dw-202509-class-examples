import IterateWithMap from "./components/IterateWithMap"
import IterateWithForLoop from "./components/IterateWithForLoop"
import IterateWitFunction from "./components/IterateWithFunction"

function App() {
  let fruits = ['Manzana', 'Manzana', 'Platano', 'Pera']
  let persons = [
    {name: 'Alonso', age: 45},
    {name: 'Beatriz', age: 39},
    {name: 'Carlos', age: 24},
  ]

  return (
    <div>
      <h3>Iterate with <code>map</code>:</h3>
      <IterateWithMap arr={fruits}/>
      <hr />

      <h3>Iterate with <code>for</code> loop:</h3>
      <IterateWithForLoop arr={fruits}/>
      <hr />

      <h3>Iterate with a function</h3>
      <IterateWitFunction arr={persons} />
    </div>
  )
}

export default App
