import { ObjectId } from 'mongodb';


export const TypeDefs = /* GraphQL */ `
  extend type Query {
    driverHistories: [DriverHistory]
    driverHistory(id: ID): DriverHistory
  }

  extend type Mutation {
    createDriverHistory(driverHistory: NewDriverHistoryInput): DriverHistory
    deleteDriverHistory(id: ID): Boolean
    updateDriverHistory(id: ID, update: UpdateDriverHistoryInput): DriverHistory
  }

  input NewDriverHistoryInput {
    name: [String]
    nacionality: String
    text: String
    championships: Int
  }

  input UpdateDriverHistoryInput {
    name: [String]
    nacionality: String
    text: String
    championships: Int
  }

  type DriverHistory {
    id: ID
    driverHistoryId: String
    nacionality: String
    text: String
    championships: Int
    name: [String]

    driver: [Driver]
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
      const driverHistoryId = new ObjectId();
      const driverHistoryData = {
        ...driverHistory,
        driverHistoryId: driverHistoryId.toString(),
      };
      const response = await mongo.driverHistories.insertOne({ _id: driverHistoryId, ...driverHistoryData });
      return {
        id: response.insertedId,
        ...driverHistoryData,
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
    driver: async ({ name }, _, { mongo }) => {

      return mongo.drivers.find({ name: { $in: name } }).toArray();
    },
  },
};