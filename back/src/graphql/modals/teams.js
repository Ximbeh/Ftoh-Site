import { ObjectId } from 'mongodb';

export const TypeDefs = /* GraphQL */ `
  extend type Query {
    teams: [Team!]!
    team(id: ID!): Team
  }

  extend type Mutation {
    createTeam(team: NewTeamInput!): Team
    deleteTeam(id: ID!): Boolean
    updateTeam(id: ID!, update: UpdateTeamInput!): Team
  }

  input NewTeamInput {
    name: String!
    poles: Int
    wins: Int
    bestPosition: Int
    hotLaps: Int
    records: Int
    chief: String
    logo: String
    points: Int
    position: Int
  }

  input UpdateTeamInput {
    name: String
    poles: Int
    wins: Int
    bestPosition: Int
    hotLaps: Int
    records: Int
    chief: String
    logo: String
    points: Int
    position: Int
  }

  type Team {
    id: ID!
    name: String!
    poles: Int
    wins: Int
    bestPosition: Int
    hotLaps: Int
    records: Int
    chief: String
    logo: String
    points: Int
    position: Int
    drivers: [Driver!]

    season: [Season]
  }
`;

export const resolvers = {
  Query: {
    teams: async (_, __, { mongo }) => {
      return mongo.teams.find().toArray();
    },
    team: async (_, { id }, { mongo }) => {
      return mongo.teams.findOne({ _id: new ObjectId(id) });
    },
  },

  Mutation: {
    createTeam: async (_, { team }, { mongo }) => {
      const response = await mongo.teams.insertOne(team);
      return {
        id: response.insertedId,
        ...team,
      };
    },

    deleteTeam: async (_, { id }, { mongo }) => {
      await mongo.teams.deleteOne({ _id: new ObjectId(id) });
      return true;
    },

    updateTeam: async (_, { id, update }, { mongo }) => {
      await mongo.teams.updateOne(
        { _id: new ObjectId(id) },
        { $set: update }
      );
      return mongo.teams.findOne({ _id: new ObjectId(id) });
    },
  },

  Team: {
    id: (obj) => obj._id || obj.id,
    drivers: async ({ _id }, _, { mongo }) => {
      return mongo.drivers.find({ teamId: new ObjectId(_id) }).toArray();
    },
    season: async ({ seasonId }, _, { mongo }) => {
      return mongo.seasons.findOne({ _id: new ObjectId(seasonId) });
    },
  },
};
