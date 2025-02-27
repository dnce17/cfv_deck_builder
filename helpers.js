const MAIN_DECK_LIMIT = 50;
let RIDE_DECK_LIMIT = 4;  // Some cards allow changes to ride deck limit

const MAX_CRITICAL = 8, MAX_DRAW = 8, MAX_FRONT = 8;
const MAX_HEAL = 4;
const MAX_OVER = 1;
const TRIGGER_LIMIT = 16;

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

export {
  filterDropdownOptions,
  checkHandler,
  getCardsByType,
  getCardCount,
  isTriggerLimitReached,
  isMaxTriggerTypeReached,
  MAIN_DECK_LIMIT,
  RIDE_DECK_LIMIT
};




// ---------
// TO USE/FINISH IN FUTURE
const isMaxTriggerTypeReached = (deckList, triggerType) => {
  const triggerTypeCount = getCardsByType(deckList, triggerType, 'triggerType').length;

  switch (triggerType) {
    case 'Critical':
      return triggerTypeCount < MAX_CRITICAL ? false : true;
    case 'Heal':
      return triggerTypeCount < MAX_HEAL ? false : true;
    case 'Draw':
      return triggerTypeCount < MAX_DRAW ? false : true;
    case 'Front':
      return triggerTypeCount < MAX_FRONT ? false : true;
    case 'Over':
      return triggerTypeCount < MAX_OVER ? false : true;
  }

}

const isTriggerLimitReached = (deckList) => {
  const triggerUnitCount = getCardsByType(deckList, 'Trigger').length;
  // console.log(triggerUnitCount);

  return (triggerUnitCount < TRIGGER_LIMIT) ? false : true;
}

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