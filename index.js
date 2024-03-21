const express = require('express')

const app = express()

app.get('/', (_, res) => res.send('<h1>well done!</h1>'))

const port = 8080

const server = app.listen(port, () => console.log(`Server has been started on port ${port}`))

process.on('SIGINT', () => server.close())

process.on('SIGTERM', () => server.close())