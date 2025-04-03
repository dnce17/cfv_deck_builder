import PopupTemplate from './PopupTemplate'
import BoxDropdown from './BoxDropdown'
import Btn from './Btn'

import { useEffect, useState } from 'react'
import Axios from 'axios'

const PopupSwitchDeck = ({ setShowPopupSwitchDeck, setDeckList, setDeckName }) => {

  const [allDecks, setAllDecks] = useState([{}]);
  const [currentDeckName, setCurrentDeckName] = useState('');

  // Get deck names from SERVER
  const getAllDeckData = async () => {
    const res = await Axios.get('http://localhost:5000/api/decks');
    setAllDecks(res.data);

    // Set currentDeckName to the 1st deck name if decks exist
    if (res.data.decks != 'undefined' && res.data.decks.length > 0) {
      setCurrentDeckName(res.data.decks[0].name);
    }
  }

  const handleSetDeckList = () => {
    // Find selected deck obj based on currentDeckName name
    const selectedDeck = allDecks.decks.find(deck => deck.name == currentDeckName);

    if (selectedDeck) {
      setDeckList({
        mainDeck: selectedDeck.mainDeck,
        rideDeck: selectedDeck.rideDeck
      });
      setShowPopupSwitchDeck(false);  // Close popup after switching deck
    } 
  }

  useEffect(() => {
    getAllDeckData();
  }, []);

  return (
    <PopupTemplate
      // onClose={setShowPopupSwitchDeck}
      onClose={() => setShowPopupSwitchDeck(false)}
      width={'w-[550px]'}
      height={'h-[240px]'}
      children={
        // flex-1 on parent and h-full on children allows children to take up remaining height of parent
        <div className='flex flex-col items-center flex-1'>
          <div className='w-[80%] h-full flex flex-col justify-center'>
            <p className='text-white text-[27px] font-bold'>Switch Deck To...</p>
            <div className='relative'>
              <BoxDropdown
                className='bg-[#D9D9D9] text-2xl w-full py-2 text-center rounded-xl'
                // dropdownOptions={allDecks}
                dropdownOptions={
                  (typeof allDecks.decks == 'undefined')
                    ? ['Loading...']
                    // : allDecks.decks.map(deck => deck.name)
                    : allDecks.decks.map(deck => deck.name)
                }
                currentValue={currentDeckName}
                onChange={setCurrentDeckName}
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
              clickFunc={() => {
                setDeckName(currentDeckName);
                handleSetDeckList()
              }}
            />
          </div>
        </div>
      }
    />
  )
}

export default PopupSwitchDeck