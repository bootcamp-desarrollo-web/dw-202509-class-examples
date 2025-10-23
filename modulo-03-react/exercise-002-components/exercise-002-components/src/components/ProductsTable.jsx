function ProductsTable({ productsList, onDeleteProduct }) {
  function renderRow(product) {
    return (
      <tr key={product.id}>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.stock}</td>
        <td>
          <button className="delete-btn" onClick={() => onDeleteProduct(product.id)}>
            Borrar
          </button>
        </td>
      </tr>
    )
  }

  return (
    <section className="table-section">
      <h2>Lista de productos</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio (€)</th>
            <th>Stock</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {productsList.map((product) => {
            return renderRow(product)
          })}
        </tbody>
      </table>
    </section>
  )
}

export default ProductsTable
