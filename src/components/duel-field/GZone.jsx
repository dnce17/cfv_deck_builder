import Zone from './Zone'
import PlaceholderCard from '../PlaceholderCard'

const GZone = ({
  player,
  showViewCardsPopup,
  handleZoneToDisplay,
  gZoneFaceUp,
  gZoneFaceDown
}) => {

  const handleClick = (gZone) => {
    showViewCardsPopup();
    handleZoneToDisplay(gZone);
  }

  return (
    <Zone
      zoneName={`g-zone-${player}`}
      size='w-[130px] h-[92px]'
      classes='mr-4 self-start'
      placeholderText='G Zone'
      children={
        <div className='w-full flex justify-evenly items-center'>
          <div
            onClick={() => handleClick('G Zone (Face Up)')}
            className='relative w-full h-full flex justify-center items-center'
          >
            {Array.from({ length: gZoneFaceUp.length }, (_, i) =>
              <PlaceholderCard key={i} testCardPath={gZoneFaceUp[i].imgPath} classes='absolute' />
            )}
          </div>

          <div
            onClick={() => handleClick('G Zone (Face Down)')}
            className='relative w-full h-full flex justify-center items-center'
          >
            {Array.from({ length: gZoneFaceDown.length }, (_, i) =>
              <PlaceholderCard key={i} testCardPath={gZoneFaceDown[i].imgPath} classes='absolute' />
            )}
          </div>
        </div>
      }
    />
  )
}

export default GZone