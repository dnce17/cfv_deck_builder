import { useState } from 'react';
import TextInputBox from '../TextInputBox';
import Btn from '../Btn'
import { RxTriangleLeft, RxTriangleRight } from "react-icons/rx";
import { FaPencil } from "react-icons/fa6";

import PlaceholderCard from '../PlaceholderCard'

const DeckAndCardListArea = () => {
  const [deckName, setDeckName] = useState('');

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
            {/* <input
              type='text'
              value='Untitled'
              className='bg-[#6CC6EC] border-3 border-[#1E72BE] text-black text-2xl py-2 pl-4 pr-16 text-center w-[300px] rounded-4xl'
            /> */}
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
        {/* <div className='bg-green-800 row-span-3 p-2 grid grid-cols-8 gap-[5px] auto-rows-max'> */}
        <div className='bg-[#0F232E] row-span-3 p-2 grid grid-cols-10 gap-2 auto-rows-max overflow-y-auto'>
          {Array.from({ length: 20 }, (_, i) =>
            <PlaceholderCard key={i} />
          )}
        </div>
        <div className='bg-[#0F232E] border-y-3 border-[#007C90] flex items-center pl-2 gap-2'>
          {Array.from({ length: 4 }, (_, i) =>
            <PlaceholderCard key={i} />
          )}
        </div>
        <div className='bg-[#0F232E] flex items-center pl-2 gap-2'>
          {Array.from({ length: 5 }, (_, i) =>
            <PlaceholderCard key={i} />
          )}
        </div>
      </div>

      <div className='bg-[#0F232E] border-3 border-[#007C90] flex items-center flex-col flex-1'>
        <div className='flex items-center'>
          <RxTriangleLeft size={50} />
          <p className='text-3xl'>1/10</p>
          <RxTriangleRight size={50} />
        </div>
        <div className='grid grid-cols-4 p-2 gap-x-3 gap-y-5 auto-rows-max'>
          {Array.from({ length: 20 }, (_, i) =>
            <PlaceholderCard key={i} />
          )}
        </div>
      </div>

    </section>
  )
}

export default DeckAndCardListArea