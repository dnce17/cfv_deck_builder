import PopupTemplate from './PopupTemplate'
import InvalidDeckText from './InvalidDeckText'
import Btn from './Btn'

import Axios from 'axios'

const PopupInvalidDeck = ({ setShowPopupInvalid, deckIssues, deckList, deckName }) => {

  const saveDeck = async (deckData) => {
    try {
      const res = await Axios.post('http://localhost:5000/api/decks', deckData);
      console.log('Deck saved:', res.data);
    } catch (err) {
      console.error('Error saving deck:', err);
    }
  }

  return (
    <PopupTemplate
      // onClose={setShowPopupInvalid}
      onClose={() => setShowPopupInvalid(false)}
      children={
        <div className='flex flex-col items-center justify-evenly flex-1'>
          <p className='text-white text-2xl'>Deck is incomplete. Save anyway?</p>
          <div className='mx-3 p-1 bg-[#093A73] w-[90%] h-[180px] overflow-y-auto'>
            {Array.from({ length: deckIssues.length }, (_, i) =>
              <InvalidDeckText key={i} errMsg={deckIssues[i]} />
            )}
          </div>
          <div>
            <Btn
              text='No'
              textColor='text-[#CE5D5D]'
              textSize='text-xl'
              textWeight='font-bold'
              borderColor='border-[#A32B00]'
              dropShadow='drop-shadow-[0px_0px_4px_#A32B00]'
              fromGradient='from-[#662113]'
              toGradient='to-[#3C1812]'
              clickFunc={() => setShowPopupInvalid(false)}
            />
            <Btn
              text='Yes'
              textColor='text-[#23AD5C]'
              textSize='text-xl'
              textWeight='font-bold'
              borderColor='border-[#2A824B]'
              dropShadow='drop-shadow-[0px_0px_4px_#10361A]'
              fromGradient='from-[#0F8631]'
              toGradient='to-[#10361A]'
              // clickFunc={() => saveDeck({ name: 'My Deck' })}
              clickFunc={() => {
                saveDeck({
                  deckName: deckName,
                  mainDeck: deckList.mainDeck,
                  rideDeck: deckList.rideDeck
                })
                setShowPopupInvalid(false)
              }}
            />
          </div>
        </div>
      }
    />
  )
}

export default PopupInvalidDeck