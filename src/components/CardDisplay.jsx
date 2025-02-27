import { getCardCount, MAIN_DECK_LIMIT, RIDE_DECK_LIMIT } from "../../helpers";

const CardDisplay = ({
  cardToDisplay,
  setHoveredCard,
  setDeckList,
  deckList,
  deckType,
  checkToCardList,
}) => {

  const updateArrIndex = (arr) => {
    let arrIndex = 0;
    for (const item of arr) {
      item.arrIndex = arrIndex;
      arrIndex++;
    }
  }

  const addToDeckList = (clickedCard) => {
    const cardCount = getCardCount(deckList, clickedCard);
    const deckLimit = deckType == 'rideDeck' ? RIDE_DECK_LIMIT : MAIN_DECK_LIMIT;

    // Avoids ref to same obj (aka dup cards)
    // WHY: If you change a card, changes will apply to ALL dups
    const clonedCard = { ...clickedCard };
    clonedCard.arrIndex = deckList[deckType].length;

    if (cardCount != clickedCard.maxCopies && deckList[deckType].length < deckLimit) {
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
      onClick={() => checkToCardList ? addToDeckList(cardToDisplay) : removeFromDeckList(cardToDisplay)}
    >
      <img src={cardToDisplay.imgPath} />
    </div>
  )
}

export default CardDisplay