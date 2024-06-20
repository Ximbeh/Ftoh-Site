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
    seasonNumber: Int
    seasonId: String!  # Referência ao seasonId
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
    seasonNumber: Int
    seasonId: String  # Opcionalmente atualizável
  }

  type Team {
    id: ID!   # ObjectId gerado pelo MongoDB
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
    seasonNumber: Int
    seasonId: String

    season: Season
    drivers: [Driver]
  }
`;

export const resolvers = {
  Query: {
    teams: (_, __, { mongo }) => {
      return mongo.teams.find().toArray();
    },
    team: (_, { id }, { mongo }) => {
      return mongo.teams.findOne({ _id: new ObjectId(id) });
    },
  },

  Mutation: {
    createTeam: async (_, { team }, { mongo }) => {
      const response = await mongo.teams.insertOne(team);
      return {
        id: response.insertedId,  // ObjectId gerado pelo MongoDB
        ...team,
      };
    },

    deleteTeam: async (_, { id }, { mongo }) => {
      const result = await mongo.teams.deleteOne({ _id: new ObjectId(id) });
      return result.deletedCount === 1;
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
    season: ({ seasonId }, _, { mongo }) => {
      return mongo.seasons.findOne({ seasonId });
    },
    drivers: ({ _id }, _, { mongo }) => {
      return mongo.drivers.find({ teamId: new ObjectId(_id) }).toArray();
    },
  },
};
