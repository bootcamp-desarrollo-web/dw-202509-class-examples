function IterateWithForLoop({arr}) {
  const items = [];

  // Create new array with the html <li> tags
  for (let i = 0; i < arr.length; i++) {
    let currentEl = <li key={i}>{arr[i]}</li>
    items.push(currentEl)
  }

  return (
    <ul>
      {items}
    </ul>
  )
}

export default IterateWithForLoop
