import {Link} from './models/Link.js'

export const resolvers = {
    Query: {
        hello: (_, {name}) => `Helllo ${name}`,
        links: async () => await Link.find({})
    }
}