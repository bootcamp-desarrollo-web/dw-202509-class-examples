import { useState } from "react"
import ProductForm from "./components/ProductFrom"
import ProductsTable from "./components/ProductsTable"

function App() {
  const [productsList, setProductsList] = useState([
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
  ])

  /**
   * Esta función añade un nuevo producto al array
   */
  function onAddProductCallback(newProduct) {
    console.log("onAddProduct called with product: ", newProduct)
    console.log("productsList before: ", productsList)

    // Asignación de nueva id
    newProduct.id = getNextProductId()

    // Este metodo no funciona ya que no usamos el mecanismo deState
    //productsList.push(newProduct)
    
    // Este si - desplegamos en viejo array y creamos uno nuevo
    setProductsList([...productsList, newProduct])

    // Metodo alternativo - crear una Array temporal y llamar a setState con él
    // let tmpProductsList = []
    // for (i = 0; i < productsList.length; i++) {
    //   tmpProductsList[i] = productsList[i]
    // }
    // tmpProductsList.push(newProduct)
    // setProductsList(tmpProductsList)

    console.log("productsList after: ", productsList)
  }

  /**
   * Devuelve la siguiente id
   */
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

  /**
   * Esta función borra un producto del array según la ID que recibe
   */
  function onDeleteProductCallback(deletedProductId) {
    console.log('onDeleteProductCallback called: ', deletedProductId)

    // Primero creamos un array temporal de todos los productos cuyo ID es diferente
    // de la ID del producto que el usuario quiere borrar (usamos la función filter)
    const tmpProductsList = productsList.filter(product => product.id !== deletedProductId)

    // ahroa llamamos a la función set para asignar el nuevo array y con ello
    // actualizar el DOM
    setProductsList(tmpProductsList)
  }

  return (
    <div className="container">
      <header>
        <h1>Inventario de Productos</h1>
      </header>

      <ProductForm onAddProduct={onAddProductCallback} />
      <ProductsTable productsList={productsList} onDeleteProduct={onDeleteProductCallback} />
    </div>
  )
}

export default App
