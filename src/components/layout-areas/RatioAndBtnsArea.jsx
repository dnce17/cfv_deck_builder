import DeckRatioCards from '../DeckRatioCards'
import Btn from '../Btn'
import { Link } from 'react-router-dom'

const RatioAndBtnsArea = ({ deckList, setShowSaveAsPopup, setShowSwitchDeckPopup }) => {
  return (
    <section className='flex ratios-and-btns-area'>

      <DeckRatioCards deckList={deckList} />

      <div className='flex flex-1 justify-end items-center'>
        <Btn text='Test Draw' />
        <Btn
          text='Save As'
          clickFunc={() => setShowSaveAsPopup(true)}
        />
        <Btn
          text='Switch Deck'
          clickFunc={() => setShowSwitchDeckPopup(true)}
        />
        <Link to='/'>
          <Btn
            text='Quit'
            textColor='text-[#CE5D5D]'
            borderColor='border-[#A32B00]'
            dropShadow='drop-shadow-[0px_0px_4px_#A32B00]'
            fromGradient='from-[#662113]'
            toGradient='to-[#3C1812]'
          />
        </Link>
      </div>

    </section>
  )
}

export default RatioAndBtnsArea