import { ObjectId } from 'mongodb';

export const TypeDefs = /* GraphQL */ `
  extend type Query {
    news: [News!]!
    newsItem(id: ID!): News
  }

  extend type Mutation {
    createNews(news: NewNewsInput!): News
    deleteNews(id: ID!): Boolean
    updateNews(id: ID!, update: UpdateNewsInput!): News
  }

  input NewNewsInput {
    title: String!
    headline: String!
    writer: String!
    text: String!
    image: String
    video: String
    raceRelatedId: [ID]
    teamRelatedId: [ID]
    driverRelatedId: [ID]
    tags: [String]
  }

  input UpdateNewsInput {
    title: String
    headline: String
    writer: String
    text: String
    image: String
    video: String
    raceRelatedId: [ID]
    teamRelatedId: [ID]
    driverRelatedId: [ID]
    tags: [String]
  }

  type News {
    id: ID!
    title: String!
    headline: String!
    writer: String!
    text: String!
    image: String
    video: String
    raceRelated: [Race]
    teamRelated: [Team]
    driverRelated: [Driver]
    tags: [String]
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
      const response = await mongo.news.insertOne(news);
      return {
        id: response.insertedId,
        ...news,
      };
    },

    deleteNews: async (_, { id }, { mongo }) => {
      await mongo.news.deleteOne({ _id: new ObjectId(id) });
      return true;
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
    raceRelated: async ({ raceRelatedId }, _, { mongo }) => {
      return mongo.races.findOne({ _id: new ObjectId(raceRelatedId) });
    },
    teamRelated: async ({ teamRelatedId }, _, { mongo }) => {
      return mongo.teams.findOne({ _id: new ObjectId(teamRelatedId) });
    },
    driverRelated: async ({ driverRelatedId }, _, { mongo }) => {
      return mongo.drivers.findOne({ _id: new ObjectId(driverRelatedId) });
    },
  },
};
