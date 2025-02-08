import DeckRatioCard from './DeckRatioCard'
import Divider from '../components/Divider'

const DeckRatioCards = () => {
  return (
    <div className='flex items-center border-2 border-[#E8E8E8] bg-[#9D9D9D]'>
      <DeckRatioCard header='Deck' info='50' />
      <DeckRatioCard header='Rideline' info='4' />
      <Divider />
      <DeckRatioCard header='Normal Units' info='28' />
      <DeckRatioCard header='Order' info='6' />
      <DeckRatioCard header='Triggers' info='16' />
      <Divider />
      <DeckRatioCard header='Critical' info='8' />
      <DeckRatioCard header='Heal' info='4' />
      <DeckRatioCard header='Draw' info='4' />
      <DeckRatioCard header='Front' info='3' />
      <DeckRatioCard header='Over' info='1' />
    </div>
  )
}

export default DeckRatioCards