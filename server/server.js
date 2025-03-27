import express from 'express'
import cors from 'cors'
import fs from 'fs';
import path from 'path';

const app = express();
app.use(cors());

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

app.listen(5000, () => console.log(`Server running on port 5000`));
