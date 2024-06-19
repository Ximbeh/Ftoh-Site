import { ObjectId } from 'mongodb';

export const TypeDefs = /* GraphQL */ `
  extend type Query {
    phases: [Phase!]!
    phase(id: ID!): Phase
  }

  extend type Mutation {
    createPhase(phase: NewPhaseInput!): Phase
    deletePhase(id: ID!): Boolean
    updatePhase(id: ID!, update: UpdatePhaseInput!): Phase
  }

  input NewPhaseInput {
    name: String!
    date: String!
    finished: Boolean!
    raceId: ID!
  }

  input UpdatePhaseInput {
    name: String
    date: String
    finished: Boolean
    raceId: ID
  }

  type Phase {
    id: ID!
    name: String!
    date: String!
    finished: Boolean!
    race: Race!
    highlights: [Highlight!]
    results: [Result!]
  }
`;

export const resolvers = {
  Query: {
    phases: async (_, __, { mongo }) => {
      return mongo.phases.find().toArray();
    },
    phase: async (_, { id }, { mongo }) => {
      return mongo.phases.findOne({ _id: new ObjectId(id) });
    },
  },

  Mutation: {
    createPhase: async (_, { phase }, { mongo }) => {
      const response = await mongo.phases.insertOne(phase);
      return {
        id: response.insertedId,
        ...phase,
      };
    },

    deletePhase: async (_, { id }, { mongo }) => {
      await mongo.phases.deleteOne({ _id: new ObjectId(id) });
      return true;
    },

    updatePhase: async (_, { id, update }, { mongo }) => {
      await mongo.phases.updateOne(
        { _id: new ObjectId(id) },
        { $set: update }
      );
      return mongo.phases.findOne({ _id: new ObjectId(id) });
    },
  },

  Phase: {
    id: (obj) => obj._id || obj.id,
    race: async ({ raceId }, _, { mongo }) => {
      return mongo.races.findOne({ _id: new ObjectId(raceId) });
    },
    highlights: async ({ _id }, _, { mongo }) => {
      return mongo.highlights.find({ phaseId: _id }).toArray();
    },
    results: async ({ _id }, _, { mongo }) => {
      return mongo.results.find({ phaseId: _id }).toArray();
    },
  },
};
