import { ObjectId } from 'mongodb';

export const TypeDefs = /* GraphQL */ `
  type Query {
    championships: [Championship!]!
    championship(id: ID!): Championship
  }

  type Mutation {
    createChampionship(championship: NewChampionshipInput!): Championship
    deleteChampionship(id: ID!): Boolean
    updateChampionship(id: ID!, update: UpdateChampionshipInput!): Championship
  }

  input NewChampionshipInput {
    championshipName: String!
    logo: String
  }

  input UpdateChampionshipInput {
    championshipName: String
    logo: String
  }

  type Championship {
    id: ID!
    championshipName: String!
    logo: String
    seasons: [Season] 
  }
`;

export const resolvers = {
  Query: {
    championships: (_, __, { mongo }) => {
      const result =  mongo.championships.find().toArray();
      return result;
  },
    championship: (_, { id }, { mongo }) => {
      return mongo.championships.findOne({ _id: new ObjectId(id) });
    },
  },

  Mutation: {
    createChampionship: (_, { championship }, { mongo }) => {
      const response = mongo.championships.insertOne(championship);
      return {
        id: response.insertedId,
        ...championship,
      };
    },

    deleteChampionship: (_, { id }, { mongo }) => {
     mongo.championships.deleteOne({ _id: new ObjectId(id) });
      return true;
    },

    updateChampionship: (_, { id, update }, { mongo }) => {
      const response = mongo.championships.updateOne(
        { _id: new ObjectId(id) },
        { $set: update }
      );
      return mongo.championships.findOne({ _id: new ObjectId(id) });
    },
  },

  Championship: {
    id: ({ _id }) => _id.toString(), // Converte o ObjectId para string
    seasons: ({ championshipName }, _, { mongo }) => {
      return mongo.seasons.find({championshipName}).toArray();
    },
  },
};
