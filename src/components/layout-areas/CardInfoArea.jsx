import CardEffect from '../CardEffect'
import UnitDetails from '../UnitDetails'
import OrderDetails from '../OrderDetails'

const CardInfoArea = ({ hoveredCard }) => {
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
        text={hoveredCard ? hoveredCard.text: ''}
      />
    </section>
  )
}

export default CardInfoArea