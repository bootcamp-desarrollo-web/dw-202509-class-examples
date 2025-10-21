function IterateWitFunction({arr}) {
  function renderRow(el, i) {
    return (
        <tr>
            <td>{el.name}</td>
            <td>{el.age}</td>
        </tr>
    )
  }

  return (
    <table>
        <thead>
            <tr>
                <th>Person</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody>
            { arr.map((el, i) => renderRow(el, i) ) }
        </tbody>
    </table>
  )
}

export default IterateWitFunction
