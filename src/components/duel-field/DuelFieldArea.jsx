import PlayerBField from './PlayerBField'
import PlayerAField from './PlayerAField'
import GuardZone from './GuardZone'

const DuelFieldArea = () => {
  return (
    <section className='field-area text-center bg-sky-600'>
      <div className='ml-1 w-full h-full flex flex-col items-center '>
        <PlayerBField />

        {/* Shared Guard Zone */}
        <GuardZone
          children={
            <>
              <div className='w-[86.25px] h-[60px] bg-orange-500 rounded-lg'>Guard</div>
              <div className='w-[86.25px] h-[60px] -ml-[40px] z-10 bg-red-500 rounded-lg'>Guard</div>
              <div className='w-[86.25px] h-[60px] -ml-[40px] z-10 bg-sky-500 rounded-lg'>Guard</div>
            </>
          }
        />

        <PlayerAField />
      </div>
    </section>
  )
}

export default DuelFieldArea