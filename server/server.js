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

app.get('/api/get-default-deck', (req, res) => {
	console.log('DEFAULT DECK');

	fs.readFile(decksPath, 'utf8', (err, data) => {
		if (err) {
			res.status(500).json({ error: 'Failed to read deck data' });
			return;
		}

		let deckObj;
		if (data) {
			deckObj = JSON.parse(data); // Copy over existing deck data
		}

		const defaultDeck = deckObj.decks.filter(deck => deck.default == true);

		if (defaultDeck.length < 1) {
			res.status(500).json({ error: 'No existing default deck' });
			return;
		}

		res.send({
			deckName: defaultDeck[0].name,
			mainDeck: defaultDeck[0].mainDeck,
			rideDeck: defaultDeck[0].rideDeck,
		})
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

app.post('/api/rename-deck', (req, res) => {
	const nameData = req.body;
	const deckRename = nameData.deckRename.trim();
	const deckName = nameData.deckName.trim();

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
			if (existingName == deckRename) {
				res.send(false);
				return false;
			}
		}

		// If name does NOT exist, actually change the name ACTUALLY CHANGE the name in the deck.json itself, so delete deck will work properly
		// without this, renaming and then deleting = deck will not be recognized in deck.json

		// Cycle through it again
		// IF found the currently loaded deck with deckName
		// 	Replace that name with the new name
		// ELSE
		// 	This is a brand new deck, so do nothing

		for (let deck of deckObj.decks) {
			const deckNameToChange = deck.name.trim();
			if (deckNameToChange == deckName) {
				console.log('Change EXISTING deck name');
				deck.name = deckRename;
			}
		}

		// Finalize deck update
		fs.writeFile(decksPath, JSON.stringify(deckObj, null, 2), 'utf8', (writeErr) => {
			if (writeErr) {
				console.error('Error writing file:', writeErr);
			}
			else {
				console.log('Deck rename success!');
				res.status(201).json({ message: 'Deck rename success!', deckRename: deckRename });
			}
		});

		return true;

	});
});

app.post('/api/delete-deck', (req, res) => {
	const clientData = req.body;

	fs.readFile(decksPath, 'utf8', (err, data) => {
		if (err) {
			res.status(500).json({ error: 'Failed to read deck data' });
			return;
		}

		let deckObj;
		if (data) {
			deckObj = JSON.parse(data); // Copy over existing deck data
		}

		// Delete deck through filtering
		const filteredDeckObj = deckObj.decks.filter(deck => deck.name.trim() != clientData.name.trim());
		deckObj.decks = filteredDeckObj;

		// If deckObj has no decks now, add an untitled deck to JSON
		if (deckObj.decks.length == 0) {
			const untitledDeck = {
				"id": "some user's id",
				"name": "Untitled",
				"default": true,
				"mainDeck": [],
				"rideDeck": []
			}
			deckObj.decks.push(untitledDeck);
		}

		fs.writeFile(decksPath, JSON.stringify(deckObj, null, 2), 'utf8', (writeErr) => {
			if (writeErr) {
				console.error('Error writing file:', writeErr);
			}

			console.log('Deck Deletion Successful')
		});

		// TODO: Send over the first deckList and deckName of the decks.json as the one to go to after deletion
		res.send({
			name: deckObj.decks[0].name,
			mainDeck: deckObj.decks[0].mainDeck,
			rideDeck: deckObj.decks[0].rideDeck,
		})
	});
});

app.listen(5000, () => console.log(`Server running on port 5000`));
