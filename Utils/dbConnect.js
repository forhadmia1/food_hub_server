require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

function dbConnect() {
    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.kifh8.mongodb.net/?retryWrites=true&w=majority`;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    client.connect()
    return client
}

module.exports = dbConnect;