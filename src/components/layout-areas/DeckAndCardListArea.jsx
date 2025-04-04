import { useState, useEffect } from 'react';
import SectionCardList from '../SectionCardList';
import SectionDeckName from '../SectionDeckName';
import CardDisplay from '../CardDisplay';
import Checkbox from '../CheckBox';
import { checkHandler } from '../../../helpers';

import PlaceholderCard from '../PlaceholderCard'

const DeckAndCardListArea = ({
  filteredCardList,
  setHoveredCard,
  setDeckName,
  deckName,
  setDeckList,
  deckList,
  setShowPopupInvalid,
  setResetPagination,
  resetPagination,
  setShowPopupRenameDeck,
  setShowPopupSaveAs,
  BoxTextInput
}) => {

  const [addToRideDeck, setAddToRideDeck] = useState(false);

  const [nonTriggerList, setNonTriggerList] = useState('');
  const [triggerList, setTriggerList] = useState('');

  const categorizeDeckList = () => {
    setNonTriggerList(deckList.mainDeck.filter(card => !card.cardType.includes('Trigger')));
    setTriggerList(deckList.mainDeck.filter(card => card.cardType.includes('Trigger')));
  }

  useEffect(() => {
    categorizeDeckList();
  }, [deckList])

  return (
    <section className='deckAndCardList-area flex'>
      {/* Note: Do NOT add space after comma in repeat(); Tailwind will actually interpret it wrong */}
      <div className='grid grid-rows-[0.8fr_repeat(5,1fr)] w-[70%] border-3 border-[#007C90] h-full'>
        <SectionDeckName
          deckName={deckName}
          deckList={deckList}
          setDeckName={setDeckName}
          setDeckList={setDeckList} 
          setShowPopupInvalid={setShowPopupInvalid}
          setShowPopupRenameDeck={setShowPopupRenameDeck}
          setShowPopupSaveAs={setShowPopupSaveAs}
          BoxTextInput={BoxTextInput}
        />

        {/* Non-triggers */}
        <div className='bg-[#0F232E] row-span-3 p-2 grid grid-cols-10 gap-2 auto-rows-max overflow-y-auto'>
          {/* {Array.from({ length: 20 }, (_, i) =>
            <PlaceholderCard key={i} />
          )} */}

          {Array.from({ length: nonTriggerList.length }, (_, i) =>
            <CardDisplay
              key={i}
              cardToDisplay={nonTriggerList[i]}
              setHoveredCard={setHoveredCard}
              setDeckList={setDeckList}
              deckType='mainDeck'
              deckList={deckList}

            />
          )}
        </div>

        {/* Triggers */}
        <div className='bg-[#0F232E] border-y-3 border-[#007C90] grid grid-cols-10 p-1 gap-2 place-items-center overflow-y-auto'>
          {Array.from({ length: triggerList.length }, (_, i) =>
            <CardDisplay
              key={i}
              cardToDisplay={triggerList[i]}
              setHoveredCard={setHoveredCard}
              setDeckList={setDeckList}
              deckList={deckList}
              deckType='mainDeck'
              checkToCardList={false}
            />
          )}
        </div>

        {/* Ride Deck */}
        <div className='bg-[#0F232E] flex items-center pl-2 gap-2 relative'>
          {Array.from({ length: deckList.rideDeck.length }, (_, i) =>
            <CardDisplay
              key={i}
              cardToDisplay={deckList.rideDeck[i]}
              setHoveredCard={setHoveredCard}
              setDeckList={setDeckList}
              deckList={deckList}
              deckType='rideDeck'
              checkToCardList={false}
            />
          )}
          <div className='absolute right-1 bottom-1'>
            <Checkbox
              header='Add to Ride Deck'
              inputClassName='w-[15px] h-[15px]'
              headerClassName='text-xs mr-1'
              currentValue={addToRideDeck}
              onChange={() => checkHandler(addToRideDeck, setAddToRideDeck)}
            />
          </div>
        </div>
      </div>

      <SectionCardList
        cardsToDisplay={
          Array.from({ length: filteredCardList.length }, (_, i) =>
            <CardDisplay
              key={filteredCardList[i].id}
              cardToDisplay={filteredCardList[i]}
              setHoveredCard={setHoveredCard}
              setDeckList={setDeckList}
              deckList={deckList}
              deckType={addToRideDeck ? 'rideDeck' : 'mainDeck'}
              checkToCardList={true}
            />
          )
        }
        setResetPagination={setResetPagination}
        resetPagination={resetPagination}
      />

    </section>
  )
}

export default DeckAndCardListArea