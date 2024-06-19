import { ObjectId } from 'mongodb';

export const TypeDefs = /* GraphQL */ `
  extend type Query {
    driverHistories: [DriverHistory!]!
    driverHistory(id: ID!): DriverHistory
  }

  extend type Mutation {
    createDriverHistory(driverHistory: NewDriverHistoryInput!): DriverHistory
    deleteDriverHistory(id: ID!): Boolean
    updateDriverHistory(id: ID!, update: UpdateDriverHistoryInput!): DriverHistory
  }

  input NewDriverHistoryInput {
    driverId: ID!
    year: Int!
    performance: String!
  }

  input UpdateDriverHistoryInput {
    driverId: ID
    year: Int
    performance: String
  }

  type DriverHistory {
    id: ID!
    driver: Driver!
    year: Int!
    performance: String!
  }
`;

export const resolvers = {
  Query: {
    driverHistories: async (_, __, { mongo }) => {
      return mongo.driverHistories.find().toArray();
    },
    driverHistory: async (_, { id }, { mongo }) => {
      return mongo.driverHistories.findOne({ _id: new ObjectId(id) });
    },
  },

  Mutation: {
    createDriverHistory: async (_, { driverHistory }, { mongo }) => {
      const response = await mongo.driverHistories.insertOne(driverHistory);
      return {
        id: response.insertedId,
        ...driverHistory,
      };
    },

    deleteDriverHistory: async (_, { id }, { mongo }) => {
      await mongo.driverHistories.deleteOne({ _id: new ObjectId(id) });
      return true;
    },

    updateDriverHistory: async (_, { id, update }, { mongo }) => {
      await mongo.driverHistories.updateOne(
        { _id: new ObjectId(id) },
        { $set: update }
      );
      return mongo.driverHistories.findOne({ _id: new ObjectId(id) });
    },
  },

  DriverHistory: {
    id: (obj) => obj._id || obj.id,
    driver: async ({ driverId }, _, { mongo }) => {
      return mongo.drivers.findOne({ _id: new ObjectId(driverId) });
    },
  },
};
