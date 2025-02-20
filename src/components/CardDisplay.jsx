// TODO
// Deck List: Click = Remove from deck
// Card List: Click = Add to deck

const CardDisplay = ({
  cardToDisplay,
  setHoveredCard,
  setDeckList,
  deckList,
  checkToCardList
}) => {
  const MAX_NON_TRIGGER_CARDS = 34;
  const MAX_TRIGGER_CARDS = 16;
  const MAX_COPIES = 4;

  const updateArrIndex = () => {
    let arrIndex = 0;
    for (const card of deckList) {
      card.arrIndex = arrIndex;
      arrIndex++;
    }
  }

  const addToDeckList = (clickedCard) => {
    const cardCount = deckList.filter(card => card.id == clickedCard.id).length;

    // Avoids ref to same obj (aka dup cards)
    // WHY: If you change a card, changes will apply to any dups
    const clonedCard = { ...clickedCard };
    clonedCard.arrIndex = deckList.length;

    if (cardCount != MAX_COPIES && deckList.length < MAX_NON_TRIGGER_CARDS) {
      setDeckList([...deckList, clonedCard]);
    }
  }

  const removeFromDeckList = (clickedCard) => {
    // console.log(`${clickedCard.arrIndex}: ${clickedCard.name}`);
    deckList.splice(clickedCard.arrIndex, 1);

    // Update each card's arrIndex in deck to ensure consecutive order
    updateArrIndex();
    setDeckList([...deckList]);
  }


  return (
    <div
      className='bg-slate-300 w-[60px] h-[86.25px] rounded-xl'
      onMouseEnter={() => setHoveredCard(cardToDisplay)}
      onClick={() => checkToCardList ? addToDeckList(cardToDisplay) : removeFromDeckList(cardToDisplay)}
    >
      <img src={cardToDisplay.imgPath} />
    </div>
  )
}

export default CardDisplay