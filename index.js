const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Welcome to jsondb!'))

app.listen(port, () => console.log(`JSONDB listening on port ${port}!`))