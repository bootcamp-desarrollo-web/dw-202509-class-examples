function ProductForm() {
    return (
      <section className="form-section">
        <h2>Agregar nuevo producto</h2>
        <form id="product-form">
          <input type="text" id="name" placeholder="Nombre del producto" />
          <input type="text" id="price" placeholder="Precio (€)" />
          <input type="text" id="stock" placeholder="Cantidad en stock" />
          <button type="submit">Agregar producto</button>
        </form>
      </section>
    )
}

export default ProductForm