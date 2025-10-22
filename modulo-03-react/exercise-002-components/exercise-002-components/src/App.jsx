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

  function onAddProduct(newProduct) {
    console.log("productsList before: ", productsList)

    // Asignación de nueva id
    newProduct.id = getNextProductId()

    console.log("onAddProduct called with product: ", newProduct)
    productsList.push(newProduct)

    console.log("productsList after: ", productsList)

    // Aquí algo no funciona, la vista del componente ProductsTable no se actualiza...
  }

  // Devuelve la siguiente id
  function getNextProductId() {
    // Primero iteramos todo el array para encontrar la id máxima
    let maxProductId = 0
    for (let i = 0; i < productsList.length; ++i) {
      let currentProduct = productsList[i]
      if (currentProduct.id > maxProductId) {
        maxProductId = currentProduct.id
      }
    }

    // conseguimos la siguiente id incrementando la máxima id en 1
    let nextProductId = maxProductId + 1
    return nextProductId
  }

  return (
    <div className="container">
      <header>
        <h1>Inventario de Productos</h1>
      </header>

      <ProductForm onAddProduct={onAddProduct} />
      <ProductsTable productsList={productsList} />
    </div>
  )
}

export default App
