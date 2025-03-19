import Zone from './Zone'
import PlaceholderCard from '../PlaceholderCard';

const RideDeckZone = ({ player, showViewCardsPopup, setClickedZone }) => {

  const handleClick = () => {
    showViewCardsPopup();
    setClickedZone('Ride Zone')
  }

  return (
    <div onClick={handleClick}>
      <Zone
        zoneName={`ride-zone-${player}`}
        placeholderText='Ride'
        children={
          <div className='relative w-full h-full flex justify-center items-center'>
            {/* Cards should be on top of each other */}
            <PlaceholderCard classes='absolute' />
            <PlaceholderCard classes='absolute' />
            <PlaceholderCard classes='absolute' />
          </div>
        }
      />
    </div>
  )
}

export default RideDeckZone