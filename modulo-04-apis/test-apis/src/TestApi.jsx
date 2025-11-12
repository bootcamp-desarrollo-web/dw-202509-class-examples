function TestApi() {
  const baseUrl = 'https://jsonplaceholder.typicode.com/posts'

  /**
   * Function listAll
   * Devuelve listado de todos los registros
   */
  function listAll() {
    fetch(baseUrl)
      .then((response) => {
        if (response.ok) {
            return response.json()
        }
        else throw new Error(`Something got wrong... [status ${response.status}]`)
      })
      .then((json) => console.log(json))
      .catch(e => console.error('[ERROR]', e.message))
  }

  /**
   * Function getEntry
   * Devuelve la información de un registro concreto
   */
  async function getEntry() {
    try {
      const response = await fetch(`${baseUrl}/3`)
      const result = await response.json()
      console.log(result)
    } catch (e) {
      console.error('[ERROR] ', e.message)
    }
  }

  /**
   * Function createResource
   * Simula una operación CREATE
   */
  function createResource() {
    fetch(baseUrl, {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        // console.log(response)
        return response.json()
      })
      .then((json) => console.log(json))
      .catch(e => console.warn(e))
  }

  return (
    <>
      <h1>Test apis</h1> <br />
      <div className="container">
        <div className="item">
          <button onClick={listAll}>List all</button>
        </div>
        <div className="item">
          <button onClick={getEntry}>GET</button>
        </div>
        <div className="item">
          <button onClick={createResource}>Create</button>
        </div>
      </div>
    </>
  )
}

export default TestApi
