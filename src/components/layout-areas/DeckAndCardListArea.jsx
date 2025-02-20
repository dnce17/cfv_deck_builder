import { useState, useEffect } from 'react';
import CardListSection from '../CardListSection';
import DeckNameSection from '../DeckNameSection';
import CardDisplay from '../CardDisplay';
import Checkbox from '../CheckBox';
import { checkHandler } from '../../../helpers';

import { RxTriangleLeft, RxTriangleRight } from "react-icons/rx";

import PlaceholderCard from '../PlaceholderCard'

const DeckAndCardListArea = ({
  filteredCardList,
  setHoveredCard,
  setDeckList,
  deckList,
}) => {

  const [addToRideDeck, setAddToRideDeck] = useState(false);

  const [nonTriggerList, setNonTriggerList] = useState('');
  const [triggerList, setTriggerList] = useState('');

  const categorizeDeckList = () => {
    setNonTriggerList(deckList.filter(card => !card.cardType.includes('Trigger')));
    setTriggerList(deckList.filter(card => card.cardType.includes('Trigger')));
    // console.log('---UPDATED----');
    // console.log(nonTriggerList);
    // console.log(triggerList);
  }

  useEffect(() => {
    categorizeDeckList();
  }, [deckList])

  return (
    <section className='deckAndCardList-area flex'>
      {/* Note: Do NOT add space after comma in repeat(); Tailwind will actually interpret it wrong */}
      <div className='grid grid-rows-[0.8fr_repeat(5,1fr)] w-[70%] border-3 border-[#007C90] h-full'>
        <DeckNameSection />

        {/* Non-triggers */}
        <div className='bg-[#0F232E] row-span-3 p-2 grid grid-cols-10 gap-2 auto-rows-max overflow-y-auto'>
          {/* {Array.from({ length: 20 }, (_, i) =>
            <PlaceholderCard key={i} />
          )} */}
          {Array.from({ length: deckList.length }, (_, i) =>
            <CardDisplay
              key={i}
              cardToDisplay={deckList[i]}
              setHoveredCard={setHoveredCard}
              setDeckList={setDeckList}
              deckList={deckList}
              checkToCardList={false}
            />
          )}

          {/* {Array.from({ length: nonTriggerList.length }, (_, i) =>
            <CardDisplay
              key={i}
              cardToDisplay={nonTriggerList[i]}
              setHoveredCard={setHoveredCard}
              setDeckList={setDeckList}
              deckList={deckList}
            />
          )} */}

        </div>

        {/* Triggers */}
        <div className='bg-[#0F232E] border-y-3 border-[#007C90] flex items-center pl-2 gap-2'>
          {/* {Array.from({ length: 4 }, (_, i) =>
            <PlaceholderCard key={i} />
          )} */}

          {/* {Array.from({ length: triggerList.length }, (_, i) =>
            <CardDisplay
              key={i}
              cardToDisplay={triggerList[i]}
              setHoveredCard={setHoveredCard}
              setDeckList={setDeckList}
              deckList={deckList}
            />
          )} */}
        </div>

        <div className='bg-[#0F232E] flex items-center pl-2 gap-2 relative'>
          {/* {Array.from({ length: 4 }, (_, i) =>
            <PlaceholderCard key={i} />
          )}
          <div className='absolute right-1 bottom-1'>
            <Checkbox
              header='Add to Rideline'
              inputClassName='w-[15px] h-[15px]'
              headerClassName='text-xs mr-1'
              currentValue={addToRideDeck}
              onChange={() => checkHandler(addToRideDeck, setAddToRideDeck)}
            />
          </div> */}
        </div>
      </div>

      <CardListSection
        cardsToDisplay={
          Array.from({ length: filteredCardList.length }, (_, i) =>
            // <PlaceholderCard key={i} />
            <CardDisplay
              key={filteredCardList[i].id}
              cardToDisplay={filteredCardList[i]}
              setHoveredCard={setHoveredCard}
              setDeckList={setDeckList}
              deckList={deckList}
              checkToCardList={true}
            />
          )
        }
      />

    </section>
  )
}

export default DeckAndCardListArea