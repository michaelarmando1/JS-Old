const { MongoClient } = require("mongodb");

const url =
    "mongodb+srv://michaelamando25:Mikeokoh.157@cluster0.dwsrhq0.mongodb.net/MoviesDB";
const client = new MongoClient(url);

const connect_to_atlas = async() => {
    try {
        await client.connect();
        console.log("MongoDB Connected");
    } catch (error) {
        console.log("MongoDB Not Connected");
        console.log(error);
    }
};

const db = client.db("MoviesDB");
const movies_collection = db.collection("movies");

async function insertOne(document) {
    try {
        (await movies_collection.aggregate.insertMany(document));
        console.log("Inserted Document Successfully");
    } catch (error) {

    }
}

connect_to_atlas();