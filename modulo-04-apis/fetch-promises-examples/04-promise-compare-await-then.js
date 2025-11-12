const requestUrl = "https://api.restful-api.dev/objects/4"

fetch(requestUrl).then(
    (res) => {
        // console.log('(1) res:', res)
        console.log('(1) We have a response (A)')
    }
)

console.log('(2) I AM HERE!!!')

const response = await fetch(requestUrl)
// console.log(response)
console.log('(3) We have a response (B)')

console.log('(4) AND NOW I AM HERE!!!')
