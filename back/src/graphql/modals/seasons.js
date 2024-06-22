import { ObjectId } from 'mongodb';

export const TypeDefs = /* GraphQL */ `
type Query {
    seasons: [Season]
    season(id: ID): Season
  }

  type Mutation {
    createSeason(season: NewSeasonInput): Season
    deleteSeason(id: ID): Boolean
    updateSeason(id: ID, update: UpdateSeasonInput): Season
  }

  input NewSeasonInput {
    seasonNumber: Int
    date: String
    championshipId: ID
    championshipName: String
  }

  input UpdateSeasonInput {
    seasonNumber: Int
    date: String
    championshipId: ID
    championshipName: String 
    seasonId: String
  }

  type Season {
    id: ID 
    seasonId: String 
    seasonNumber: Int
    date: String
    championshipName: String

    championship: Championship
    teams: [Team]
    news: [News]
  }
`;

export const resolvers = {
  Query: {
    seasons: (_, __, { mongo }) => {
      return mongo.seasons.find().toArray();
    },
    season: (_, { id }, { mongo }) => {
      return mongo.seasons.findOne({ _id: new ObjectId(id) });
    },
  },

  Mutation: {
    createSeason: async (_, { season }, { mongo }) => {
      const seasonId = new ObjectId();
      const seasonData = {
        ...season,
        seasonId: seasonId.toString(),
      };
      const response = await mongo.seasons.insertOne({ _id: seasonId, ...seasonData });
      return {
        id: response.insertedId,  // ObjectId gerado pelo MongoDB
        ...seasonData,
      };
    },

    deleteSeason: async (_, { id }, { mongo }) => {
      const result = await mongo.seasons.deleteOne({ _id: new ObjectId(id) });
      return result.deletedCount === 1;
    },

    updateSeason: async (_, { id, update }, { mongo }) => {
      await mongo.seasons.updateOne(
        { _id: new ObjectId(id) },
        { $set: update }
      );
      return mongo.seasons.findOne({ _id: new ObjectId(id) });
    },
  },

  Season: {
    id: (obj) => obj._id || obj.id,
    championship: ({ championshipId }, _, { mongo }) => {
      return mongo.championships.findOne({ _id: new ObjectId(championshipId) });
    },
    teams: ({ seasonId }, _, { mongo }) => {
      return mongo.teams.find({ seasonId }).toArray();
    },
    news: async ({ seasonId }, _, { mongo }) => {
      const newsList = await mongo.news.find({ seasonId }).toArray();
      return newsList.length ? newsList : [];
    },
  },
};
