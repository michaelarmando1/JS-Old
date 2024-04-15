const { MongoClient } = require("mongodb");

const url = "mongodb+srv://michaelamando25:Mikeokoh.157@cluster0.dwsrhq0.mongodb.net/moviedb";
const client = new MongoClient(url);

const connectFunc = async () => {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

connectFunc();

const insertData = async () => {
  const db = client.db("moviedb");
  const collection = db.createCollection("movies");

  let document = {
    name: "Avatar",
    released: 2004,
    views: 12000,
    likes: 3400,
    dislikes: 23,
  };

  try {
    let result = (await collection).insertOne(document);
    console.log("Document Inserted");
  } catch (error) {
    console.log("Error inserting document");
  }
};

insertData();
