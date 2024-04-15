const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/yourDatabaseName";

MongoClient.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err, db) {
    if (err) throw err;
    console.log("Connected to MongoDB!");
    // Your code here
    db.close();
  }
);
