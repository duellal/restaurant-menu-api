const express = require(`express`)
const cors = require(`cors`)
const { graphqlHTTP } = require("express-graphql")
const server = express()
const data = require(`../data`)
const typeDefs = require(`../graphQL/graphql_schema`)
const resolvers = require(`../graphQL/graphql_resolvers`)
const { makeExecutableSchema } = require("@graphql-tools/schema")

server.use(express.json())
server.use(cors())
server.use(`/graphql`, graphqlHTTP({
    schema: makeExecutableSchema({typeDefs, resolvers}),
    context: data, 
    graphiql: true
}))



server.get(`/`, (req, res) => {
    res.status(200).json({message: `API is up and running!`})
})

module.exports = server;