import DeckRatioCard from './DeckRatioCard'
import Divider from '../components/Divider'
import { getCardsByType } from '../../helpers'

const DeckRatioCards = ({ deckList }) => {
  const normalUnitCount = getCardsByType(deckList.mainDeck, 'Normal Unit').length;  // 'Normal Unit' b/c normal order exist
  const orderUnitCount = getCardsByType(deckList.mainDeck, 'Order').length;
  const triggerUnitCount = getCardsByType(deckList.mainDeck, 'Trigger').length;

  // Specific trigger count
  const criticalTriggerCount = getCardsByType(deckList.mainDeck, 'Critical', true).length;
  const healTriggerCount = getCardsByType(deckList.mainDeck, 'Heal', true).length;
  const drawTriggerCount = getCardsByType(deckList.mainDeck, 'Draw', true).length;
  const frontTriggerCount = getCardsByType(deckList.mainDeck, 'Front', true).length;
  const overTriggerCount = getCardsByType(deckList.mainDeck, 'Over', true).length;

  return (
    <div className='flex items-center border-2 border-[#E8E8E8] bg-[#9D9D9D]'>
      <DeckRatioCard header='Deck' info={deckList.mainDeck.length} />
      <DeckRatioCard header='Rideline' info={deckList.rideDeck.length} />
      <Divider />
      <DeckRatioCard header='Normal Units' info={normalUnitCount} />
      <DeckRatioCard header='Order' info={orderUnitCount} />
      <DeckRatioCard header='Triggers' info={triggerUnitCount} />
      <Divider />
      <DeckRatioCard header='Critical' info={criticalTriggerCount} />
      <DeckRatioCard header='Heal' info={healTriggerCount} />
      <DeckRatioCard header='Draw' info={drawTriggerCount} />
      <DeckRatioCard header='Front' info={frontTriggerCount} />
      <DeckRatioCard header='Over' info={overTriggerCount} />
    </div>
  )
}

export default DeckRatioCards