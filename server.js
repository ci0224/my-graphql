import { createServer } from 'node:http'
import { createYoga, createSchema } from 'graphql-yoga'
import { typeDefs } from './src/typeDefs/schema.js'
import { queries } from './src/resolvers/queries.js'
import { dynamoDB } from './src/config/dynamodb.js'

const schema = createSchema({
  typeDefs,
  resolvers: {
    Query: queries
  }
})

const yoga = createYoga({
  schema,
  context: () => ({
    dynamoDB
  })
})

const server = createServer(yoga)
server.listen(443, () => {
  console.log('🚀 Server is running on http://localhost:443/graphql')
})

