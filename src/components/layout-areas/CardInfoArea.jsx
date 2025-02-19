import CardDetail from '../CardDetail'
import CardEffect from '../CardEffect'
import UnitDetails from '../UnitDetails'
import OrderDetails from '../OrderDetails'

const CardInfoArea = ({ hoveredCard }) => {
  const fillerCardEffect = "[AUTO]:[Counter Blast (2)] When this unit is placed on (VC), you may pay the cost. If you do, choose one of your opponent's rear-guards, and retire it. [AUTO]:[Counter Blast (2)] When this unit is placed on (RC), if you have a «Royal Paladin» vanguard, you may pay the cost. If you do, choose one of your opponent's grade 2 or greater rear-guards, and retire it.";

  let cardInfo;
  if (hoveredCard.cardType?.includes('Unit')) {
    cardInfo = <UnitDetails hoveredCard={hoveredCard} />
  }
  else if (hoveredCard.cardType?.includes('Order')) {
    cardInfo = <OrderDetails hoveredCard={hoveredCard} />
  }


  return (
    <section className='cardInfo-area bg-[#0F232E] flex flex-col border-3 border-[#007C90]'>
      <h1 className='text-center font-bold py-0.5'>{hoveredCard.name}</h1>

      {cardInfo}

      <CardEffect
        // text={fillerCardEffect}
        // ISSUE: Line breaks don't work
        text={hoveredCard ? hoveredCard.text: ''}
      />
    </section>
  )
}

export default CardInfoArea