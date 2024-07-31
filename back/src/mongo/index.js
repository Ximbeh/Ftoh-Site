
import { Collection, MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export async function setupDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB"); 
    const db = client.db('ftoh');

    return {
      client,
      db,
      championships: db.collection('championships'),
      seasons: db.collection('seasons'),
      news: db.collection('news'),
      teams: db.collection('teams'),
      drivers: db.collection('drivers'),
      calendar: db.collection('calendar'),
      races: db.collection('races'),
      phases: db.collection('phases'),
      results: db.collection('results'),
      highlights: db.collection('highlights'),
      teamHistories: db.collection('teamHistories'),
      driverHistories: db.collection('driverHistories'),
    };

  } catch (err) {
    console.error("Error connecting to database", err); 
  }
}

