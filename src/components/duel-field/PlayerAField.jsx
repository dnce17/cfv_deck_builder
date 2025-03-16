import Zone from './Zone'

const PlayerAField = () => {
  return (
    <div className='bg-sky-800 p-2'>
      <section className='board-a grid grid-cols-3'>
        {/* Dmg + Order Zone */}
        <div className='flex items-end justify-evenly h-full mr-10'>
          <Zone zoneName='drop-zone-a self-start' size='w-[130px] h-[96.25px]' classes='mr-4' placeholderText='G Zone' />
          <div className='flex flex-col items-center h-full'>
            <Zone zoneName='order-zone-a' size='w-[130px] h-[96.25px]' placeholderText='Order' />
            <Zone zoneName='dmg-zone-a' size='w-[96.25px] h-[160px]' classes='mt-2' placeholderText='Dmg' />
          </div>
        </div>

        {/* Circles */}
        <div className='flex items-center justify-center relative'>
          <div className='field-zone-a grid grid-rows-2 grid-cols-3 gap-6'>
            <Zone zoneName='front-rc-1-a' placeholderText='RC Front 1' />
            <Zone zoneName='vg-a' placeholderText='VC' />
            <Zone zoneName='front-rc-2-a' placeholderText='RC Front 2' />
            <Zone zoneName='back-rc-1-a' placeholderText='RC Back 1' />
            <Zone zoneName='back-rc-2-a' placeholderText='RC Back 2' />
            <Zone zoneName='back-rc-3-a' placeholderText='RC Back 3' />
          </div>
        </div>

        {/* Drop, Bind, Deck, Ride, Trigger, G Zone */}
        <div className='grid grid-rows-3 grid-cols-2 w-fit gap-y-2 gap-x-4 ml-10'>
          <Zone zoneName='trigger-zone-a' size='w-[86.25px] h-[60px]' classes='self-end col-span-2' placeholderText='Trigger' />
          <Zone zoneName='deck-zone-a' placeholderText='Deck' />
          <Zone zoneName='ride-zone-a' placeholderText='Ride' />
          <Zone zoneName='drop-zone-a' placeholderText='Drop' />
          <Zone zoneName='bind-zone-a' placeholderText='Bind' />
        </div>
      </section>

      {/* TODO: Will likely create a Hand component b/c it needs to do stuff */}
      <section>
        <Zone zoneName='hand-zone-a' size='w-[300px] h-[96.25px]' classes='mx-auto' placeholderText='Insert Hand Cards Here' />
      </section>
    </div>
  )
}

export default PlayerAField