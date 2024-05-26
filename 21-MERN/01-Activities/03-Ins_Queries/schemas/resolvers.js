const { School, Class, Professor } = require('../models');
// .populate is used to display info in graphsql
const resolvers = {
  Query: {
    schools: async () => {
      return await School.find({}).populate('classes').populate({
        path: 'classes',
        populate: 'professor'
      });
    },
    classes: async () => {
      return await Class.find({}).populate('professor');
    },
    professors: async () => {
      return await Professor.find({});
    }
  }
};

module.exports = resolvers;
