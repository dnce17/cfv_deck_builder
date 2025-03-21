import Zone from './Zone'
import PlaceholderCard from '../PlaceholderCard';

const BindZone = ({ 
  player, 
  showViewCardsPopup, 
  handleZoneToDisplay,
  bindZone,
  header='Bind Zone'
}) => {

  const handleClick = () => {
    showViewCardsPopup();
    handleZoneToDisplay(header);
  }

  return (
    <div onClick={handleClick}>
      <Zone
        zoneName={`bind-zone-${player}`}
        placeholderText='Bind'
        children={
          <div className='relative w-full h-full flex justify-center items-center'>
            {Array.from({ length: bindZone.length }, (_, i) =>
              <PlaceholderCard testCardPath={bindZone[i].imgPath} classes='absolute' />
            )}
          </div>
        }
      />
    </div>
  )
}

export default BindZone