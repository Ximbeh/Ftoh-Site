
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
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const db = client.db('sample_mflix')
   
    return{
        client,
        db,
        // collections
            users: db.collection('users'),
            movies: db.collection('movies'),
            comments: db.collection('comments')
    };

  } catch(err){
      console.log("Error connecting to database");

      return{}
  }
}

