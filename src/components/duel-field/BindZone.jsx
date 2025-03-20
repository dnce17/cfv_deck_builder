import Zone from './Zone'
import PlaceholderCard from '../PlaceholderCard';

const BindZone = ({ 
  player, 
  showViewCardsPopup, 
  handleZoneToDisplay,
  bindZone 
}) => {

  const handleClick = () => {
    showViewCardsPopup();
    handleZoneToDisplay('Bind Zone');
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