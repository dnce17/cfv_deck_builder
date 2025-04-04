import { useState } from 'react'
import BoxTextInput from './BoxTextInput'
import Btn from './Btn'
import { isDeckValid } from '../../helpers'

import { FaPencil } from 'react-icons/fa6'

const SectionDeckName = ({ deckName, deckList, setDeckList, setShowPopupInvalid, setShowPopupRenameDeck, setShowPopupSaveAs, BoxTextInput }) => {
  // const [deckName, setDeckName] = useState('');

  return (
    <div className='bg-linear-to-t from-[#00627A] to-[#05374F] border-b-3 border-[#007C90] flex justify-evenly items-center'>
      <Btn
        text='Delete'
        width='w-[70px]'
        height='h-[30px]'
        presetColor='red'
        clickFunc={() => setDeckList({ mainDeck: [], rideDeck: [] })}
      />
      <Btn
        text='Clear'
        width='w-[70px]'
        height='h-[30px]'
        presetColor='yellow'
        clickFunc={() => setDeckList({ mainDeck: [], rideDeck: [] })}
      />
      <div className='flex relative'>
        {/* <BoxTextInput
          className='bg-[#6CD5EC] border-3 border-[#1E72BE] text-black text-2xl py-2 pl-4 pr-16 text-center w-[300px] rounded-4xl'
          currentValue={deckName}
          placeholder='Deck Name'
          onChange={setDeckName}
          headerVisible={false}
        /> */}
        {BoxTextInput}
        <FaPencil 
          size={60} 
          className='absolute right-0 top-[50%] translate-y-[-50%] rounded-[50%] bg-[#004996] p-3 overflow-visible border-3 border-[#1E72BE]' 
          onClick={() => setShowPopupRenameDeck(true)}
        />
      </div>
      <Btn
        text='Save'
        width='w-[70px]'
        height='h-[30px]'
        presetColor='green'
        clickFunc={() => setShowPopupInvalid(!isDeckValid(deckName, deckList))}  // NOTE: Careful here; the ! might confused you
      />
      <Btn
        text='Save As'
        width='w-[70px]'
        height='h-[30px]'
        clickFunc={() => setShowPopupSaveAs(true)}  // NOTE: Careful here; the ! might confused you
      />
    </div>
  )
}

export default SectionDeckName