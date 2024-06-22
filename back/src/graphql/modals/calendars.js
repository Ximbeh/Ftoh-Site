import { ObjectId } from 'mongodb';

export const TypeDefs = /* GraphQL */ `
  extend type Query {
    calendar: [Calendar]
    calendarEvent(id: ID): Calendar
  }

  extend type Mutation {
    createCalendarEvent(event: NewCalendarEventInput): Calendar
    deleteCalendarEvent(id: ID): Boolean
    updateCalendarEvent(id: ID, update: UpdateCalendarEventInput): Calendar
  }

  input NewCalendarEventInput {
    name: String
    seasonId: [String]
  }

  input UpdateCalendarEventInput {
    name: String
    seasonId: [String]
    calendarId: String
  }

  type Calendar {
    id: ID
    calendarId: String
    name: String
    seasonId: [String]

    races: [Race]
    season: [Season]
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
      const calendarId = new ObjectId();
      const calendarData = {
        ...event,
        calendarId: calendarId.toString(),
      };
      const response = await mongo.calendar.insertOne({_id: calendarId, ...calendarData});
      return {
        id: response.insertedId,
        ...calendarData,
      };
    },

    deleteCalendarEvent: async (_, { id }, { mongo }) => {
      await mongo.calendar.deleteOne({ _id: new ObjectId(id) });
      return true;
    },

    updateCalendarEvent: async (_, { id, update }, { mongo }) => {
      await mongo.calendar.updateOne(
        {_id: new ObjectId(id)},
        { $set: update }
      );
      return mongo.calendar.findOne({ _id: new ObjectId(id) });
    },
  },

  Calendar: {
    id: (obj) => obj._id || obj.id,
    season: async ({ seasonId }, _, { mongo }) => {
      return mongo.seasons.find({ _id: { $in: seasonId.map(id => new ObjectId(id)) } }).toArray();
    },
    races: ({ calendarId }, _, { mongo }) => {
      return mongo.races.find({ calendarId }).toArray();
    },
  },
};
