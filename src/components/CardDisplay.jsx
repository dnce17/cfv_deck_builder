// TODO
// Deck List: Click = Remove from deck
// Card List: Click = Add to deck

const CardDisplay = ({ cardToDisplay, setHoveredCard, setDeckList, deckList }) => {
  const MAX_NON_TRIGGER_CARDS = 34;
  const MAX_TRIGGER_CARDS = 16;
  const MAX_COPIES = 4;
  
  const addToDeckList = (clickedCard) => {
    const cardCount = deckList.filter(card => card.id == clickedCard.id).length;
    if (cardCount != MAX_COPIES && deckList.length < MAX_NON_TRIGGER_CARDS) {
      setDeckList([...deckList, clickedCard]);
    }
  }

  return (
    <div
      key={cardToDisplay.id}
      className='bg-slate-300 w-[60px] h-[86.25px] rounded-xl'
      onMouseEnter={() => setHoveredCard(cardToDisplay)}
      onClick={() => addToDeckList(cardToDisplay)}
    >
      <img src={cardToDisplay.imgPath} />
    </div>
  )
}

export default CardDisplay