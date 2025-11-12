const url = "https://bored-api.appbrewery.com/randomm"
// const url = 'https://jsonplaceholder.typicode.com/404'

fetch(url)
  .then((response) => {
    // Sustituye la línea:
    // const response = await fetch(requestUrl)
    console.log('--> Response received with status: ', response.status)

    if (!response.ok) {
        throw new Error(`Ooops, something went wrong... ${response.status}`)
    }

    // Devolvemos una promesa para parsear el JSON de la respuesta
    return response.json()
  })
  .then((result) => {
    // Sustituye la línea:
    // const result = await response.json()
    console.log('Got result: ', result)
  })
  .catch((err) => {
    console.log("[ERROR] error: ", err.message)
  })
