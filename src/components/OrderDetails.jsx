import CardDetail from './CardDetail'

const OrderDetails = ({ hoveredCard }) => {
  return (
    <div className='grid grid-rows-2 grid-cols-4'>
      <CardDetail className='col-span-2' header='Grade' info={hoveredCard.grade} />
      <CardDetail className='col-span-2' header='Order Type' info={hoveredCard.cardType.split(' ')[0]} />
      <CardDetail className='col-span-2' header='Icon' info={hoveredCard.icon ? hoveredCard.icon : 'None'} textSize='text-xs' />
      <CardDetail className='col-span-2' header='Icon' info={hoveredCard.nation ? hoveredCard.nation : 'None'} textSize='text-xs' />
      {/* <CardDetail className='col-span-2 col-start-2' header='Nation' info={hoveredCard.nation ? hoveredCard.nation : 'None'} textSize='text-xs' /> */}
    </div>
  )
}

export default OrderDetails