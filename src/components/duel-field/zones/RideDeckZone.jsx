import Zone from './ZoneTemplate'
import PlaceholderCard from '../../PlaceholderCard';

const RideDeckZone = ({ 
  player, 
  showViewCardsPopup, 
  handleZoneToDisplay,
  rideDeck,
  header='Ride Deck',
}) => {

  const handleClick = () => {
    if (player == 'a') {
      showViewCardsPopup();
      handleZoneToDisplay(header);
    }
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