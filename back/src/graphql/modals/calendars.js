import { ObjectId } from 'mongodb';

export const TypeDefs = /* GraphQL */ `
  extend type Query {
    calendar: [Calendar!]!
    calendarEvent(id: ID!): Calendar
  }

  extend type Mutation {
    createCalendarEvent(event: NewCalendarEventInput!): Calendar
    deleteCalendarEvent(id: ID!): Boolean
    updateCalendarEvent(id: ID!, update: UpdateCalendarEventInput!): Calendar
  }

  input NewCalendarEventInput {
    name: String!
    raceIds: [ID!]!
  }

  input UpdateCalendarEventInput {
    name: String
    raceIds: [ID]
  }

  type Calendar {
    id: ID!
    name: String!
    races: [Race!]!
    raceIds: [ID!]!
  }
`;

export const resolvers = {
  Query: {
    calendar: async (_, __, { mongo }) => {
      return mongo.calendar.find().toArray();
    },
    calendarEvent: async (_, { id }, { mongo }) => {
      return mongo.calendar.findOne({ _id: new ObjectId(id) });
    },
  },

  Mutation: {
    createCalendarEvent: async (_, { event }, { mongo }) => {
      const response = await mongo.calendar.insertOne(event);
      return {
        id: response.insertedId,
        ...event,
      };
    },

    deleteCalendarEvent: async (_, { id }, { mongo }) => {
      await mongo.calendar.deleteOne({ _id: new ObjectId(id) });
      return true;
    },

    updateCalendarEvent: async (_, { id, update }, { mongo }) => {
      // Garantindo que update.raceIds seja um array, mesmo que vazio
      if (update.raceIds && !Array.isArray(update.raceIds)) {
        update.raceIds = [update.raceIds];
      }
      
      await mongo.calendar.updateOne(
        { _id: new ObjectId(id) },
        { $set: update }
      );
      return mongo.calendar.findOne({ _id: new ObjectId(id) });
    },
  },

  Calendar: {
    id: (obj) => obj._id || obj.id,
    races: async ({ raceIds }, _, { mongo }) => {
      if (!raceIds || raceIds.length === 0) {
        return [];
      }
      const raceObjectIds = raceIds.map((id) => new ObjectId(id));
      return mongo.races.find({ _id: { $in: raceObjectIds } }).toArray();
    },
  },
};
