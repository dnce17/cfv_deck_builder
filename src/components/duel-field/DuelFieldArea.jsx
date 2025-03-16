import PlayerBField from './PlayerBField'

const DuelFieldArea = () => {
  return (
    <section className='field-area text-center bg-sky-600'>
      <div className='ml-1 w-full h-full flex flex-col items-center'>
        {/* Player B field */}
        <PlayerBField />

        {/* Shared Guard Zone */}
        <section className='h-[10%] bg-green-500'>
          <div className='guard-zone bg-gray-400 rounded-lg'>Guard</div>
        </section>

        {/* Player A field */}
        <section className='board-a h-[35%] bg-sky-500'>
          <div className='flex flex-col justify-evenly h-full'>
            <div className='order-zone-a w-[130px] h-[96.25px] bg-gray-400 rounded-lg'>Order</div>
            <div className='dmg-zone-a w-[96.25px] h-[160px] bg-gray-400 rounded-lg'>Dmg</div>
          </div>
        </section>
        <section className='hand-zone-a w-[300px] h-[96.25px] bg-gray-400 rounded-lg'>
          Insert Hand Cards Here
        </section>
      </div>
    </section>
  )
}

export default DuelFieldArea