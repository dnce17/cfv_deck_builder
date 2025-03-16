import Zone from './Zone'

const PlayerBField = () => {
  return (
    <>
      {/* Hand */}
      <section>
        <Zone zoneName='hand-zone-b' size='w-[300px] h-[96.25px]' placeholderText='Insert Hand Cards Here' />
      </section>

      <section className='board-b h-[35%] grid grid-cols-3'>
        {/* Dmg + Order Zone */}
        <div className='flex flex-col items-center justify-evenly h-full bg-black'>
          <Zone zoneName='dmg-zone-b' size='w-[96.25px] h-[160px]' placeholderText='Dmg' />
          <Zone zoneName='order-zone-b' size='w-[130px] h-[96.25px]' placeholderText='Order' />
        </div>

        {/* Circles */}
        <div className='flex items-end justify-center mb-5 relative bg-green-500'>
          <div className='field-zone-b grid grid-rows-2 grid-cols-3 gap-6 bg-black'>
            <Zone zoneName='back-rc-1-b' placeholderText='RC Back 1' />
            <Zone zoneName='back-rc-2-b' placeholderText='RC Back 2' />
            <Zone zoneName='back-rc-3-b' placeholderText='RC Back 3' />
            <Zone zoneName='front-rc-1-b' placeholderText='RC Front 1' />
            <Zone zoneName='vg-b' placeholderText='VC' />
            <Zone zoneName='front-rc-2-b' placeholderText='RC Front 2' />
          </div>
        </div>

        {/* Drop, Bind, Deck, Ride, Trigger, G Zone */}
        <div className='grid grid-rows-3 grid-cols-3 bg-black'>
          <Zone zoneName='drop-zone-b' placeholderText='Drop' />
          <Zone zoneName='drop-zone-b' classes='col-span-2' placeholderText='Bind' />
          <Zone zoneName='drop-zone-b' placeholderText='Deck' />
          <Zone zoneName='drop-zone-b' classes='col-span-2' placeholderText='Ride' />
          <Zone zoneName='drop-zone-b' size='w-[86.25px] h-[60px]' placeholderText='Trigger' />
          <Zone zoneName='drop-zone-b' size='h-[86.25px]' classes='col-span-2 ml-4' placeholderText='G Zone' />
        </div>
      </section>
    </>
  )
}

export default PlayerBField