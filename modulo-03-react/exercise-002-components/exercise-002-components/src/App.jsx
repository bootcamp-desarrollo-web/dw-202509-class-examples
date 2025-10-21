import ProductForm from "./components/ProductFrom"
import ProductsTable from "./components/ProductsTable"

function App() {
  let productsList = [
    {
      id: 1,
      name: "Teclado mecánico",
      price: "89.99",
      stock: "12"
    },
    {
      id: 2,
      name: "Ratón",
      price: "35",
      stock: "6"
    }
  ]

  return (
    <div className="container">
      <header>
        <h1>Inventario de Productos</h1>
      </header>

      <ProductForm />
      <ProductsTable productsList={productsList} />
    </div>
  )
}

export default App
