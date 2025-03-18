import Zone from './Zone'
import PlaceholderCard from '../PlaceholderCard'

const PlayerBField = () => {
  return (
    <div className='bg-sky-800 px-2 h-full'>
      {/* Hand */}
      <section className='flex justify-center'>
        {/* <Zone zoneName='hand-zone-b' size='w-[300px] h-[96.25px]' classes='mx-auto' placeholderText='Insert Hand Cards Here' /> */}
        {Array.from({ length: 6 }, (_, i) =>
          <PlaceholderCard />
        )}
      </section>

      <section className='board-b grid grid-cols-3'>
        {/* Dmg + Order Zone */}
        <div className='flex justify-evenly h-full mr-15'>
          <div className='flex h-fit'>
            <Zone zoneName='drop-zone-b' size='w-[130px] h-[92px]' classes='mr-4 self-end' placeholderText='G Zone' />
            <div className='flex flex-col items-center'>
              <Zone zoneName='dmg-zone-b' size='w-[96.25px] h-[160px]' classes='mb-2' placeholderText='Dmg' />
              <Zone zoneName='order-zone-b' size='w-[130px] h-[92px]' placeholderText='Order' />
            </div>
          </div>
        </div>

        {/* Circles */}
        <div className='flex items-center justify-center relative'>
          <div className='field-zone-b grid grid-rows-2 grid-cols-3 gap-y-9 gap-x-18'>
            <Zone zoneName='back-rc-1-b' placeholderText='RC Back 1' />
            <Zone zoneName='back-rc-2-b' placeholderText='RC Back 2' />
            <Zone zoneName='back-rc-3-b' placeholderText='RC Back 3' />
            <Zone zoneName='front-rc-1-b' placeholderText='RC Front 1' />
            <Zone zoneName='vg-b' placeholderText='VC' />
            <Zone zoneName='front-rc-2-b' placeholderText='RC Front 2' />
          </div>
        </div>

        {/* Drop, Bind, Deck, Ride, Trigger, G Zone */}
        <div className='grid grid-rows-3 grid-cols-2 w-fit gap-y-2 gap-x-4 ml-15'>
          <Zone zoneName='drop-zone-b' placeholderText='Drop' />
          <Zone zoneName='bind-zone-b' placeholderText='Bind' />
          <Zone zoneName='deck-zone-b' placeholderText='Deck' />
          <Zone zoneName='ride-zone-b' placeholderText='Ride' />
          <Zone zoneName='trigger-zone-b' size='w-[86.25px] h-[60px]' placeholderText='Trigger' />
          <Zone zoneName='crest-zone-b' size='w-[86.25px] h-[60px]' placeholderText='Crest' />
        </div>
      </section>
    </div>
  )
}

export default PlayerBField