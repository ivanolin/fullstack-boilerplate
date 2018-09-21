const { GraphQLServer } = require('graphql-yoga');
const database = require('./database');
const resolvers = require('./resolvers');

// Server INIT
const server = new GraphQLServer({
    typeDefs: './schema.graphql',
    resolvers,
})

/**
 * Connect to database and start GQL server
 */
try {
    database.connect(() => {
        console.log('Database Connected');
        server.start(({ port }) => 
            console.log(`Server is running on http://localhost:${port}`))
    });
} catch (err) {
    console.log("Error occurred while starting server:" + err);
}
