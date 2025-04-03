import fs from 'fs'
import Axios from 'axios'

const MAIN_DECK_LIMIT = 50;
let RIDE_DECK_LIMIT = 4;  // Some cards allow changes to ride deck limit

const MAX_CRITICAL = 4, MAX_DRAW = 8, MAX_FRONT = 8;
const MAX_HEAL = 4;
const MAX_OVER = 1;
const TRIGGER_LIMIT = 16;

const SHOW_PER_PAGE = 20;  // Show 20 cards per pg in card list

const filterDropdownOptions = {
  triggers: ['', 'Critical', 'Heal', 'Draw', 'Front', 'Over'],
  nations: [
    '',
    'Dragon Empire',
    'Dark States',
    'Brandt Gate',
    'Keter Sanctuary',
    'Stoicheia',
    'Lyrical Monasterio',
  ],
  cardTypes: [
    '',
    'All Units',
    'All Orders',
    'Normal Unit',
    'Trigger Unit',
    'Normal Order',
    'Blitz Order',
    'Set Order',
    'Trigger Order',
    'Crest'
  ]
}

const paginate = (cards, currentPg) => {
  // Calculate the starting and ending indices
  let start = (currentPg - 1) * SHOW_PER_PAGE;
  let end = start + SHOW_PER_PAGE;

  // Calculate total number of pages; default to 1 if no cards
  let totalPg = cards.length > 0 ? Math.ceil(cards.length / SHOW_PER_PAGE) : 1;

  // Slice the cards to get the cards for the current page
  let cardsOnPg = cards.slice(start, end);

  return [totalPg, cardsOnPg];
}

const checkHandler = (isChecked, setIsChecked) => {
  setIsChecked(!isChecked)
}

// const checkHandler = (setIsChecked, toggle1, toggle2) => {
//   setIsChecked((isChecked) => {
//     return isChecked == toggle1 ? toggle2 : toggle1;
//   })
// }

const getCardCount = (deckList, specificCard) => {
  // Counts the number of occurrences of a specific card in the deck.
  const countInMainDeck = deckList.mainDeck.filter(card => card.id == specificCard.id).length;
  const countInRideDeck = deckList.rideDeck.filter(card => card.id == specificCard.id).length;

  return (countInMainDeck + countInRideDeck);
}

const getCardsByType = (deckList, type, property = 'cardType') => {
  const mainDeckTriggers = deckList.mainDeck.filter(card => card[property].toLowerCase().trim().includes(type.toLowerCase().trim()));
  const rideDeckTriggers = deckList.rideDeck.filter(card => card[property].toLowerCase().trim().includes(type.toLowerCase().trim()));

  return mainDeckTriggers.concat(rideDeckTriggers);
}

const isMaxTriggerTypeReached = (deckList, triggerType) => {
  const triggerTypeCount = getCardsByType(deckList, triggerType, 'triggerType').length;

  switch (triggerType) {
    case 'Critical':
      return triggerTypeCount > MAX_CRITICAL ? true : false;
    case 'Heal':
      return triggerTypeCount > MAX_HEAL ? true : false;
    case 'Draw':
      return triggerTypeCount > MAX_DRAW ? true : false;
    case 'Front':
      return triggerTypeCount > MAX_FRONT ? true : false;
    case 'Over':
      return triggerTypeCount > MAX_OVER ? true : false;
  }
}

const validateCount = (count, limit, msg, invalidMsgsArr) => {
  if (count != limit) {
    invalidMsgsArr.push(msg);
  }
};

const isNationMixed = (deckList) => {

  const getUniqueNations = (deck, arr) => {
    deck.forEach(card => {
      if (card.nation !== '') {  // Nationless does not count as a nation
        arr.add(card.nation);
      }
    })
  }

  let nations = new Set(); // Set() only allows unique values, but must be converted to arr since it's obj
  getUniqueNations(deckList.mainDeck, nations);
  getUniqueNations(deckList.rideDeck, nations);

  return Array.from(nations).length > 1 ? true : false;
}

const getInvalidDeckMsgs = (deckList) => {
  let invalidMsgs = []
  const beyondMaxTriggerTypeMsg = (limit, triggerType) => `Only a max of ${limit} ${triggerType} triggers is allowed in deck`;

  console.log(deckList.mainDeck);
  const mainDeckCount = deckList.mainDeck.length;
  const rideDeckCount = deckList.rideDeck.length;
  const triggerUnitCount = getCardsByType(deckList, 'Trigger').length;

  // Main deck must contain 50 cards
  validateCount(mainDeckCount, MAIN_DECK_LIMIT, `Main deck must contain ${MAIN_DECK_LIMIT} cards`, invalidMsgs);

  // Ride deck must contain 4 cards (WITH EXCEPTIONS, but will focus on later)
  validateCount(rideDeckCount, RIDE_DECK_LIMIT, `Ride deck must contain ${RIDE_DECK_LIMIT} cards`, invalidMsgs);

  // Exactly 16 trigger units must be in deck
  validateCount(triggerUnitCount, TRIGGER_LIMIT, `Exactly ${TRIGGER_LIMIT} trigger units must be in deck`, invalidMsgs);

  // Trigger Types and their limits
  const triggerLimits = [
    { type: 'Critical', limit: MAX_CRITICAL },  // No more than 8 criticals
    { type: 'Draw', limit: MAX_DRAW },  // No more than 8 draw
    { type: 'Front', limit: MAX_FRONT },  // No more than 8 fronts
    { type: 'Heal', limit: MAX_HEAL },  // No more than 4 heals
    { type: 'Over', limit: MAX_OVER }  // No more than 1 over
  ];

  triggerLimits.forEach((obj) => {
    if (isMaxTriggerTypeReached(deckList, obj.type)) {
      invalidMsgs.push(beyondMaxTriggerTypeMsg(obj.limit, obj.type));
    }
  });

  // Deck should only consist of 1 nation
  if (isNationMixed(deckList)) {
    invalidMsgs.push('Deck should only consist of 1 nation');
  }

  // If invalidMsgs has any msg inside, that means deck is invalid
  return invalidMsgs;
}

