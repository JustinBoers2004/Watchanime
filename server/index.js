import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { MongoClient, ServerApiVersion } from 'mongodb';


app.use(express.static('public'))
app.use(cors());

const app = express()
const port = 3000
const databaseUrl = process.env.CONNECTION_URL;

const client = new MongoClient(databaseUrl, {

    serverApi: {

        version: ServerApiVersion.v1,

        strict: true,

        deprecationErrors: true,

    }

});

app.get('/episodecards', (req, res) => {

    fetchepisodes().then(episode => {
    
    res.json(episode);
    
    });
    
    });



async function fetchepisodes() {

    try {
    
    // connect the client to the server
    
    await client.connect();
    
    //we connection with the test database
    
    const database = client.db("WatchAnime");
    
    //we connect with the cheese collection
    
    const collection = database.collection('NarutoEpisodes');
    
    //we fetch the cheeses from our database
    
    const cheeses = await collection.find().toArray();
    
    //finally we return the cheeses
    
    return cheeses;
    
    } finally {
    
    // ensures that the client will close when you finish/error
    
    await client.close();
    
    }
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  