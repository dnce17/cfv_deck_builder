import { useState } from 'react'
import TextInputBox from './TextInputBox'
import InvalidDeckPopup from './InvalidDeckPopup'
import Btn from './Btn'

import { FaPencil } from 'react-icons/fa6'
import { isDeckValid } from '../../helpers'
import { useEffect } from 'react'

const DeckNameSection = ({ deckList, setDeckList, setShowInvalidPopup }) => {
  const [deckName, setDeckName] = useState('');

  // useEffect(() => {
  //   // console.log(isDeckValid(deckList));
  //   setDeckInvalid(isDeckValid(deckList));
  // }, [deckList]);
  
  
  return (
    <div className='bg-linear-to-t from-[#00627A] to-[#05374F] border-b-3 border-[#007C90] flex justify-evenly items-center'>
      <Btn
        text='Clear'
        textColor='text-[#BFB456]'
        borderColor='border-[#857D30]'
        dropShadow='drop-shadow-[0px_0px_4px_#4B3A0B]'
        fromGradient='from-[#AC951E]'
        toGradient='to-[#4B3A0B]'
        clickFunc={() => setDeckList({ mainDeck: [], rideDeck: [] })}
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
        clickFunc={() => setShowInvalidPopup(!isDeckValid(deckList))}  // NOTE: Careful here; the ! might confused you
      />
    </div>
  )
}

export default DeckNameSection