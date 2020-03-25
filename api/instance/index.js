const { db } = require("../../server");
const { instanceResolvers, instanceMutations, instanceType } = require("./resolver");
console.log(db);

module.exports = {
  instance: db.coll("Instances"),
  instanceController: require("./controller"),
  instanceResolvers,
  instanceMutations,
  instanceType
};
