// Import External Dependancies
const graphql = require("graphql");
// Destructure GraphQL functions
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID, GraphQLList, GraphQLNonNull } = graphql;

const { instanceResolvers, instanceMutations } = require("./instance/");

// Define Root Query
const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    ...instanceResolvers
  }
});

// Define Mutations
const Mutations = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    ...instanceMutations
  }
});

// Export the schema
module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutations
});
