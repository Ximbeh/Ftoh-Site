import { ObjectId } from 'mongodb';

export const TypeDefs = /* GraphQL */ `
  extend type Query {
    races: [Race!]!
    race(id: ID!): Race
  }

  extend type Mutation {
    createRace(race: NewRaceInput!): Race
    deleteRace(id: ID!): Boolean
    updateRace(id: ID!, update: UpdateRaceInput!): Race
  }

  input NewRaceInput {
    name: String!
    map: String
    location: String!
    description: String!
    fullName: String!
    calendarIds: [ID!]
  }

  input UpdateRaceInput {
    name: String
    map: String
    location: String
    description: String
    fullName: String
    calendarIds: [ID]
  }

  type Race {
    id: ID!
    name: String!
    map: String
    location: String!
    description: String!
    fullName: String!
    phases: [Phase!]
    calendarIds: [ID!]!
    calendars: [Calendar!]!
  }
`;

export const resolvers = {
  Query: {
    races: async (_, __, { mongo }) => {
      return mongo.races.find().toArray();
    },
    race: async (_, { id }, { mongo }) => {
      return mongo.races.findOne({ _id: new ObjectId(id) });
    },
  },

  Mutation: {
    createRace: async (_, { race }, { mongo }) => {
      const response = await mongo.races.insertOne(race);
      return {
        id: response.insertedId,
        ...race,
      };
    },

    deleteRace: async (_, { id }, { mongo }) => {
      await mongo.races.deleteOne({ _id: new ObjectId(id) });
      return true;
    },

    updateRace: async (_, { id, update }, { mongo }) => {
      // Garantindo que update.calendarIds seja um array, mesmo que vazio
      if (update.calendarIds && !Array.isArray(update.calendarIds)) {
        update.calendarIds = [update.calendarIds];
      }
      
      await mongo.races.updateOne(
        { _id: new ObjectId(id) },
        { $set: update }
      );
      return mongo.races.findOne({ _id: new ObjectId(id) });
    },
  },

  Race: {
    id: (obj) => obj._id || obj.id,
    phases: async ({ _id }, _, { mongo }) => {
      return mongo.phases.find({ raceId: new ObjectId(_id) }).toArray();
    },
    calendars: async ({ calendarIds }, _, { mongo }) => {
      if (!calendarIds || calendarIds.length === 0) {
        return [];
      }
      const calendarObjectIds = calendarIds.map((id) => new ObjectId(id));
      return mongo.calendar.find({ _id: { $in: calendarObjectIds } }).toArray();
    },
  },
};
