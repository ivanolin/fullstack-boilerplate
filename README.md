# React.js/GraphQL/Node/MongoDB Boilerplate
This is a simple app that demonstrates usage of React.js, GraphQL, Node.js, and MongoDB. As the React interface loads, the current time is sent through a GraphQL query to the Node GraphQL server. The server receives this query in its resolvers and makes a corresponding call to mongoService, the database controller. A method in mongoService then adds a small document to the “connections” collection. This document holds the time that the aforementioned query was sent and the time it was received. Finally, a string representing that document is sent back through the resolver to be displayed on the UI. 

### Setup
1. Clone the repository.
2. cd into the client directory and run yarn.
3. open another terminal, cd into the server directory, and run yarn.
4. run yarn start in both the client and server directories.
5. The demonstration should now run whenever the UI page is reloaded.
