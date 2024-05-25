const typeDefs = `
  type Class {
    _id: ID
    name: String
    building: String
    creditHours: Int
  }

  type ClassHours {
    _id: ID
    creditHours: Int
  }

  type Query {
    classes: [Class]
    classHours: [ClassHours]
  }
`;

module.exports = typeDefs;
// with graphQL you only get the info requested.