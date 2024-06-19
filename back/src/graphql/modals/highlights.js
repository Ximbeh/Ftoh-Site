import { ObjectId } from 'mongodb';

export const TypeDefs = /* GraphQL */ `
  extend type Query {
    highlights: [Highlight!]!
    highlight(id: ID!): Highlight
  }

  extend type Mutation {
    createHighlight(highlight: NewHighlightInput!): Highlight
    deleteHighlight(id: ID!): Boolean
    updateHighlight(id: ID!, update: UpdateHighlightInput!): Highlight
  }

  input NewHighlightInput {
    title: String!
    content: String!
    phaseId: ID!
  }

  input UpdateHighlightInput {
    title: String
    content: String
    phaseId: ID
  }

  type Highlight {
    id: ID!
    title: String!
    content: String!
    phase: Phase!
  }
`;

export const resolvers = {
  Query: {
    highlights: async (_, __, { mongo }) => {
      return mongo.highlights.find().toArray();
    },
    highlight: async (_, { id }, { mongo }) => {
      return mongo.highlights.findOne({ _id: new ObjectId(id) });
    },
  },

  Mutation: {
    createHighlight: async (_, { highlight }, { mongo }) => {
      const response = await mongo.highlights.insertOne(highlight);
      return {
        id: response.insertedId,
        ...highlight,
      };
    },

    deleteHighlight: async (_, { id }, { mongo }) => {
      await mongo.highlights.deleteOne({ _id: new ObjectId(id) });
      return true;
    },

    updateHighlight: async (_, { id, update }, { mongo }) => {
      await mongo.highlights.updateOne(
        { _id: new ObjectId(id) },
        { $set: update }
      );
      return mongo.highlights.findOne({ _id: new ObjectId(id) });
    },
  },

  Highlight: {
    id: (obj) => obj._id || obj.id,
    phase: async ({ phaseId }, _, { mongo }) => {
      return mongo.phases.findOne({ _id: new ObjectId(phaseId) });
    },
  },
};
