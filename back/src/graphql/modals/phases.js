import { ObjectId } from 'mongodb';

export const TypeDefs = /* GraphQL */ `
  extend type Query {
    phases: [Phase]
    phase(id: ID): Phase
  }

  extend type Mutation {
    createPhase(phase: NewPhaseInput): Phase
    deletePhase(id: ID): Boolean
    updatePhase(id: ID, update: UpdatePhaseInput): Phase
  }

  input NewPhaseInput {
    name: String
    dayOfWeek: String
    hour: String
    finished: Boolean
    raceId: String
  }

  input UpdatePhaseInput {
    name: String
    dayOfWeek: String
    hour: String
    finished: Boolean
    raceId: String
  }

  type Phase {
    id: ID
    name: String
    dayOfWeek: String
    hour: String
    finished: Boolean
    raceId: String
    phaseId: String

    race: Race
    results: [Result]
    highlights: [Highlight]
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
      const phaseData = {
        ...phase,
      };
      const response = await mongo.phases.insertOne(phaseData);
      const phaseId = response.insertedId.toString()
      await mongo.phases.updateOne(
        {_id: new ObjectId(phaseId)},
        {$set:{phaseId}}
      );
      return {
        id: response.insertedId,
        ...phaseData,
        phaseId
      };

      return isertedPhase
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
      return mongo.races.findOne({ raceId });
    },
    highlights: async ({ _id }, _, { mongo }) => {
      return mongo.highlights.find({ phaseId: _id.toString() }).toArray();
    },
    results: ({ phaseId }, _, { mongo }) => {
      return mongo.results.find({ phaseId }).toArray();
    },
  },
};
