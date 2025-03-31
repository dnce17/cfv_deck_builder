import express from 'express'
import cors from 'cors'
import fs from 'fs';
import path from 'path';

import { saveDeckToJSON } from './helpers.js';

const app = express();
app.use(cors());

// Express does NOT parse JSON request bodies unless you explicitly tell it to; will get 'undefined' otherwise
app.use(express.json());

// Define the path to the JSON file
const decksPath = path.join(process.cwd(), 'data', 'decks.json');

app.get('/api', (req, res) => {
	res.send('Hello from backend!');
});

// API route to get the deck data
app.get('/api/decks', (req, res) => {
	fs.readFile(decksPath, 'utf8', (err, data) => {
		if (err) {
			res.status(500).json({ error: 'Failed to read deck data' });
			return;
		}
		res.json(JSON.parse(data));
	});
});

// TODO: Handle when user wants to save deck
app.post('/api/decks', (req, res) => {
	const data = req.body;

	const dataToSave = {
		"id": "PLACEHOLDER",
		"name": data.deckName.trim(),
		"default": false,
		"mainDeck": data.mainDeck,
		"rideDeck": data.rideDeck
	}

	saveDeckToJSON(decksPath, dataToSave, res);
});

app.listen(5000, () => console.log(`Server running on port 5000`));
