import { useState } from 'react';

import PopupTemplate from './PopupTemplate'
import BoxTextInput from './BoxTextInput'
import Btn from './Btn'

import Axios from 'axios'

const PopupSaveAs = ({ setShowPopupSaveAs, setNameTaken, nameTaken, deckList }) => {
  const [deckName, setDeckName] = useState('');

  const saveAsDeck = async (nameData) => {
    try {
      const res = await Axios.post('http://localhost:5000/api/save-as-deck', nameData);
      console.log('Save As Deck Name Status: ', res.data);
      return res.data;

    } catch (err) {
      console.error('Error sending save as deck name to server:', err);
    }
  }

  return (
    <PopupTemplate
      onClose={() => {
        setShowPopupSaveAs(false)
        setNameTaken(false);
      }}
      width={'w-[550px]'}
      height={'h-[220px]'}
      children={
        <div className='flex flex-col items-center py-5'>
          <div className='w-[80%]'>
            <p className='text-white text-[27px] font-bold'>Save As...</p>
            <div className='relative'>
              <BoxTextInput
                className='bg-[#D9D9D9] text-2xl w-full py-2 pl-4 pr-16 text-center rounded-xl'
                currentValue={deckName}
                placeholder='Deck Name'
                onChange={setDeckName}
                headerVisible={false}
              />
              <Btn
                text='Save'
                allowFullCustomize={true}
                className='text-[#23AD5C] text-xl font-bold w-[5.5rem] h-full border-2 border-[#2A824B] bg-linear-to-t from-[#0F8631] to-[#10361A] absolute right-0 rounded-r-xl'
                clickFunc={async () => {
                  // Send the name to the server to see if name already exist
                  const status = await saveAsDeck({
                    deckName: deckName.trim(),
                    deckList: deckList
                  });

                  console.log(status);

                  if (status == false) {
                    // Show message that name is taken
                    setNameTaken(true);
                    return;
                  }

                  setNameTaken(false);
                  setShowPopupSaveAs(false);
                }}
              />
            </div>
          </div>
          {nameTaken && <div className='text-red-300 text-xl'>Name already in use!</div>}
        </div>
      }
    />
  )
}

export default PopupSaveAs