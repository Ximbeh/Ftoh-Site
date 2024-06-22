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
    teamId: String
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
    teamId: String
    newsId: [String]
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
    teamId: String
    driverId: String

    team: Team
    news: [News]
    results: [Result]
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
      const driverId = new ObjectId();
      const driverData = {
        ...driver,
        driverId: driverId.toString(),
      };
      const response = await mongo.drivers.insertOne({ _id: driverId, ...driverData });
      return {
        id: response.insertedId,
        ...driverData,
      };
    },

    deleteDriver: async (_, { id }, { mongo }) => {
      const result = await mongo.drivers.deleteOne({ _id: new ObjectId(id) });
      return result.deletedCount === 1;
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
    news: async ({ driverId }, _, { mongo }) => {
      return mongo.news.find({ driverId }).toArray();
    },
    results: ({ driverId }, _, { mongo }) => {
      return mongo.results.find({ driverId }).toArray();
    },
  },
};