import { MongoClient,ObjectId } from 'mongodb'
import "https://deno.land/x/dotenv/load.ts";

const url = Deno.env.get("MONGO_URL")
if(!url) {
  console.log("No existe la url");
  Deno.exit(1);
}
const client = new MongoClient(url);

await client.connect();
  console.log('Connected successfully to server');

const dbName = 'estudiogDB';
const db = client.db(dbName);
const Usercollection = db.collection('users');

const users = await Usercollection.find().toArray();

users.forEach((user) => {
  console.log(user);
});

