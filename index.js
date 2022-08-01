const express = require('express');
const cors = require('cors');
const app = express()
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const port = process.env.PORT || 5000;

//middleware 
app.use(express.json())
app.use(cors())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.kifh8.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {
    try {
        await client.connect()
        const Foodcollection = client.db("Food_Hub").collection("Foods");

        app.post('/foods', async (req, res) => {
            try {
                const data = req.body;
                const result = await Foodcollection.insertOne(data)
                res.status(200).send({ message: "Insert food successfully" })
            } catch (error) {
                res.status(500).send({ message: "Failed to add data" })
            }
        })

        app.get('/foods', async (req, res) => {
            const data = Foodcollection.find({})
            const result = await data.toArray()
            res.send(result)
        })

    } finally {
        // await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Food hub is ready')
})

app.listen(port, () => {
    console.log('listening port', port)
})