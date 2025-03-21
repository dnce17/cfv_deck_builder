import PlaceholderCard from '../../PlaceholderCard'

const GZoneOrientation = ({ gZone, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className='relative w-full h-full flex justify-center items-center'
    >
      {Array.from({ length: gZone.length }, (_, i) =>
        <PlaceholderCard key={i} testCardPath={gZone[i].imgPath} classes='absolute' />
      )}
    </div>
  )
}

export default GZoneOrientation