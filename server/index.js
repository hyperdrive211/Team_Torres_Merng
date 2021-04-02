const {ApolloServer} = require('apollo-server'); 
const mongoose = require('mongoose'); 
const gql = require('graphql-tag'); 

const typeDefs = gql`
   type Query {
       sayHello: String!
   } 
`;

const resolvers = {
    Query: {
        sayHello: () => "Hello BJJ Fanatics!"
    }
}


const server = new ApolloServer((
    typeDefs, resolvers
)); 

server.listen({port: 5000}).then((res) => {
    console.log(`Server running at post ${res.url}`); 
});