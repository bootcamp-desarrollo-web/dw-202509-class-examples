function IterateWithMap({arr}) {

  return (
    <ul>
      { arr.map((el, i) => <li key={i}>{el} ({i})</li> ) }
    </ul>
  )
}

export default IterateWithMap
