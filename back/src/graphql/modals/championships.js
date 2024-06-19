import { ObjectId } from 'mongodb';

export const TypeDefs = /* GraphQL */ `
  extend type Query {
    championships: [Championship!]!
    championship(id: ID!): Championship
  }

  extend type Mutation {
    createChampionship(championship: NewChampionshipInput!): Championship
    deleteChampionship(id: ID!): Boolean
    updateChampionship(id: ID!, update: UpdateChampionshipInput!): Championship
  }

  input NewChampionshipInput {
    name: String!
  }

  input UpdateChampionshipInput {
    name: String
  }

  type Championship {
    id: ID!
    name: String!
    seasons: [Season!]  # Relacionamento com temporadas
  }
`;

export const resolvers = {
  Query: {
    championships: async (_, __, { mongo }) => {
      const result = await mongo.championships.find().toArray();
      console.log(result); // Verifica se os campeonatos estão sendo retornados corretamente
      return result;
  },
    championship: async (_, { id }, { mongo }) => {
      return mongo.championships.findOne({ _id: new ObjectId(id) });
    },
  },

  Mutation: {
    createChampionship: async (_, { championship }, { mongo }) => {
      const response = await mongo.championships.insertOne(championship);
      return {
        id: response.insertedId,
        ...championship,
      };
    },

    deleteChampionship: async (_, { id }, { mongo }) => {
      await mongo.championships.deleteOne({ _id: new ObjectId(id) });
      return true;
    },

    updateChampionship: async (_, { id, update }, { mongo }) => {
      const response = await mongo.championships.updateOne(
        { _id: new ObjectId(id) },
        { $set: update }
      );
      return mongo.championships.findOne({ _id: new ObjectId(id) });
    },
  },

  Championship: {
    id: (obj) => obj._id || obj.id,
    seasons: async ({ _id }, _, { mongo }) => {
      const seasons = await mongo.seasons.find({ championshipId: new ObjectId(_id) }).toArray();
      return seasons;
    },
  },
};
