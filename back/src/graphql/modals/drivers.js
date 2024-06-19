import { ObjectId } from 'mongodb';

export const TypeDefs = /* GraphQL */ `
  extend type Query {
    drivers: [Driver!]!
    driver(id: ID!): Driver
  }

  extend type Mutation {
    createDriver(driver: NewDriverInput!): Driver
    deleteDriver(id: ID!): Boolean
    updateDriver(id: ID!, update: UpdateDriverInput!): Driver
  }

  input NewDriverInput {
    name: String!
    poles: Int
    wins: Int
    bestPosition: Int
    hotLaps: Int
    records: Int
    number: Int
    points: Int
    position: Int
    teamId: ID!
  }

  input UpdateDriverInput {
    name: String
    poles: Int
    wins: Int
    bestPosition: Int
    hotLaps: Int
    records: Int
    number: Int
    points: Int
    position: Int
    teamId: ID
  }

  type Driver {
    id: ID!
    name: String!
    poles: Int
    wins: Int
    bestPosition: Int
    hotLaps: Int
    records: Int
    number: Int
    points: Int
    position: Int
    team: Team
  }
`;

export const resolvers = {
  Query: {
    drivers: async (_, __, { mongo }) => {
      return mongo.drivers.find().toArray();
    },
    driver: async (_, { id }, { mongo }) => {
      return mongo.drivers.findOne({ _id: new ObjectId(id) });
    },
  },

  Mutation: {
    createDriver: async (_, { driver }, { mongo }) => {
      const response = await mongo.drivers.insertOne(driver);
      return {
        id: response.insertedId,
        ...driver,
      };
    },

    deleteDriver: async (_, { id }, { mongo }) => {
      await mongo.drivers.deleteOne({ _id: new ObjectId(id) });
      return true;
    },

    updateDriver: async (_, { id, update }, { mongo }) => {
      await mongo.drivers.updateOne(
        { _id: new ObjectId(id) },
        { $set: update }
      );
      return mongo.drivers.findOne({ _id: new ObjectId(id) });
    },
  },

  Driver: {
    id: (obj) => obj._id || obj.id,
    team: async ({ teamId }, _, { mongo }) => {
      return mongo.teams.findOne({ _id: new ObjectId(teamId) });
    },
  },
};
