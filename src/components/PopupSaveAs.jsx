import PopupTemplate from './PopupTemplate'
import BoxTextInput from './BoxTextInput'
import Btn from './Btn'
import { useState } from 'react';

const PopupSaveAs = ({ setShowPopupSaveAs }) => {
  const [deckName, setDeckName] = useState('');

  return (
    <PopupTemplate
      setVisibleStatus={setShowPopupSaveAs}
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
                textColor='text-[#23AD5C]'
                textSize='text-xl'
                textWeight='font-bold'
                customizeBtn={true}
                customBtnClass={
                  `w-[5.5rem] h-full border-2 border-[#2A824B] 
                  bg-linear-to-t from-[#0F8631] to-[#10361A] 
                  absolute right-0 rounded-r-xl`
                }
              />
            </div>
          </div>
        </div>
      }
    />
  )
}

export default PopupSaveAs