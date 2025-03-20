import Zone from './Zone'
import PlaceholderCard from '../PlaceholderCard';

const OrderZone = ({
  player,
  showViewCardsPopup,
  handleZoneToDisplay,
  orderZone
}) => {

  const handleClick = () => {
    showViewCardsPopup();
    handleZoneToDisplay('Order Zone');
  }

  // Adjusts the margin left as more/less cards get added/removed
  const cardCount = orderZone.length;

  return (
    <div onClick={handleClick}>
      <Zone
        zoneName={`order-zone-${player}`}
        size='w-[130px] h-[92px]'
        placeholderText='Order'
        children={
          <div className='w-full flex justify-evenly items-center'>
            <div className='relative w-full h-full flex px-1 items-center'>
              {Array.from({ length: cardCount }, (_, i) => {
                const sizeScaler = 7;  // smaller = cards closer together
                const marginLeft = `${i * sizeScaler - (cardCount - 8 > 0) * (cardCount - 8) * sizeScaler / (cardCount - 1) * i}%`;
                
                return (
                  <PlaceholderCard
                    key={i}
                    testCardPath={orderZone[i].imgPath}
                    style={{ marginLeft: marginLeft }}
                    classes='absolute'
                  />
                );

              })}
            </div>
          </div>
        }
      />
    </div>
  )
}

export default OrderZone