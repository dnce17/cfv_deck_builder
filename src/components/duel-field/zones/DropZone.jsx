import Zone from './ZoneTemplate'
import PlaceholderCard from '../../PlaceholderCard';

const DropZone = ({ 
  player, 
  showViewCardsPopup, 
  handleZoneToDisplay,
  dropZone,
  header='Drop Zone'
}) => {

  const handleClick = () => {
    showViewCardsPopup();
    handleZoneToDisplay(header);
  }

  return (
    <div onClick={handleClick}>
      <Zone
        zoneName={`drop-zone-${player}`}
        placeholderText='Drop'
        children={
          <div className='relative w-full h-full flex justify-center items-center'>
            {Array.from({ length: dropZone.length }, (_, i) =>
              <PlaceholderCard testCardPath={dropZone[i].imgPath} classes='absolute' />
            )}
          </div>
        }
      />
    </div>
  )
}

export default DropZone