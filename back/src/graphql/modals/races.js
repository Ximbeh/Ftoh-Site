import { ObjectId } from 'mongodb';

export const TypeDefs = /* GraphQL */ `
  extend type Query {
    races: [Race]
    race(id: ID): Race
  }

  extend type Mutation {
    createRace(race: NewRaceInput): Race
    deleteRace(id: ID): Boolean
    updateRace(id: ID, update: UpdateRaceInput): Race
  }

  input NewRaceInput {
    name: String
    map: String
    location: String
    description: String
    fullName: String
    flag: String
    date: String  
    calendarId: String
  }

  input UpdateRaceInput {
    raceId: String
    name: String
    map: String
    location: String
    description: String
    fullName: String
    flag: String
    date: String  
    calendarId: String
  }

  type Race {
    id: ID
    raceId: String
    name: String
    map: String
    location: String
    description: String
    fullName: String
    flag: String
    date: String  
    calendarId: String

    calendar: [Calendar]
    phases: [Phase]
    news: [News]
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
      const raceData = {
        ...race,
      };
      const response = await mongo.races.insertOne(raceData);
      const raceId = response.insertedId.toString();
      await mongo.races.updateOne(
        { _id: new ObjectId(raceId) },
        { $set: { raceId } }
      );
      return {
        id: response.insertedId,
        ...raceData,
        raceId,
      };
    },

    deleteRace: async (_, { id }, { mongo }) => {
      await mongo.races.deleteOne({ _id: new ObjectId(id) });
      return true;
    },

    updateRace: async (_, { id, update }, { mongo }) => {
      // Garantindo que update.calendarId seja um array, mesmo que vazio
      if (update.calendarId && Array.isArray(update.calendarId)) {
        update.calendarId = [update.calendarId];
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
    calendar: async ({ calendarId }, _, { mongo }) => {
      return mongo.calendar.find({ calendarId });
    },
    phases: ({ raceId }, _, { mongo }) => {
      return mongo.phases.find({ raceId }).toArray();
    },
    news: async ({ raceId }, _, { mongo }) => {
      return mongo.news.find({ raceId }).toArray();
    },
  },
};
