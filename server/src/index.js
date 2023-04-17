import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import mongoose from 'mongoose';

import { typeDefs } from './models/typeDefs.js';
import { resolvers } from './resolvers.js'

const db = await mongoose.connect('mongodb+srv://Bellasarian:Llebysysysys123@brainsquared.wwgucpt.mongodb.net/test')
console.log(`connected to db`, db?.connections[0]?._connectionString)

const server = new ApolloServer({typeDefs, resolvers});

const {url} = await startStandaloneServer(server, {
    listen: {port: 4000},
})

console.info(`Server ready at ${url}`)