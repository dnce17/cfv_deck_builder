import DeckRatioCards from '../DeckRatioCards'
import Btn from '../Btn'

const RatioAndBtnsArea = ({ deckList, setShowSaveAsPopup, setShowSwitchDeckPopup }) => {
  return (
    <section className='flex ratiosAndBtns-area bg-slate-500'>

      <DeckRatioCards deckList={deckList} />

      <div className='bg-pink-500 flex flex-1 justify-end items-center'>
        <Btn text='Test Draw' />
        <Btn
          text='Save As'
          clickFunc={() => setShowSaveAsPopup(true)}
        />
        <Btn
          text='Switch Deck'
          clickFunc={() => setShowSwitchDeckPopup(true)}
        />
        <Btn
          text='Quit'
          textColor='text-[#CE5D5D]'
          borderColor='border-[#A32B00]'
          dropShadow='drop-shadow-[0px_0px_4px_#A32B00]'
          fromGradient='from-[#662113]'
          toGradient='to-[#3C1812]'
        />
      </div>

    </section>
  )
}

export default RatioAndBtnsArea