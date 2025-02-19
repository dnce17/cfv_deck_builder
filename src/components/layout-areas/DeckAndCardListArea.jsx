import { useState, useEffect } from 'react';
import CardDisplay from '../CardDisplay';
import Checkbox from '../CheckBox';
import TextInputBox from '../TextInputBox';
import Btn from '../Btn'

import { checkHandler } from '../../../helpers';

import { RxTriangleLeft, RxTriangleRight } from "react-icons/rx";
import { FaPencil } from "react-icons/fa6";

import PlaceholderCard from '../PlaceholderCard'

const DeckAndCardListArea = ({ filteredCardList, setHoveredCard, setDeckList, deckList }) => {
  const [deckName, setDeckName] = useState('');
  const [addToRideline, setAddToRideline] = useState(false);

  const [nonTriggerList, setNonTriggerList] = useState('');
  const [triggerList, setTriggerList] = useState('');
  const [ridelineList, setRidelineList] = useState('');

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
        <div className='bg-linear-to-t from-[#00627A] to-[#05374F] border-b-3 border-[#007C90] flex justify-evenly items-center'>
          <Btn
            text='Clear'
            textColor='text-[#BFB456]'
            borderColor='border-[#857D30]'
            dropShadow='drop-shadow-[0px_0px_4px_#4B3A0B]'
            fromGradient='from-[#AC951E]'
            toGradient='to-[#4B3A0B]'
          />
          <div className='flex relative'>
            <TextInputBox
              className='bg-[#6CD5EC] border-3 border-[#1E72BE] text-black text-2xl py-2 pl-4 pr-16 text-center w-[300px] rounded-4xl'
              currentValue={deckName}
              placeholder='Deck Name'
              onChange={setDeckName}
              headerVisible={false}
            />
            <FaPencil size={60} className='absolute right-0 top-[50%] translate-y-[-50%] rounded-[50%] bg-[#004996] p-3 overflow-visible border-3 border-[#1E72BE]' />
          </div>
          <Btn
            text='Save'
            textColor='text-[#23AD5C]'
            borderColor='border-[#2A824B]'
            dropShadow='drop-shadow-[0px_0px_4px_#10361A]'
            fromGradient='from-[#0F8631]'
            toGradient='to-[#10361A]'
          />
        </div>

        {/* Non-triggers */}
        <div className='bg-[#0F232E] row-span-3 p-2 grid grid-cols-10 gap-2 auto-rows-max overflow-y-auto'>
          {/* {Array.from({ length: 20 }, (_, i) =>
            <PlaceholderCard key={i} />
          )} */}
          {/* {Array.from({ length: deckList.length }, (_, i) =>
            <CardDisplay
              key={i}
              cardToDisplay={deckList[i]}
              setHoveredCard={setHoveredCard}
              setDeckList={setDeckList}
              deckList={deckList}
            />
          )} */}

          {Array.from({ length: nonTriggerList.length }, (_, i) =>
            <CardDisplay
              key={i}
              cardToDisplay={nonTriggerList[i]}
              setHoveredCard={setHoveredCard}
              setDeckList={setDeckList}
              deckList={deckList}
            />
          )}

        </div>

        {/* Triggers */}
        <div className='bg-[#0F232E] border-y-3 border-[#007C90] flex items-center pl-2 gap-2'>
          {/* {Array.from({ length: 4 }, (_, i) =>
            <PlaceholderCard key={i} />
          )} */}

          {Array.from({ length: triggerList.length }, (_, i) =>
            <CardDisplay
              key={i}
              cardToDisplay={triggerList[i]}
              setHoveredCard={setHoveredCard}
              setDeckList={setDeckList}
              deckList={deckList}
            />
          )}
        </div>

        {/* Rideline */}
        {/* <div className='bg-[#0F232E] flex items-center pl-2 gap-2'>
          {Array.from({ length: 5 }, (_, i) =>
            <PlaceholderCard key={i} />
          )}
        </div> */}

        <div className='bg-[#0F232E] flex items-center pl-2 gap-2 relative'>
          {Array.from({ length: 5 }, (_, i) =>
            <PlaceholderCard key={i} />
          )}
          <div className='absolute right-1 bottom-1'>
            <Checkbox
              header='Add to Rideline'
              inputClassName='w-[15px] h-[15px]'
              headerClassName='text-xs mr-1'
              currentValue={addToRideline}
              onChange={() => checkHandler(addToRideline, setAddToRideline)}
            />
          </div>
        </div>
      </div>

      {/* Card List */}
      <div className='bg-[#0F232E] border-3 border-[#007C90] relative flex items-center flex-col flex-1'>
        <div className='flex items-center'>
          <RxTriangleLeft size={50} />
          <p className='text-3xl'>1/10</p>
          <RxTriangleRight size={50} />
        </div>
        <div className='grid grid-cols-4 p-2 gap-x-3 gap-y-5 auto-rows-max'>
          {Array.from({ length: filteredCardList.length }, (_, i) =>
            // <PlaceholderCard key={i} />
            <CardDisplay
              key={filteredCardList[i].id}
              cardToDisplay={filteredCardList[i]}
              setHoveredCard={setHoveredCard}
              setDeckList={setDeckList}
              deckList={deckList}
            />
          )}
        </div>
      </div>

    </section>
  )
}

export default DeckAndCardListArea