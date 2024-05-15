import express from 'express';
import {} from 'dotenv/config';
import { MongoClient } from 'mongodb';

const app = express();
const port = 3000;

const databaseUrl = process.env.CONNECTION_URL;
const client = new MongoClient(databaseUrl);

app.use(express.static('public'))

//working with the episode's but it doesn't work
app.get('/episodes/:episodeTitle', (req, res) => {
    console.log(req.params.episodeTitle);
    fetchEpisodes(req.params.episodeName).then(episodes => {
        res.json(episodes);
    });

});

app.get('/episodes', (req, res) => {
    fetchEpisodes().then(episodes => {
        res.json(episodes);
    });

});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

//this function returns all messages from the message collection in Mongodb
async function fetchEpisodes(name) {
    try {
        // connect the client to the server 
        await client.connect();
        //we connection with the dashboard database
        const database = client.db('WatchAnime');
        //we connect with the message collection
        const collection = database.collection('JujustsuKaisenEpisodes');
        //we fetch the messages from our database
        let episodes;
        if(name){
            episodes = await collection.find({name: name}).toArray();
        } else{
            episodes = await collection.find().toArray();
        }
        //finally we return the cheeses
        return episodes;
    } finally {
        // ensures that the client will close when you finish/error
        await client.close();
    }
}