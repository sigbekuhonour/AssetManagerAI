import { MongoClient } from "mongodb";
import "dotenv/config";
// Replace the uri string with your connection string.
export function databaseStore() {
  if (!process.env.MONGODB_CONNECT_STRING) {
    console.error("No connection string found in environment variables!");
    return;
  }
  const uri = process.env.MONGODB_CONNECT_STRING;
  const client = new MongoClient(uri);
  async function connect() {
    try {
      const database = client.db("AssetManager");
      const uploadedFiles = database.collection("extractedText");

      // Query for a movie that has the title 'Back to the Future'
      const query = { file: "Sample file" };
      const testFile = await uploadedFiles.findOne(query);
      if (testFile) {
        console.log("Database connection successful");
      }
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  connect().catch(console.dir);
}
