import express from 'express'
import cors from "cors"

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  const d = (new Date()).toGMTString()
  res.send('hello world @ '+d)
})

app.listen(8080, () => console.log("up and listening at :8080"))