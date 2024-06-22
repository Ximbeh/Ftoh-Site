import { ObjectId } from 'mongodb';

export const TypeDefs = /* GraphQL */ `
  extend type Query {
    results: [Result]
    result(id: ID): Result
  }

  extend type Mutation {
    createResult(result: NewResultInput): Result
    deleteResult(id: ID): Boolean
    updateResult(id: ID, update: UpdateResultInput): Result
  }

  input NewResultInput {
    time: String
    fastestLap: Int
    fastestTime: String
    lapPit: Int
    timePit: String
    lapsQualy: Int
    timeQualy: String
    phaseId: String
    driverId: String
  }

  input UpdateResultInput {
    resultId: String
    time: String
    fastestLap: Int
    fastestTime: String
    lapPit: Int
    timePit: String
    lapsQualy: Int
    timeQualy: String
    phaseId: String
    driverId: String
  }

  type Result {
    id: ID
    resultId: String
    time: String
    fastestLap: Int
    fastestTime: String
    lapPit: Int
    timePit: String
    lapsQualy: Int
    timeQualy: String
    phaseId: String
    driverId: String

    phase: Phase
    driver: Driver

  }
`;

export const resolvers = {
  Query: {
    results: async (_, __, { mongo }) => {
      return mongo.results.find().toArray();
    },
    result: async (_, { id }, { mongo }) => {
      return mongo.results.findOne({ _id: new ObjectId(id) });
    },
  },

  Mutation: {
    createResult: async (_, { result }, { mongo }) => {
      const resultData = {
        ...result,
      };
      const response = await mongo.results.insertOne(resultData);
      const resultId = response.insertedId.toString();
      await mongo.results.updateOne(
        { _id: new ObjectId(resultId) },
        { $set: { resultId } }
      );
      return {
        id: response.insertedId,
        ...resultData,
        resultId,
      };
    },

    deleteResult: async (_, { id }, { mongo }) => {
      await mongo.results.deleteOne({ _id: new ObjectId(id) });
      return true;
    },

    updateResult: async (_, { id, update }, { mongo }) => {
      await mongo.results.updateOne(
        { _id: new ObjectId(id) },
        { $set: update }
      );
      return mongo.results.findOne({ _id: new ObjectId(id) });
    },
  },

  Result: {
    id: (obj) => obj._id || obj.id,
    phase: async ({ phaseId }, _, { mongo }) => {
      return mongo.phases.findOne({ phaseId });
    },
    driver: async ({ driverId }, _, { mongo }) => {
      return mongo.drivers.findOne({ driverId });
    },
  },
};
