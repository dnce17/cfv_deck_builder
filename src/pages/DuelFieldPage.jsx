import CardImgArea from '../components/layout-areas/CardImgArea'
import CardInfoArea from '../components/layout-areas/CardInfoArea'
import DuelFieldArea from '../components/duel-field/DuelFieldArea'
import './DuelFieldPage.css'

const DuelFieldPage = () => {
  const hoveredCard = {
    "id": 1,
    "name": "Chakrabarthi Divine Dragon, Nirvana",
    "imgPath": "./src/assets/card-imgs/1_chakrabarthi_divine_dragon_nirvana.jpg",
    "grade": 3,
    "skill": "Twin Drive",
    "icon": "Persona Ride",
    "power": "13000",
    "critical": "1",
    "shield": 0,
    "nation": "Dragon Empire",
    "clan": "",
    "race": "Flame Dragon",
    "cardType": "Normal Unit",
    "triggerType": "",
    "triggerEffect": "",
    "rideline": "",
    "format": "Standard / Premium",
    "text": "[ACT](VC)1/Turn:COST [Discard a card from your hand], choose a grade 0 card from your drop, and call it to (RC). <br/>[AUTO](VC):When this unit attacks, COST [Counter Blast (1)], and this unit and all of your units with the [overDress] ability get [Power]+10000 until end of turn.\n",
    "maxCopies": 4
  }
  return (
    <div className='h-screen flex justify-center items-center relative'>
      <div className='w-[1400px] h-[800px] duel-field-grid-layout text-white bg-sky-100'>
        <CardImgArea hoveredCard={hoveredCard} gridArea='game-card-img-area' />
        <CardInfoArea hoveredCard={hoveredCard} gridArea='game-card-info-area' />
        <DuelFieldArea />
      </div>
    </div>
  )
}

export default DuelFieldPage