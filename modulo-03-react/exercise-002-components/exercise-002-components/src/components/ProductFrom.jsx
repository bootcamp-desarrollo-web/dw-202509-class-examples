function ProductForm({ onAddProduct }) {
  // Extrae los datos del formulario y llama al callback con el nuevo producto
  function onSubmitForm(e) {
    // Prevenir la recarga de la página
    e.preventDefault()

    // Crear objeto del nuevo producto
    let currentProduct = {
      name: e.target.name.value,
      price: e.target.price.value,
      stock: e.target.stock.value,
    }

    // Llamar al callback que ha pasado el componente padre
    onAddProduct(currentProduct)
  }

  return (
    <section className="form-section">
      <h2>Agregar nuevo producto</h2>
      <form onSubmit={onSubmitForm} id="product-form">
        <input type="text" id="name" placeholder="Nombre del producto" />
        <input type="text" id="price" placeholder="Precio (€)" />
        <input type="text" id="stock" placeholder="Cantidad en stock" />
        <button type="submit">Agregar producto</button>
      </form>
    </section>
  )
}

export default ProductForm
