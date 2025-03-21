import Zone from './ZoneTemplate'
import GZoneOrientation from './GZoneOrientation'

const GZone = ({
  player,
  showViewCardsPopup,
  handleZoneToDisplay,
  gZoneFaceUp,
  gZoneFaceDown,
}) => {

  const handleGZoneClick = (gZone, isFaceUp) => {
    // Player B's facedown G Zone should not be viewable
    if (isFaceUp || player === 'a') {
      showViewCardsPopup();
      handleZoneToDisplay(gZone);
    }
  };

  const headerOwner = player == 'a' ? '' : "Player B's ";
  const gZoneClasses = player == 'a' ? 'mr-4 self-start' : 'mr-4 self-end';

  return (
    <Zone
      zoneName={`g-zone-${player}`}
      size='w-[130px] h-[92px]'
      classes={gZoneClasses}
      placeholderText='G Zone'
      children={
        <div className='w-full flex justify-evenly items-center'>
          <GZoneOrientation
            gZone={gZoneFaceUp}
            header={headerOwner + 'G Zone (Face Up)'}
            handleClick={() => handleGZoneClick(headerOwner + 'G Zone (Face Up)', true)}
          />
          <GZoneOrientation
            gZone={gZoneFaceDown}
            header={headerOwner + 'G Zone (Face Down)'}
            handleClick={() => handleGZoneClick(headerOwner + 'G Zone (Face Down)', false)}
          />
        </div>
      }
    />
  )
}

export default GZone