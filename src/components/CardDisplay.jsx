// TODO
// Deck List: Click = Remove from deck
// Card List: Click = Add to deck

const CardDisplay = ({
  cardToDisplay,
  setHoveredCard,
  setDeckList,
  deckList,
  deckType,
  checkToCardList,
}) => {
  const MAX_NON_TRIGGER_CARDS = 34;

  // TODO: Account for trigger max
  const MAX_TRIGGER_CARDS = 16;
  const MAX_COPIES = 4;


  const updateArrIndex = (arr) => {
    let arrIndex = 0;
    for (const item of arr) {
      item.arrIndex = arrIndex;
      arrIndex++;
    }
  }

  const addToDeckList = (clickedCard) => {
    const countInMainDeck = deckList.mainDeck.filter(card => card.id == clickedCard.id).length;
    const countInRideDeck = deckList.rideDeck.filter(card => card.id == clickedCard.id).length;
    const cardCount = countInMainDeck + countInRideDeck;

    // Avoids ref to same obj (aka dup cards)
    // WHY: If you change a card, changes will apply to ALL dups
    const clonedCard = { ...clickedCard };
    clonedCard.arrIndex = deckList[deckType].length;

    // TODO: Account for maxes in main and ride deck
    if (cardCount != MAX_COPIES && deckList[deckType].length < MAX_NON_TRIGGER_CARDS) {
      setDeckList({
        ...deckList,
        [deckType]: [...deckList[deckType], clonedCard] // [] around key b/c I don't mean deckType itself, but it's string
      });
    }
  }

  const removeFromDeckList = (clickedCard) => {
    deckList[deckType].splice(clickedCard.arrIndex, 1);
    // // Update each card's arrIndex in deck to ensure consecutive order
    updateArrIndex(deckList[deckType]);
    // console.log(`${clickedCard.arrIndex}: ${clickedCard.name}`);
    setDeckList({ ...deckList });
  }

  return (
    <div
      className='bg-slate-300 w-[60px] h-[86.25px] rounded-xl'
      onMouseEnter={() => setHoveredCard(cardToDisplay)}
      // onClick={() => addToDeckList(cardToDisplay)}
      onClick={() => checkToCardList ? addToDeckList(cardToDisplay) : removeFromDeckList(cardToDisplay)}
    >
      <img src={cardToDisplay.imgPath} />
    </div>
  )
}

export default CardDisplay