import fs from 'fs';

const saveDeckToJSON = (decksPath, dataToSave, res) => {
  fs.readFile(decksPath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to read deck data for modification purposes' });
      return;
    }

    let deckObj;
    if (data) {
      deckObj = JSON.parse(data); // Copy over existing deck data
    }

    // deckObj.decks.push(dataToSave);  // TODO: CHECK if deck already exist based on name. If so, overwrite it

    // Modify deck if already exist or add new deck

    // PSEUDO
    // Check if deck name already exist
    // console.log(deckObj.decks[0].mainDeck)

    for (let [i, deck] of deckObj.decks.entries()) {
      // console.log(deck.name);
      const existingName = deck.name.trim();

      if (existingName == dataToSave.name.trim()) {
        // console.log(existingName);
        deck.mainDeck = dataToSave.mainDeck;
        deck.rideDeck = dataToSave.rideDeck;
        console.log('Existing deck updated!');
        break;
      }

      // For loop not breaking means this deck is new
      if (i == deckObj.decks.length - 1) {
        deckObj.decks.push(dataToSave);
      }
    }

    // Finalize deck update
    fs.writeFile(decksPath, JSON.stringify(deckObj, null, 2), 'utf8', (writeErr) => {
      if (writeErr) {
        console.error('Error writing file:', writeErr);
      }
      else {
        console.log('Deck saved successfully!');
        res.status(201).json({ message: 'Deck saved successfully!', deck: dataToSave });
      }
    });
  });
}

export { saveDeckToJSON }