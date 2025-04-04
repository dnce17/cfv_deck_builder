import DeckRatioCards from '../DeckRatioCards'
import Btn from '../Btn'

const RatioAndBtnsArea = ({ deckList, setShowPopupSaveAs, setShowPopupSwitchDeck }) => {
  return (
    <section className='flex ratiosAndBtns-area'>

      <DeckRatioCards deckList={deckList} />

      <div className='flex flex-1 justify-end items-center'>
        <Btn text='Test Draw' />
        <Btn
          text='New Deck'
          // clickFunc={() => setShowPopupSaveAs(true)}
        />
        <Btn
          text='Switch Deck'
          className='leading-4'
          clickFunc={() => setShowPopupSwitchDeck(true)}
        />
        <Btn
          text='Quit'
          presetColor='red'
        />
      </div>

    </section>
  )
}

export default RatioAndBtnsArea