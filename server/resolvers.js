const mongoService = require('./mongoService');

//GQL Resolvers
module.exports = {
    Query:
    {
        connect: async (_, args) => {

            //Get current time data
            let today =  new Date();

            //Build connection object with passed time and current time
            let connection = { 
                timeSent: args.time,
                timeRecieved: `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}:${today.getMilliseconds()}` 
            }

            //Add connection to DB
            let result = await mongoService.addConnection(connection)

            //Return log statement
            return `Connection was sent at ${connection.timeSent}, 
                    recieved at ${connection.timeRecieved}, 
                    and logged at [${result.id}] in your database.`;
        },
    }
}
