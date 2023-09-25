const express = require(`express`)
const cors = require(`cors`)
const server = express()

server.use(express.json())
server.use(cors())

server.get(`/api`, (req, res) => {
    res.status(200).json({message: `API is up and running!`})
})

module.exports = server