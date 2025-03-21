import Zone from './ZoneTemplate'
import PlaceholderCard from '../../PlaceholderCard';

const DmgZone = ({
  player,
  showViewCardsPopup,
  handleZoneToDisplay,
  dmgZone,
  header='Dmg Zone'
}) => {

  const handleClick = () => {
    showViewCardsPopup();
    handleZoneToDisplay(header);
  }

  return (
    <div onClick={handleClick}>
      <Zone
        zoneName={`dmg-zone-${player}`}
        size='w-[96.25px] h-[160px]'
        // classes='mt-2'
        classes={ player == 'a' ? 'mt-2' : 'mb-2' }
        placeholderText='Dmg'
        children={
          <div className='relative w-full h-full flex justify-center items-center'>
            {Array.from({ length: dmgZone.length }, (_, i) =>
              <PlaceholderCard 
                key={i}
                testCardPath={dmgZone[i].imgPath} 
                classes='-rotate-90 absolute'
                // Card spacing in dmgZone: -10, 8, 26, 44, 62, 80 (increment of 18)
                style={{ top: `${-10 + (i * 18)}px` }} 
              />
            )}
          </div>
        }
      />
    </div>
  )
}

export default DmgZone