function checkSecretKey(req, res, next)  {
    console.log(req.headers)
    const secret = req.headers["x-api-key"]
    console.log(`[checkSecretKey] ${secret}`)

    if (secret === '12345') {
        console.log('[checkSecretKey] OK')
        next()
    } else {
        res.status(401).json({error: 'No autorizado'})
    }
}

module.exports = checkSecretKey