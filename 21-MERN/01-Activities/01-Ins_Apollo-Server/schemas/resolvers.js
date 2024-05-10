const { Class } = require('../models');

const resolvers = {
  Query: { // resolvers do the same function as routes in nosql
    classes: async () => {
      return await Class.find({});
    }
  }
};

module.exports = resolvers;
