import { useState } from 'react'
import BoxTextInput from './BoxTextInput'
import Btn from './Btn'
import { isDeckValid } from '../../helpers'

import { FaPencil } from 'react-icons/fa6'
import Axios from 'axios'

const SectionDeckName = ({ deckName, deckList, setDeckName, setDeckList, setShowPopupInvalid, setShowPopupRenameDeck, setShowPopupSaveAs, BoxTextInput }) => {
  // const [deckName, setDeckName] = useState('');

  const deleteDeck = async (deckData) => {
    try {
      const res = await Axios.post('http://localhost:5000/api/delete-deck', deckData);
      console.log(res.data);
      await setDeckName(res.data.name);
      await setDeckList({
        mainDeck: res.data.mainDeck,
        rideDeck: res.data.rideDeck,
      });
    } catch (err) {
      console.error('Error deleting deck:', err);
    }
  }

  const changeDefaultDeck = async (nameData) => {
    try {
      const res = await Axios.post('http://localhost:5000/api/change-default-deck', nameData);
      console.log(res.data);
    } catch (err) {
      console.error('Error deleting deck:', err);
    }
  }

  return (
    <div className='bg-linear-to-t from-[#00627A] to-[#05374F] border-b-3 border-[#007C90] flex justify-evenly items-center'>
      <Btn
        text='Delete'
        width='w-[70px]'
        height='h-[30px]'
        presetColor='red'
        clickFunc={() => {
          // Delete deck
          deleteDeck({ name: deckName })
          // Show the next deck in the list
        }}
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
      <div className='flex flex-col h-full justify-evenly'>
        <Btn
          text='Save As'
          width='w-[70px]'
          height='h-[25px]'
          clickFunc={() => setShowPopupSaveAs(true)}  // NOTE: Careful here; the ! might confused you
        />
        <Btn
          text='Set Default'
          width='w-[70px]'
          height='h-[35px]'
          className='leading-[12.5px]'
          clickFunc={() => changeDefaultDeck({
            deckName: deckName.trim()
          })}
        />
      </div>
    </div>
  )
}

export default SectionDeckName