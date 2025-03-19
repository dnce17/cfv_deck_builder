import Zone from './Zone'
import PlaceholderCard from '../PlaceholderCard';

const DropZone = ({ 
  player, 
  showViewCardsPopup, 
  handleZoneToDisplay,
  drop 
}) => {

  const handleClick = () => {
    showViewCardsPopup();
    handleZoneToDisplay('Drop Zone');
  }

  return (
    <div onClick={handleClick}>
      <Zone
        zoneName={`ride-zone-${player}`}
        placeholderText='Ride'
        children={
          <div className='relative w-full h-full flex justify-center items-center'>
            {Array.from({ length: drop.length }, (_, i) =>
              <PlaceholderCard testCardPath={drop[i].imgPath} classes='absolute' />
            )}
          </div>
        }
      />
    </div>
  )
}

export default DropZone