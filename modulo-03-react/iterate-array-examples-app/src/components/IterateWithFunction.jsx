function IterateWitFunction({arr}) {

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

  function renderRow(el, i) {
    return (
        <tr key={i}>
            <td>{el.name}</td>
            <td>{el.age}</td>
        </tr>
    )
  }

export default IterateWitFunction
