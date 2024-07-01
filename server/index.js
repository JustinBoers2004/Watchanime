import express from 'express';
import {} from 'dotenv/config';
import { MongoClient } from 'mongodb';

const app = express();
const port = 3000;
//lees de connection string uit de environment file
const databaseUrl = process.env.CONNECTION_URL;
const client = new MongoClient(databaseUrl);

app.use(express.static('public'))


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

//Deze functie haalt de data van jujutsukaisen io
async function fetchjujutsukaisenepisodes() {
    try {
        // we verbinden de client met de server
        await client.connect();
        //hier verbinden we met de database, je moet nog wel een naam invullen
        const database = client.db('WatchAnime');
        //hier verbinden we met de collectie, je moet nog wel een naam invullen
        const collection = database.collection('JujustsuKaisenEpisodes');
        //hier halen we de documenten uit de collectie in de vorm van een array
        const jjkepisodes = await collection.find().toArray();
        //uiteindelijk geven we de documenten terug
        return jjkepisodes;
    } finally {
        //we zorgen ervoor dat aan het einde de database verbinding weer wordt gesloten
        await client.close();
    }
}

app.get('/JujustsuKaisenEpisodes', (req, res) => {
    //fetchDocuments() is een async functie dus zullen we met then() moeten werken
    fetchjujutsukaisenepisodes().then(jjkepisodes => {
        //in de then() geven we de documenten terug naar de browser in de vorm van json
        res.json(jjkepisodes);
    });
});

//Deze functie haalt de data van jujutsukaisen io
async function fetchjujutsuNarutoShippuden() {
    try {
        // we verbinden de client met de server
        await client.connect();
        //hier verbinden we met de database, je moet nog wel een naam invullen
        const database = client.db('WatchAnime');
        //hier verbinden we met de collectie, je moet nog wel een naam invullen
        const collection = database.collection('NarutoShippudenEpisodes');
        //hier halen we de documenten uit de collectie in de vorm van een array
        const NarutoShippudenEpisodes = await collection.find().toArray();
        //uiteindelijk geven we de documenten terug
        return NarutoShippudenEpisodes;
    } finally {
        //we zorgen ervoor dat aan het einde de database verbinding weer wordt gesloten
        await client.close();
    }
}

app.get('/NarutoShippudenEpisodes', (req, res) => {
    //fetchDocuments() is een async functie dus zullen we met then() moeten werken
    fetchjujutsuNarutoShippuden().then(NarutoShippudenEpisodes => {
        //in de then() geven we de documenten terug naar de browser in de vorm van json
        res.json(NarutoShippudenEpisodes);
    });
});