const isDeckValid = (deckName, deckList) => {
  let invalidMsgs = getInvalidDeckMsgs(deckList);

  if (invalidMsgs.length > 0) {
    console.log('Deck is NOT valid!');
    return false;
  }

  console.log('Deck is valid!');
  
  const saveDeck = async (deckData) => {
    try {
      const res = await Axios.post('http://localhost:5000/api/decks', deckData);
      console.log('Deck saved:', res.data);
    } catch (err) {
      console.error('Error saving deck:', err);
    }
  }

  saveDeck({
    deckName: deckName,
    mainDeck: deckList.mainDeck,
    rideDeck: deckList.rideDeck
  })
  return true;
}

const filterDb = (setFilteredCardList, filterVals, CardDb) => {
  const checkTextInputMatch = (card, property) => {
    // NOTE: .includes() already returns true/false
    return card[property].toLowerCase().includes(filterVals[property].trim().toLowerCase());
  }

  const checkSpecialCases = (card, property) => {
    let specialCases = [
      // FORMAT: [Filter Val, Substring] to detect in filter val
      ['All Units', 'Unit'],
      ['All Orders', 'Order']
    ];

    for (let casePair of specialCases) {
      if (filterVals[property] == casePair[0] && card[property].includes(casePair[1])) {
        return true;
      }
    }

    return false;
  }

  const filterTest = (card) => {
    // If even one property does not match, this card will not match at all
    for (let property in filterVals) {
      if (['name', 'text', 'race'].includes(property)) {
        if (checkTextInputMatch(card, property) == false) {
          return false;
        }
      }
      // NOTE: .includes() here is necessary to avoid errors
      // If cardTypes other than "All Units" or "All Orders" is selected, the very last else if below should check that
      else if (property == 'cardType' && ['All Units', 'All Orders'].includes(filterVals[property])) {
        if (checkSpecialCases(card, property) == false) {
          return false;
        }
      }
      else if (filterVals[property] != card[property]) {
        return false;
      }
    }

    return true; // If all checks pass, keep the card
  }

  // NOTE: filterVals has default value of falsy (e.g. '') rather than truthy (e.g. {} or [])
  // to ensure filter doesn't run on initial render and cause entire card db to be loaded
  if (filterVals) {
    setFilteredCardList(CardDb.cards.filter(filterTest));
  }
}

// ---- SERVER FUNCTIONS ---- 
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


export {
  MAIN_DECK_LIMIT,
  RIDE_DECK_LIMIT,
  filterDropdownOptions,
  checkHandler,
  paginate,
  getCardsByType,
  getCardCount,
  isMaxTriggerTypeReached,
  getInvalidDeckMsgs,
  isDeckValid,
  isNationMixed, 
  filterDb,

  // SERVER FUNCTIONS
  saveDeckToJSON
};




// ---------
// TO USE/FINISH IN FUTURE

// Card will go through various test to see if it can be added to deck
const canCardBeAddedToDeck = (deckList, clickedCard, deckType, isTrigger = false) => {
  const checkMaxTriggerTypeReached = isMaxTriggerTypeReached(deckList, clickedCard.triggerType);
  const checkTriggerLimitReached = isTriggerLimitReached(deckList);
  const cardCount = getCardCount(deckList, clickedCard);

  // Structured below for future proofing (in case I do preminum format =  G zone)
  // Check if deck count is at deck limit yet
  if (deckType == 'mainDeck' && deckList.mainDeck.length < MAIN_DECK_LIMIT) {
    return false;
  }
  else if (deckType == 'rideDeck' && deckList.rideDeck.length < RIDE_DECK_LIMIT) {
    return false;
  }


  // // Then the below
  // if (cardCount < clickedCard.maxCopies) {
  //   if (isTrigger) {
  //     if (checkMaxTriggerTypeReached || checkTriggerLimitReached) {
  //       return false;  // Exit function as card cannot be added
  //     }
  //   }

  // }

  // if (isTrigger) {
  //   if (checkMaxTriggerTypeReached || checkTriggerLimitReached || cardCount < clickedCard.maxCopies) {
  //     return false;  // Exit function as card cannot be added
  //   }
  // }
  // else {
  //   if (cardCount < clickedCard.maxCopies) {

  //   }
  // }

  // If clickedCard is a trigger
  // Check if trigger type exceeds limit (e.g. heal trigger limit = 4, over = 1)
  // if not, check if the total trigger in deck is less than 16
  // If non-trigger
  // Check if card exceeds limit of 4 (W/ EXCEPTION; some cards allow 16)
  // Lastly, check if main deck limit of 50 has been reached or ride deck of 4 (w/ EXCEPTIONS!)
  // NOTE: Maybe 34 instead since 16 trigger is mandatory? Might be confusing for players, so may be better
  // to do it as a "check the deck when user saves"
}

    // If clickedCard is a trigger
      // Check if trigger type exceeds limit (e.g. heal trigger limit = 4, over = 1)
      // if not, check if the total trigger in deck is less than 16
    // If non-trigger
      // Check if card exceeds limit of 4 (W/ EXCEPTION; some cards allow 16)
    // Lastly, check if main deck limit of 50 has been reached or ride deck of 4 (w/ EXCEPTIONS!)
      // NOTE: Maybe 34 instead since 16 trigger is mandatory? Might be confusing for players, so may be better
      // to do it as a "check the deck when user saves"