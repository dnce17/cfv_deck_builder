const MAIN_DECK_LIMIT = 50;
let RIDE_DECK_LIMIT = 4;  // Some cards allow changes to ride deck limit

const MAX_CRITICAL = 4, MAX_DRAW = 8, MAX_FRONT = 8;
const MAX_HEAL = 4;
const MAX_OVER = 1;
const TRIGGER_LIMIT = 16;

const SHOW_PER_PAGE = 20;  // Show 20 cards per pg in card list

const TEST_DECK = [
  {
    "id": 1,
    "name": "Chakrabarthi Divine Dragon, Nirvana",
    "imgPath": "./src/assets/card-imgs/1_chakrabarthi_divine_dragon_nirvana.jpg",
    "grade": 3,
    "skill": "Twin Drive",
    "icon": "Persona Ride",
    "power": "13000",
    "critical": "1",
    "shield": 0,
    "nation": "Dragon Empire",
    "clan": "",
    "race": "Flame Dragon",
    "cardType": "Normal Unit",
    "triggerType": "",
    "triggerEffect": "",
    "rideline": "",
    "format": "Standard / Premium",
    "text": "[ACT](VC)1/Turn:COST [Discard a card from your hand], choose a grade 0 card from your drop, and call it to (RC). <br/>[AUTO](VC):When this unit attacks, COST [Counter Blast (1)], and this unit and all of your units with the [overDress] ability get [Power]+10000 until end of turn.\n",
    "maxCopies": 4
  },
  {
    "id": 2,
    "name": "Blaze Maiden, Reiyu",
    "imgPath": "./src/assets/card-imgs/2_blaze_maiden_reiyu.jpg",
    "grade": 2,
    "skill": "Intercept",
    "icon": "",
    "power": "10000",
    "critical": "1",
    "shield": "5000",
    "nation": "Dragon Empire",
    "clan": "",
    "race": "Human",
    "cardType": "Normal Unit",
    "triggerType": "",
    "triggerEffect": "",
    "rideline": "",
    "format": "Standard / Premium",
    "text": "[AUTO]:When this unit is rode upon by \"Chakrabarthi Divine Dragon, Nirvana\", COST [Soul Blast (1)], search your deck for up to one \"Vairina\", reveal it and put it into your hand, and shuffle your deck.<br/>[CONT](VC/RC):During the battle this unit attacked, this unit gets [Power]+2000.\n",
    "maxCopies": 4
  },
];

const TEST_DROP = [
  {
    "id": 19,
    "name": "Aurora Battle Princess, Ruby Red",
    "imgPath": "./src/assets/card-imgs/19_aurora_battle_princess_ruby_red.jpg",
    "grade": 0,
    "skill": "Boost",
    "icon": "",
    "power": "6000",
    "critical": "1",
    "shield": "5000",
    "nation": "Brandt Gate",
    "clan": "",
    "race": "Human",
    "cardType": "Normal Unit",
    "triggerType": "",
    "triggerEffect": "",
    "rideline": "",
    "format": "Standard / Premium",
    "text": "[AUTO]:When this unit is rode upon, if you went second, draw a card.\n",
    "maxCopies": 4
  },
  {
    "id": 20,
    "name": "Alert Guard Gunner",
    "imgPath": "./src/assets/card-imgs/20_alert_guard_gunner.jpg",
    "grade": 3,
    "skill": "Twin Drive",
    "icon": "Persona Ride",
    "power": "13000",
    "critical": "1",
    "shield": 0,
    "nation": "Brandt Gate",
    "clan": "",
    "race": "Battleroid",
    "cardType": "Normal Unit",
    "triggerType": "",
    "triggerEffect": "",
    "rideline": "",
    "format": "Standard / Premium",
    "text": "[AUTO](RC):When this unit's attack hits a vanguard, choose up to two of your opponent's rear-guards, and imprison them in your Prison. (Put them into your Order Zone that has a Prison)\n",
    "maxCopies": 4
  },
  {
    "id": 21,
    "name": "Security Patroller",
    "imgPath": "./src/assets/card-imgs/21_security_patroller.jpg",
    "grade": 2,
    "skill": "Intercept",
    "icon": "",
    "power": "10000",
    "critical": "1",
    "shield": "5000",
    "nation": "Brandt Gate",
    "clan": "",
    "race": "Battleroid",
    "cardType": "Normal Unit",
    "triggerType": "",
    "triggerEffect": "",
    "rideline": "",
    "format": "Standard / Premium",
    "text": "[AUTO]:When this unit is placed on (RC), COST [Soul Blast (1)], choose one of your opponent's rear-guards, and imprison it in your Prison. (Put it into your Order Zone that has a Prison)\n",
    "maxCopies": 4
  },
];

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

const isDeckValid = (deckList) => {
  // Deck validation check before saving
  // Click "Save"
  // Validate deck
  // if deck is invalid (aka if invalidMsgs.length > 0)
  // Show the InvalidDeckPopup component with the errMsgs
  // else
  // Save deck to database (which we haven't implemented yet)
  // PLACEHOLDER: console log that deck is valid

  let invalidMsgs = getInvalidDeckMsgs(deckList);

  if (invalidMsgs.length > 0) {
    // TODO: Need to show InvalidDeckPopup; NOT here, but just a note
    console.log('Deck is NOT valid!');
    return false;
  }

  // TODO: Need to save to an actual database. NOT here, but just a note
  console.log('Deck is valid!');
  return true;

}

export {
  TEST_DECK,
  TEST_DROP,
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
  isNationMixed
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