import PopupTemplate from './PopupTemplate'
import DropdownBox from './BoxDropdown'
import Btn from './Btn'

import { useEffect, useState } from 'react'
import Axios from 'axios'

const PopupSwitchDeck = ({ setShowPopupSwitchDeck }) => {

  const [deckNameList, setDeckNameList] = useState([{}]);
  const [desiredDeck, setDesiredDeck] = useState('');

  // Get deck names from SERVER
  const getAllDeckData = async () => {
    const res = await Axios.get('http://localhost:5000/api/decks');
    setDeckNameList(res.data);
  }

  useEffect(() => {
    getAllDeckData();
  }, []);

  return (
    <PopupTemplate
      setVisibleStatus={setShowPopupSwitchDeck}
      width={'w-[550px]'}
      height={'h-[240px]'}
      children={
        // flex-1 on parent and h-full on children allows children to take up remaining height of parent
        <div className='flex flex-col items-center flex-1'>
          <div className='w-[80%] h-full flex flex-col justify-center'>
            <p className='text-white text-[27px] font-bold'>Switch Deck To...</p>
            <div className='relative'>
              <DropdownBox
                className='bg-[#D9D9D9] text-2xl w-full py-2 text-center rounded-xl'
                // dropdownOptions={deckNameList}
                dropdownOptions={
                  (typeof deckNameList.decks === 'undefined')
                  ? ['Loading...']
                  : deckNameList.decks.map(deck => deck.name)
                }
                currentValue={desiredDeck}
                onChange={setDesiredDeck}
                headerVisible={false}
              />
              {/* <Btn
                text='▼'
                textColor='text-white'
                textSize='text-xl'
                textWeight='font-bold'
                customizeBtn={true}
                customBtnClass={
                  `w-[5.5rem] h-full border-2 border-[#2A824B] 
                  bg-linear-to-t from-[#D77F00] to-[#E2A300] 
                  absolute right-0 rounded-r-xl`
                }
              /> */}
            </div>
            <Btn
              text='Confirm'
              textColor='text-[#23AD5C]'
              textSize='text-xl'
              textWeight='font-bold'
              customizeBtn={true}
              customBtnClass={
                `w-[7rem] h-[3rem] mt-3 mx-auto border-2 border-[#2A824B] 
                bg-linear-to-t from-[#0F8631] to-[#10361A] rounded-md`
              }
            />
          </div>
        </div>
      }
    />
  )
}

export default PopupSwitchDeck