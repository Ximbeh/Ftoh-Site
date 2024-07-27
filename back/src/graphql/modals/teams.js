import { ObjectId } from 'mongodb';

export const TypeDefs = /* GraphQL */ `
  extend type Query {
    teams: [Team]
    team(id: ID): Team
  }

  extend type Mutation {
    createTeam(team: NewTeamInput): Team
    deleteTeam(id: ID): Boolean
    updateTeam(id: ID, update: UpdateTeamInput): Team
  }

  input NewTeamInput {
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
    color: String
    car: String
    seasonId: String
    teamId: String
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
    color: String
    car: String
    seasonId: String
    teamId: String
  }

  type Team {
    id: ID  
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
    color: String
    car: String
    seasonId: String
    teamId: String

    season: Season
    drivers: [Driver]
    news: [News]
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
      const teamData = {
        ...team,
      };
      const response = await mongo.teams.insertOne(teamData);
      const teamId = response.insertedId.toString();
      await mongo.teams.updateOne(
        { _id: new ObjectId(teamId) },
        { $set: { teamId } }
      );
      return {
        id: response.insertedId,
        ...teamData,
        teamId,
      };
    },

    deleteTeam: async (_, { id }, { mongo }) => {
      const result = await mongo.teams.deleteOne({ _id: new ObjectId(id) });
      return result.deletedCount === 1;
    },

    updateTeam: async (_, { id, update }, { mongo }) => {
      await mongo.teams.updateOne(
        { _id: new ObjectId(id) },
        { $set: { ...update, teamId: id } }
      );
      return mongo.teams.findOne({ _id: new ObjectId(id) });
    },
  },

  Team: {
    id: (obj) => obj._id || obj.id,
    season: async ({ seasonId }, _, { mongo }) => {
      return mongo.seasons.findOne({ seasonId });
    },
    drivers: async ({ _id }, _, { mongo }) => {
      return mongo.drivers.find({ teamId: _id.toString() }).toArray();
    },
    news: async ({ teamId }, _, { mongo }) => {
      console.log(teamId);
      return mongo.news.find({ teamId }).toArray();
    },
  },
};
