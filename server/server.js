import express from 'express'
import cors from 'cors'
import fs from 'fs';
import path from 'path';

import { saveDeckToJSON } from '../helpers.js'; // server.js is not a jsx, so you need the .js extension here

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

// TODO: Change decks to save-deck
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

app.post('/api/check-deck-name', (req, res) => {
	const nameData = req.body;
	
	// Read deck.json
	fs.readFile(decksPath, 'utf8', (err, data) => {
		if (err) {
			res.status(500).json({ error: 'Failed to read deck data' });
			return;
		}

		let deckObj;
		if (data) {
			deckObj = JSON.parse(data); // Copy over existing deck data
		}

		for (let deck of deckObj.decks) {
			const existingName = deck.name.trim();
			if (existingName == nameData.deckRename.trim()) {
				res.send(false);
				return false;
			}
		}

		console.log('NAME GOOD');
		res.send(true);
		return true;

	});

	// Cycle though the decks
	// CHeck name and if any matches, return a "name already used msg"
});

app.listen(5000, () => console.log(`Server running on port 5000`));
