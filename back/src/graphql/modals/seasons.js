import { ObjectId } from 'mongodb';

export const TypeDefs = /* GraphQL */ `
  extend type Query {
    seasons: [Season!]!
    season(id: ID!): Season
  }

  extend type Mutation {
    createSeason(season: NewSeasonInput!): Season
    deleteSeason(id: ID!): Boolean
    updateSeason(id: ID!, update: UpdateSeasonInput!): Season
  }

  input NewSeasonInput {
    number: Int!
    date: String!
    championshipId: ID!
  }

  input UpdateSeasonInput {
    number: Int
    date: String
    championshipId: ID
  }

  type Season {
    id: ID!
    number: Int!
    date: String!
    championship: Championship  # Relacionamento com campeonato
  }
`;

export const resolvers = {
  Query: {
    seasons: async (_, __, { mongo }) => {
      return mongo.seasons.find().toArray();
    },
    season: async (_, { id }, { mongo }) => {
      return mongo.seasons.findOne({ _id: new ObjectId(id) });
    },
  },

  Mutation: {
    createSeason: async (_, { season }, { mongo }) => {
      const response = await mongo.seasons.insertOne(season);
      return {
        id: response.insertedId,
        ...season,
      };
    },

    deleteSeason: async (_, { id }, { mongo }) => {
      await mongo.seasons.deleteOne({ _id: new ObjectId(id) });
      return true;
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
    championship: async ({ championshipId }, _, { mongo }) => {
      return mongo.championships.findOne({ _id: new ObjectId(championshipId) });
    },
  },
};
