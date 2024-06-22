import { ObjectId } from 'mongodb';

export const TypeDefs = /* GraphQL */ `
  extend type Query {
    news: [News]
    newsItem(id: ID): News
  }

  extend type Mutation {
    createNews(news: NewNewsInput): News
    deleteNews(id: ID): Boolean
    updateNews(id: ID, update: UpdateNewsInput): News
  }

  input NewNewsInput {
    title: String
    headline: String
    writer: String
    text: String
    image: String
    video: String
    raceId: [String]
    teamId: [String]
    driverId: [String]
    seasonId: [String]
    tags: [String]
  }

  input UpdateNewsInput {
    title: String
    headline: String
    writer: String
    text: String
    image: String
    video: String
    raceId: [String]
    teamId: [String]
    driverId: [String]
    seasonId: [String]
    tags: [String]
  }

  type News {
    id: ID
    title: String
    headline: String
    writer: String
    text: String
    image: String
    video: String
    raceId: [String]
    teamId: [String]
    driverId: [String]
    seasonId: [String]
    tags: [String]
    newsId: String

    races: [Race]
    teams: [Team]
    drivers: [Driver]
    season: Season
  }
`;

export const resolvers = {
  Query: {
    news: async (_, __, { mongo }) => {
      return mongo.news.find().toArray();
    },
    newsItem: async (_, { id }, { mongo }) => {
      return mongo.news.findOne({ _id: new ObjectId(id) });
    },
  },

  Mutation: {
    createNews: async (_, { news }, { mongo }) => {
      const newsId = new ObjectId();
      const newsData = {
        ...news,
        newsId: newsId.toString(),
      };
      const response = await mongo.news.insertOne({ _id: newsId, ...newsData });
      return {
        id: response.insertedId,
        ...newsData,
      };
    },

    deleteNews: async (_, { id }, { mongo }) => {
      const result = await mongo.news.deleteOne({ _id: new ObjectId(id) });
      return result.deletedCount === 1;
    },

    updateNews: async (_, { id, update }, { mongo }) => {
      await mongo.news.updateOne(
        { _id: new ObjectId(id) },
        { $set: update }
      );
      return mongo.news.findOne({ _id: new ObjectId(id) });
    },
  },

  News: {
    id: (obj) => obj._id || obj.id,
    season: async ({ seasonId }, _, { mongo }) => {
      return mongo.seasons.find({ _id: { $in: seasonId.map(id => new ObjectId(id)) } }).toArray();
    },
    races: async ({ raceId }, _, { mongo }) => {
      return mongo.races.find({ _id: { $in: raceId.map(id => new ObjectId(id)) } }).toArray();
    },
    teams: async ({ teamId }, _, { mongo }) => {
      if (Array.isArray(teamId)){
        return mongo.teams.find({ _id: { $in: teamId.map(id => new ObjectId(id)) } }).toArray();
      } else{
        console.error("teamId is not an array");
        return [];
      }
    },
    drivers: async ({ driverId }, _, { mongo }) => {
      if (Array.isArray(driverId)) {
        return mongo.drivers.find({ _id: { $in: driverId.map(id => new ObjectId(id)) } }).toArray();
      } else {
        console.error("driverId is not an array");
        return [];
      }
    },
  },
};
