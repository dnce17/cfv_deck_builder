import { useState } from 'react'
import PopupTemplate from './PopupTemplate'
import BoxTextInput from './BoxTextInput'
import Btn from './Btn'

import Axios from 'axios'

const PopupNewDeck = ({
  setShowPopupNewDeck,
  nameTaken,
  setNameTaken,
}) => {
  const [newDeckName, setNewDeckName] = useState('');

  const createNewDeck = async (nameData) => {
    try {
      const res = await Axios.post('http://localhost:5000/api/create-new-deck', nameData);
      console.log('Create New Deck Status: ', res.data);
      return res.data;

    } catch (err) {
      console.error('Error creating new deck in server:', err);
    }
  }

  return (
    <PopupTemplate
      onClose={() => {
        setShowPopupNewDeck(false);
        setNameTaken(false);
      }}
      width={'w-[550px]'}
      height={'h-[240px]'}
      children={
        // flex-1 on parent and h-full on children allows children to take up remaining height of parent
        <div className='flex flex-col items-center flex-1'>
          <div className='w-[80%] h-full flex flex-col justify-center'>
            <p className='text-white text-[27px] font-bold'>New Deck Name:</p>
            <div className='relative'>
              <BoxTextInput
                className='bg-[#D9D9D9] border-3 border-[#FFFFFF] text-black w-full p-2 rounded-2xl text-2xl text-center'
                currentValue={newDeckName}
                onChange={setNewDeckName}
                headerVisible={false}
              />
            </div>
            <Btn
              text='Confirm'
              allowFullCustomize={true}
              className={
                `w-[7rem] h-[3rem] mt-3 mx-auto border-2 border-[#2A824B] 
                bg-linear-to-t from-[#0F8631] to-[#10361A] rounded-md
                text-[#23AD5C] text-xl font-bold`
              }
              clickFunc={async () => {
                // Send the name to the server to see if name already exist
                const status = await createNewDeck({
                  deckName: newDeckName.trim(),
                });

                if (status == false) {
                  setNameTaken(true);
                  return;
                }

                setNameTaken(false);
                setShowPopupNewDeck(false);
              }}
            />
          </div>
          {nameTaken && <div className='text-red-300 text-xl'>Name already in use!</div>}
        </div>
      }
    />
  )
}

export default PopupNewDeck