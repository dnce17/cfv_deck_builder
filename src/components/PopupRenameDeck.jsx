import PopupTemplate from './PopupTemplate'
import BoxTextInput from './BoxTextInput'
import Btn from './Btn'

const PopupRenameDeck = ({ 
  setShowPopupRenameDeck, 
  deckRename,
  setDeckRename, 
  nameTaken,
  setNameTaken,
  clickFunc 
}) => {
  return (
    <PopupTemplate
      // onClose={setShowPopupRenameDeck}
      onClose={() => {
        setShowPopupRenameDeck(false);
        setDeckRename(''); // New name not saved
        setNameTaken(false);
      }}
      width={'w-[550px]'}
      height={'h-[240px]'}
      children={
        // flex-1 on parent and h-full on children allows children to take up remaining height of parent
        <div className='flex flex-col items-center flex-1'>
          <div className='w-[80%] h-full flex flex-col justify-center'>
            <p className='text-white text-[27px] font-bold'>Rename Deck To...</p>
            <div className='relative'>
              <BoxTextInput
                className='bg-[#D9D9D9] border-3 border-[#FFFFFF] text-black w-full p-2 rounded-2xl text-2xl text-center'
                currentValue={deckRename}
                onChange={setDeckRename}
                headerVisible={false}
              />
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
              clickFunc={clickFunc}
            />
          </div>
          {nameTaken && <div className='text-red-300 text-xl'>Name already in use!</div>}
        </div>
      }
    />
  )
}

export default PopupRenameDeck