const { GraphQLServer } = require('graphql-yoga')

// 1 defines schema
const typeDefs = `
type Query {
  info: String!
}
`

// 2 implementation of schema
const resolvers = {
    Query: {
        info: () => `This is the API of a Hackernews Clone`
    }
}

// 3 schema and imp bundled and passed to GraphQLServer
const server = new GraphQLServer({
    typeDefs,
    resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))