const { GraphQLServer } = require('graphql-yoga')

// 1 defines schema
const typeDefs = `
type Query {
  info: String!
  feed: [Link!]!
}

type Link {
  id: ID!
  description: String!
  url: String!
}
`

// 2 implementation of schema
let links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
},{
    id: 'link-1',
    url: 'www.example.com',
    description: 'This is an example'
}]

const resolvers = {
    Query: {
        info: () => 'This is the API of a Hackernews Clone',
        feed: () => links,
    }
}

// 3 schema and imp bundled and passed to GraphQLServer
const server = new GraphQLServer({
    typeDefs,
    resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
