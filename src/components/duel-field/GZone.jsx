import Zone from './Zone'
import PlaceholderCard from '../PlaceholderCard'

const GZone = () => {
  // const viewFaceDownGZone = () => {

  // }

  return (
    <Zone
      zoneName='drop-zone-a'  // Change this
      size='w-[130px] h-[92px]'
      classes='mr-4 self-start'
      placeholderText='G Zone'
      children={
        <div className='w-full flex justify-evenly items-center'>
          <div>
            <PlaceholderCard />
          </div>
          <div>
            <PlaceholderCard />
          </div>
        </div>
      }
    />
  )
}

export default GZone