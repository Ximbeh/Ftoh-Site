import { ObjectId } from 'mongodb';

export const TypeDefs = /* GraphQL */ `
  extend type Query {
    teamHistories: [TeamHistory!]!
    teamHistory(id: ID!): TeamHistory
  }

  extend type Mutation {
    createTeamHistory(teamHistory: NewTeamHistoryInput!): TeamHistory
    deleteTeamHistory(id: ID!): Boolean
    updateTeamHistory(id: ID!, update: UpdateTeamHistoryInput!): TeamHistory
  }

  input NewTeamHistoryInput {
    teamId: ID!
    year: Int!
    performance: String!
  }

  input UpdateTeamHistoryInput {
    teamId: ID
    year: Int
    performance: String
  }

  type TeamHistory {
    id: ID!
    team: Team!
    year: Int!
    performance: String!
  }
`;

export const resolvers = {
  Query: {
    teamHistories: async (_, __, { mongo }) => {
      return mongo.teamHistories.find().toArray();
    },
    teamHistory: async (_, { id }, { mongo }) => {
      return mongo.teamHistories.findOne({ _id: new ObjectId(id) });
    },
  },

  Mutation: {
    createTeamHistory: async (_, { teamHistory }, { mongo }) => {
      const response = await mongo.teamHistories.insertOne(teamHistory);
      return {
        id: response.insertedId,
        ...teamHistory,
      };
    },

    deleteTeamHistory: async (_, { id }, { mongo }) => {
      await mongo.teamHistories.deleteOne({ _id: new ObjectId(id) });
      return true;
    },

    updateTeamHistory: async (_, { id, update }, { mongo }) => {
      await mongo.teamHistories.updateOne(
        { _id: new ObjectId(id) },
        { $set: update }
      );
      return mongo.teamHistories.findOne({ _id: new ObjectId(id) });
    },
  },

  TeamHistory: {
    id: (obj) => obj._id || obj.id,
    team: async ({ teamId }, _, { mongo }) => {
      return mongo.teams.findOne({ _id: new ObjectId(teamId) });
    },
  },
};
