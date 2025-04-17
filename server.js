const { createServer } = require('node:http')
const { createYoga, createSchema } = require('graphql-yoga')

const yoga = createYoga({
  schema: createSchema({
    typeDefs: /* GraphQL */ `
      type Query {
        hello: String
      }
    `,
    resolvers: {
      Query: {
        hello: () => 'Hello from GraphQL Yoga on EC2!',
      },
    },
  }),
})

const server = createServer(yoga)
server.listen(4432, () => {
  console.log('🚀 Server is running on http://localhost:4432/graphql')
})

