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
    name: [String]
    nacionality: String
    text: String
    logo: String
    championships: Int
  }

  input UpdateTeamHistoryInput {
    name: [String]
    nacionality: String
    text: String
    logo: String
    championships: Int
  }

  type TeamHistory {
    id: ID
    teamHistoryId: String
    name: [String]
    nacionality: String
    text: String
    logo: String
    championships: Int

    team: [Team]
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
      const teamHistoryId = new ObjectId();
      const teamHistoryData = {
        ...teamHistory,
        teamHistoryId: teamHistoryId.toString(),
      };
      const response = await mongo.teamHistories.insertOne({ _id: teamHistoryId, ...teamHistoryData });
      return {
        id: response.insertedId,
        ...teamHistoryData,
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
    team: async ({ name }, _, { mongo }) => {
      return mongo.teams.find({ name: { $in: name } }).toArray();
    },
  },
};
