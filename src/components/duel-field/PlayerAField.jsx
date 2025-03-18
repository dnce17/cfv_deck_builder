import Zone from './Zone'
import PlaceholderCard from '../PlaceholderCard'

const PlayerAField = () => {
  return (
    <div className='bg-sky-800 px-2 h-full'>
      <section className='board-a grid grid-cols-3'>
        {/* Dmg + Order Zone */}
        <div className='flex items-end h-full mr-15'>
          <div className='flex h-fit'>
            <Zone
              zoneName='drop-zone-a'
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
            <div className='flex flex-col items-center h-full'>
              <Zone
                zoneName='order-zone-a'
                size='w-[130px] h-[92px]'
                placeholderText='Order'
                children={
                  <div className='w-full flex justify-evenly items-center'>
                    <div className='relative w-full h-full flex justify-center items-center'>
                      <PlaceholderCard />
                      <PlaceholderCard classes='ml-[-40px]' />
                      <PlaceholderCard classes='ml-[-40px]' />
                      <PlaceholderCard classes='ml-[-40px] -rotate-90' />
                    </div>
                  </div>
                }
              />
              <Zone
                zoneName='dmg-zone-a'
                size='w-[96.25px] h-[160px]'
                classes='mt-2'
                placeholderText='Dmg'
                children={
                  <div className='relative w-full h-full flex justify-center items-center'>
                    {/* Count by 18 px for card placement */}
                    <PlaceholderCard classes='-rotate-90 absolute top-[-10px]' />
                    <PlaceholderCard classes='-rotate-90 absolute top-[8px]' />
                    <PlaceholderCard classes='-rotate-90 absolute top-[26px]' />
                    <PlaceholderCard classes='-rotate-90 absolute top-[44px]' />
                    <PlaceholderCard classes='-rotate-90 absolute top-[62px]' />
                    <PlaceholderCard classes='-rotate-90 absolute top-[80px]' />
                  </div>
                }
              />
            </div>
          </div>
        </div>

        {/* Circles */}
        <div className='flex items-center justify-center relative'>
          <div className='field-zone-a grid grid-rows-2 grid-cols-3 gap-y-9 gap-x-18'>
            <Zone zoneName='front-rc-1-a' placeholderText='RC Front 1' />
            <Zone zoneName='vg-a' placeholderText='VC' />
            <Zone zoneName='front-rc-2-a' placeholderText='RC Front 2' />
            <Zone zoneName='back-rc-1-a' placeholderText='RC Back 1' />
            <Zone zoneName='back-rc-2-a' placeholderText='RC Back 2' />
            <Zone zoneName='back-rc-3-a' placeholderText='RC Back 3' />
          </div>
        </div>

        {/* Drop, Bind, Deck, Ride, Trigger */}
        <div className='grid grid-rows-3 grid-cols-2 w-fit gap-y-2 gap-x-4 ml-15'>
          <Zone
            zoneName='trigger-zone-a'
            size='w-[86.25px] h-[60px]'
            classes='self-end'
            placeholderText='Trigger'
            children={
              <div className='relative w-full h-full flex justify-center items-center'>
                <PlaceholderCard classes='-rotate-90 absolute' />
                <PlaceholderCard classes='-rotate-90 absolute' />
              </div>
            }
          />
          <Zone zoneName='crest-zone-a' size='w-[86.25px] h-[60px]' classes='self-end' placeholderText='Crest' />
          <Zone
            zoneName='deck-zone-a'
            placeholderText='Deck'
            children={
              <div className='relative w-full h-full flex justify-center items-center'>
                {/* Cards should be on top of each other */}
                <PlaceholderCard classes='absolute' />
                <PlaceholderCard classes='absolute' />
                <PlaceholderCard classes='absolute' />
              </div>
            }
          />
          <Zone zoneName='ride-zone-a' placeholderText='Ride' />
          <Zone zoneName='drop-zone-a' placeholderText='Drop' />
          <Zone zoneName='bind-zone-a' placeholderText='Bind' />
        </div>
      </section>

      {/* TODO: Will likely create a Hand component b/c it needs to do stuff */}
      <section className='flex justify-center'>
        {/* <Zone zoneName='hand-zone-a' size='w-[300px] h-[96.25px]' classes='mx-auto' placeholderText='Insert Hand Cards Here' /> */}
        {Array.from({ length: 6 }, (_, i) =>
          <PlaceholderCard />
        )}
      </section>
    </div>
  )
}

export default PlayerAField