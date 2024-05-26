const { Class } = require('../models');

const resolvers = {
  Query: {
    classes: async () => {
      return await Class.find({});
    },
    classHours: async () => {
      return await Class.find({});
    },
    classHoursOne: async (parent, args) => {
      return await Class.findById(args.id);
    }
  }
};

module.exports = resolvers;
