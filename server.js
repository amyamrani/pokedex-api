// Make an express app that listens to a port (e.g. 8000), 
// we can tell it to always respond with "Hello, world!" at first 
// and add morgan logging.

const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))

app.use((req, res) => {
  res.send('Hello, world!')
})

const PORT = 8000

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})
