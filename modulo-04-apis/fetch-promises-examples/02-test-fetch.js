// Run with:
// 02-test-fetch.js

async function getResults(params) {
    const startTime = Date.now()
    console.log('Start time: ', startTime)
    console.log('--------------------------------------')

    // 1. Define a variable with the request url
    const requestUrl = "https://api.restful-api.dev/objects/4"

    // 2. Use fetch to get results from url (with await)
    const response = await fetch(requestUrl)
    console.log('Server response:')
    console.log('===============')
    console.log(response)

    let middleTime = Date.now()
    console.log('--------------------------------------')
    console.log('Time: ', middleTime)
    console.log('--------------------------------------')

    // 3. Parse JSON
    const result = await response.json()
    console.log('Result:')
    console.log('======')
    console.log(result)


    const endTime = Date.now()
    console.log('--------------------------------------')
    console.log('End time: ', endTime)

}

getResults()