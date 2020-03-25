// Import External Dependancies
const graphql = require("graphql");
// Destructure GraphQL functions
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID, GraphQLList, GraphQLNonNull } = graphql;

const instanceController = require("./controller");

const instanceType = new GraphQLObjectType({
  name: "Instance",
  description: "A Instance defines a single specific instance/trial/forest/field.",
  fields: () => ({
    _id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: GraphQLString, description: "Instance given name." }
  })
});

const instanceResolvers = {
  instance: {
    type: instanceType,
    description: "Get a single instance.",
    args: { id: { type: new GraphQLNonNull(GraphQLID) } },
    async resolve(parent, args) {
      return await instanceController.getSingleInstance(args);
    }
  },
  instances: {
    type: new GraphQLList(instanceType),
    description: "Get a list of instances.",
    async resolve(parent, args, context) {
      return await instanceController.getInstances(context);
    }
  }
};

const instanceMutations = {
  addInstance: {
    type: instanceType,
    args: {
      name: { type: new GraphQLNonNull(GraphQLString) }
    },
    async resolve(parent, args) {
      const data = await instanceController.addInstance(args);
      return data;
    }
  },
  editInstance: {
    type: instanceType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLID) },
      name: { type: new GraphQLNonNull(GraphQLString) }
    },
    async resolve(parent, args) {
      const data = await instanceController.updateInstance(args);
      return data;
    }
  },
  deleteInstance: {
    type: instanceType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLID) }
    },
    async resolve(parent, args) {
      const data = await instanceController.deleteInstance(args);
      return data;
    }
  }
};

module.exports = { instanceResolvers, instanceMutations, instanceType };
