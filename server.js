const express = require('express')
const app = express()

app.use(express.static('./'))

app.get('/data.json', function (req, res) {
    res.send({
        hello: 'world',
        referer: req.header('referer')
    })
})

app.listen(3000, function () {
    console.log('server is listening on 3000')
})
