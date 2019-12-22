const express = require('express')
const helmet = require('helmet')
let port = 8181;
 
const app = express()
 
app.use(helmet())

app.get('/', (req, res)=> {
  res.send(`Welcome to HelmetJS App`)
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})