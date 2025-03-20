import Zone from './Zone'
import PlaceholderCard from '../PlaceholderCard';

const RideDeckZone = ({ 
  player, 
  showViewCardsPopup, 
  handleZoneToDisplay,
  rideDeck
}) => {

  const handleClick = () => {
    showViewCardsPopup();
    handleZoneToDisplay('Ride Deck');
  }

  return (
    <div onClick={handleClick}>
      <Zone
        zoneName={`ride-zone-${player}`}
        placeholderText='Ride'
        children={
          <div className='relative w-full h-full flex justify-center items-center'>
            {Array.from({ length: rideDeck.length }, (_, i) =>
              <PlaceholderCard testCardPath={rideDeck[i].imgPath} classes='absolute' />
            )}
          </div>
        }
      />
    </div>
  )
}

export default RideDeckZone