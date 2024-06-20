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
    seasonId: String  # Definido por você
  }

  input UpdateSeasonInput {
    seasonNumber: Int
    date: String
    championshipId: ID
    championshipName: String
    seasonId: String  # Opcionalmente atualizável
  }

  type Season {
    id: ID   # ObjectId gerado pelo MongoDB
    seasonId: String  # Definido por você
    seasonNumber: Int
    date: String
    championshipName: String

    championship: Championship
    teams: [Team]
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
      const response = await mongo.seasons.insertOne(season);
      return {
        id: response.insertedId,  // ObjectId gerado pelo MongoDB
        ...season,
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
    id: ({ _id }) => _id,  // Utilizando _id do MongoDB como ID
    championship: ({ championshipId }, _, { mongo }) => {
      return mongo.championships.findOne({ _id: new ObjectId(championshipId) });
    },
    teams: ({ seasonId }, _, { mongo }) => {
      return mongo.teams.find({ seasonId }).toArray();
    },
  },
};
